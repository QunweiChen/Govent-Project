import { result } from 'lodash'
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
  //連接資料庫
  const [data, setData] = useState([])

  useEffect(() => {
    const getCartMt = async () => {
      fetch('http://localhost:3005/api/cart')
        .then((res) => res.json())
        .then((text) => setData(text))
    }

    getCartMt()
  }, [])
  // console.log(data.data.posts)
  // 加入到購物車中的項目
  const [items, setItems] = useState([])
  // console.log(items)
  // 加入到各分類的項目
  const [merchantItems, setMerchantItems] = useState([])
  // console.log(merchantItems)

  // 添加分類
  const MerchantItem = (item, quantityToAdd) => {
    const merchantId = item.merchantId
    const existingCategory = merchantItems.find(
      (category) => category.merchantId === merchantId
    )
    if (existingCategory) {
      const existingItem = existingCategory.items.find((v) => v.id === item.id)
      if (existingItem) {
        // 如果已經存在相同的 merchantId 和相同的活動 id，則遞增該項目的數量
        const updatedItems = existingCategory.items.map((v) =>
          v.id === item.id ? { ...v, qty: v.qty + quantityToAdd } : v
        )
        const updatedCategories = merchantItems.map((category) =>
          category.merchantId === merchantId
            ? { ...category, items: updatedItems }
            : category
        )
        setMerchantItems(updatedCategories)
      } else {
        // 如果已經存在相同的 merchantId 但是不存在相同的活動 id，則將新的活動添加到該分類中
        const updatedItems = [
          ...existingCategory.items,
          { ...item, qty: quantityToAdd },
        ]
        const updatedCategories = merchantItems.map((category) =>
          category.merchantId === merchantId
            ? { ...category, items: updatedItems }
            : category
        )
        setMerchantItems(updatedCategories)
      }
    } else {
      // 如果不存在相同的 merchantId，則創建一個新的分類並將活動添加到該分類中
      const newCategory = {
        merchantId: merchantId,
        items: [{ ...item, qty: quantityToAdd }],
      }
      setMerchantItems([...merchantItems, newCategory])
    }
  }
  //添加
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
  //移除(分類用)
  const removeItem = (items, id, merchantId) => {
    const newItems = items.map((merchant) => {
      if (merchant.merchantId === merchantId) {
        // 找到對應商家
        const updatedItems = merchant.items.filter((item) => item.id !== id)
        // 移除指定的商品
        return { ...merchant, items: updatedItems }
      }
      return merchant
    })
    // 移除空商家（即沒有商品的商家）
    const filteredItems = newItems.filter(
      (merchant) => merchant.items.length > 0
    )
    console.log(filteredItems)
    setMerchantItems(filteredItems)
  }
  //計算數量
  //數量
  const calcTotalItems = () => {
    let total = 0

    for (let i = 0; i < merchantItems.length; i++) {
      console.log(merchantItems.length)
      console.log(merchantItems)
      merchantItems[i].items.forEach((event) => {
        total += event.qty
      })
    }
    console.log(total)
    return total
  }

  //總金額
  const calcTotalPrice = () => {
    let total = 0

    for (let i = 0; i < merchantItems.length; i++) {
      console.log(merchantItems.length)
      console.log(merchantItems)
      merchantItems[i].items.forEach((event) => {
        total += event.qty * event.price
      })
    }
    console.log(total)
    return total
  }
  //最外(上)元件階層包裹提供者元件，讓⽗⺟元件可以提供它
  return (
    <CartContext.Provider
      value={{
        data,
        items,
        addItem,
        MerchantItem,
        merchantItems,
        removeItem,
        calcTotalItems,
        calcTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
//在任何子元件層級深度,使用 useContext 勾子讀取它
export const useCart = () => useContext(CartContext)
