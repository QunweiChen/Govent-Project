import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Card from 'react-bootstrap/Card'
import Link from 'next/link'
import { useAuth } from '@/hooks/use-auth'
import { useCart } from '@/hooks/use-cart'

export default function Confirm() {
  const { setCartItems, cartItems, setPay, pay } = useCart()
  const { auth } = useAuth()
  console.log(auth)
  const [state, setState] = useState({})
  console.log(state)
  //付款完成之後會轉到這裡，在使用fetch在確認訂單是否有支付成功
  const router = useRouter()
  //移除使用的優惠券
  function delCoupon(couponID, point) {
    fetch('http://localhost:3005/api/payment/delete', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ couponID: couponID, point: point }),
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        return
      })
      .catch((err) => {
        console.log(err)
      })
  }
  //寄出訂購成功的email
  function mail(orderID) {
    fetch('http://localhost:3005/api/email/send', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ orderID }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        return
      })
      .catch((err) => {
        console.log(err)
      })
  }
  async function qrCode(orderID) {
    const data = await fetch(
      `http://localhost:3005/api/qrcode/data?orderID=${orderID}`,
      {
        method: 'GET',
      }
    )
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        return response.data
      })
      .catch((err) => {
        console.log(err)
      })
    let arr = JSON.parse(data[0].order_info)
    arr.map((e) => {
      console.log(e)
      let eventID = e.event_id
      fetch(`http://localhost:3005/api/qrcode`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ eventID, orderID }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    })
  }
  function handleCheckout() {
    console.log('清除購物車')
    // 將符合條件的項目從 cartItems 中移除
    // 過濾掉支付清單中的項目
    const updatedcartItems = cartItems
      .filter((item) => !pay.some((p) => p.id === item.id))
      // 如果商家中的票券不為空，則返回該商家
      .filter(Boolean) // 去除為空的商家
    // 將更新後的 cartItems 存回 localStorage
    window.localStorage.setItem('cartItems', JSON.stringify(updatedcartItems))
    setCartItems(updatedcartItems)
    setPay([])
  }
  useEffect(() => {
    if (router.isReady) {
      let transactionId = router.query.transactionId
      let orderID = router.query.orderID
      let couponID = router.query.couponID
      let point = router.query.point
      console.log(point)
      console.log(router.query)
      fetch(
        `http://localhost:3005/api/payment-line-pay/confirm?transactionId=${transactionId}&orderID=${orderID}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then((response) => {
          return response.json()
        })
        .then((response) => {
          //成功之後將優惠券及點數扣除
          setState(response)
          delCoupon(couponID, point)
          qrCode(orderID)
          // handleCheckout()
          mail(orderID)
          // handleCheckout()
          //如果成功五秒後跳轉回主頁
          // setTimeout(() => {
          //   window.location.replace('http://localhost:3000/')
          // }, 5000)
          return response
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [router.isReady])

  return (
    <>
      {state.result?.returnCode == '0000' && (
        <Card className="text-center ">
          <Card.Header>完成付款</Card.Header>
          <Card.Body>
            <Card.Title>您的訂單編號為</Card.Title>
            <Card.Text>{state.result.info.orderId}</Card.Text>
            <Link
              className="btn btn-primary"
              href={'http://localhost:3000/'}
              variant="primary"
            >
              回到主頁
            </Link>
          </Card.Body>
          <Card.Footer className="text-muted">五秒後返為主頁</Card.Footer>
        </Card>
      )}
      <style global jsx>
        {`
          main > .container {
            padding: 60px 15px 0;
          }
        `}
      </style>
    </>
  )
}
