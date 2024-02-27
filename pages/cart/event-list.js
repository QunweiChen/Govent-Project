import React from 'react'
import events from '@/data/cart/events.json'
//勾子
import { useCart } from '@/hooks/use-cart'

export default function EventList() {
  const { addItem, items } = useCart()
  //   console.log(addItem)
  console.log(items)

  return (
    <>
      <ul className="">
        {events.map((v, i) => {
          return (
            <li className="" key={v.id}>
              <div className="">活動名稱 : {v.eventName}</div>
              <div>商家ID : {v.merchantId}</div>
              <div>票卷價格 : ${v.price}</div>
              <div>活動時間 : {v.holdingTime}</div>
              <div>數量 : {v.qty} 張</div>
              <div>
                <button
                  onClick={() => {
                    // console.log(v)
                    addItem(v)
                  }}
                >
                  加入購物車
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
