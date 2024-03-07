import React, { useEffect, useState } from 'react'
import Link from 'next/link'
//勾子
import { useCart } from '@/hooks/use-cart'

export default function PayList() {
  //引入勾子
  const { merchantItems, setMerchantItems } = useCart()

  // 從 localStorage 中獲取 MtItems 資料
  var MtItemsString =
    typeof window !== 'undefined'
      ? window.localStorage.getItem('MtItems')
      : '[]'

  // 將字串轉換為 JavaScript 物件
  var MtItems = JSON.parse(MtItemsString)
  // console.log(MtItems)
  //存入狀態
  const [pay, setPay] = useState([])
  // console.log(pay)

  // 過濾出所有符合條件的項目
  const news = MtItems.flatMap((merchant) => {
    return merchant.items.filter((item) => item.checked === true)
  })
  //總價
  const TotalPrice = () => {
    let total = 0
    pay.forEach((event) => {
      total += event.qty * event.price
    })

    return total
  }
  // console.log(TotalPrice())

  // 定義處理結帳的函式
  const handleCheckout = () => {
    // 將符合條件的項目從 MtItems 中移除
    const updatedMtItems = MtItems.map((merchant) => {
      // 過濾掉支付清單中的項目
      const updatedItems = merchant.items.filter(
        (item) => !pay.some((p) => p.id === item.id)
      )
      // 如果商家中的票券為空，則不返回該商家
      return updatedItems.length > 0
        ? { ...merchant, items: updatedItems }
        : null
    }).filter(Boolean) // 去除為空的商家

    // 將更新後的 MtItems 存回 localStorage
    window.localStorage.setItem('MtItems', JSON.stringify(updatedMtItems))
    setMerchantItems(updatedMtItems)
    // 清空 pay 狀態
    setPay([])
  }

  //生命週期
  useEffect(() => {
    setPay(news)
  }, []) // 只在 news 更新時執行 setPay

  return (
    <>
      <h2 className="text-white">結帳內容</h2>
      {pay.map((v, i) => {
        return (
          <li className="text-white" key={v.id}>
            <div className="">活動名稱 : {v.eventName}</div>
            <div>商家ID : {v.merchantId}</div>
            <div>票卷價格 : ${v.price}</div>
            <div>活動時間 : {v.holdingTime}</div>
            <div>票券規格 : {v.ticketName}</div>
            <div>數量 : {v.qty} 張</div>
          </li>
        )
      })}
      <h3 className="text-white">總價:{TotalPrice()}</h3>

      {/* <Link href="/cart">確認結帳</Link> */}

      <button onClick={() => handleCheckout()}>確認結帳</button>
    </>
  )
}
