import React, { createContext, useState, useContext, useEffect } from 'react'
// import {
//   init,
//   initState,
//   addOne,
//   findOneById,
//   updateOne,
//   removeOne,
//   incrementOne,
//   decrementOne,
//   generateCartState,
// } from '@/hooks/use-cart/cart-reducer-state'
//建立context
const CartContext = createContext()

export function CartProvider({ children }) {

  // 加入到購物車中的項目
  const [items, setItems] = useState([])
  // console.log(items)
  const addItem = (item) => {
    // console.log(item)
    const foundIndex = items.findIndex((v, i) => {
      return v.id === item.id
    })
    if (foundIndex > -1) {
      increment(items, item.id)
    } else {
      const newItems = [...items, item]
      setItems(newItems)
    }
  }
  //遞增
  const getItemById = (items, id) => {
    return items.find((item) => item.id === id)
  }
  const increment = (items, id) => {
    const newItems = items.map((v, i) => {
      if (v.id === id) return { ...v, qty: v.qty + getItemById(items, id).qty }
      else return v
    })
    setItems(newItems)
  }
  //移除
  const removeItem = (items, id) => {
    const newItems = items.filter((v, i) => {
      return v.id !== id
    })
    setItems(newItems)
  }
  //計算數量
  //數量
  const calcTotalItems = () => {
    let total = 0

    for (let i = 0; i < items.length; i++) {
      total += items[i].qty
    }
    return total
  }

  //總金額
  const calcTotalPrice = () => {
    let total = 0

    for (let i = 0; i < items.length; i++) {
      total += items[i].qty * items[i].price
    }
    return total
  }

  //最外(上)元件階層包裹提供者元件，讓⽗⺟元件可以提供它
  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, calcTotalItems, calcTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  )
}
//在任何子元件層級深度,使用 useContext 勾子讀取它
export const useCart = () => useContext(CartContext)
