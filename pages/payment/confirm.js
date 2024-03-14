import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Link from 'next/link'

export default function Confirm() {
  const [state, setState] = useState({
    result: {
      returnCode: '0000',
      returnMessage: 'Success.',
      info: {
        transactionId: 2024031502070335500,
        orderId: 'cb9e11bb-27af-457e-90f4-d8206a4cdc8b',
        payInfo: [
          {
            method: 'CREDIT_CARD',
            amount: 50000,
            maskedCreditCardNumber: '************1111',
          },
        ],
      },
    },
  })
  console.log(state)
  //付款完成之後會轉到這裡，在使用fetch在確認訂單是否有支付成功
  const router = useRouter()
  useEffect(() => {
    if (router.isReady) {
      let transactionId = router.query.transactionId
      let orderID = router.query.orderID

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
          setState(response)
          //如果成功五秒後跳轉回主頁
          setTimeout(() => {
            window.location.replace('http://localhost:3000/')
          }, 5000)
          return response
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [router.isReady])
  return (
    <>
      {state.result.returnCode == '0000' && (
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
