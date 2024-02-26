import React, { createContext, useState, useContext } from 'react'
import {
  init,
  initState,
  addOne,
  findOneById,
  updateOne,
  removeOne,
  incrementOne,
  decrementOne,
  generateCartState,
} from '@/hooks/use-cart/cart-reducer-state'
//建立context
const CartContext = createContext()

export function CartProvider({ children }) {
  // 加入到購物車中的項目
  const [items, setItems] = useState([])
  console.log(items)

  const addItem = (item) => {
    // setItems((prevItems) => [...prevItems, item])
    const newItems = [...items, item]
    setItems(newItems)
  }
  const one = [{ 1: '1' }]
  //最外(上)元件階層包裹提供者元件，讓⽗⺟元件可以提供它
  return (
    <CartContext.Provider value={{ one, items, addItem }}>
      {children}
    </CartContext.Provider>
  )
}
//在任何子元件層級深度,使用 useContext 勾子讀取它
export const useCart = () => useContext(CartContext)
