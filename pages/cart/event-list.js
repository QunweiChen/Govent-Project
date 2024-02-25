import React from 'react'
import events from '@/data/cart/events.json'
//勾子
import { useCart } from '@/hooks/use-cart/use-cart'

export default function EventList() {
  const { addItem } = useCart()
  return (
    <>
      <ul className="">
        {events.map((v, i) => {
          return (
            <li className="" key={v.id}>
              <div className="">活動名稱 : {v.eventName}</div>
              <div>票卷價格 : ${v.price}</div>
              <div>活動時間 : {v.holdingTime}</div>
              <div>數量 : {v.qty} 張</div>
              <div>
                <button onClick={() => {}}>加入購物車</button>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
