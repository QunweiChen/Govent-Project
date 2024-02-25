import React, { createContext, useState, useContext } from 'react'

//建立context
const CartContext = createContext()

export function CartProvider({ children }) {
  //最外(上)元件階層包裹提供者元件，讓⽗⺟元件可以提供它
  return <CartContext.Provider>{children}</CartContext.Provider>
}
//在任何子元件層級深度,使用 useContext 勾子讀取它
export const useCart = () => useContext(CartContext)
