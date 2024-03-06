import { result } from 'lodash'
import React, { createContext, useState, useContext, useEffect } from 'react'
import { init } from '@/hooks/use-cart/cart-reducer-state'
import useLocalStorage from '@/hooks/use-localstorage'

//建立context
const CartContext = createContext()

export function CartProvider({
  children,
  initialCartItems = [], //初始化購物車的加入項目
  initialMtItems = [], //初始化購物車的加入項目
  localStorageKey1 = 'cartItems', //初始化localStorage的鍵名
  localStorageKey2 = 'MtItems', //初始化localStorage的鍵名
}) {
  //連接資料庫
  const [data, setData] = useState([])
  console.log(data)
  useEffect(() => {
    const getCartMt = async () => {
      fetch('http://localhost:3005/api/cart')
        .then((res) => res.json())
        .then((text) => setData(text))
    }

    getCartMt()
  }, [])

  // localStorage中儲存 items、MtItems。如果localStorage有此鍵中的值，則套入使用作為初始items、MtItems。
  let items = initialCartItems
  if (!items.length) {
    try {
      // 修正nextjs中window is undefined的問題
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(localStorageKey1)
        // 剖析存儲的json，如果沒有則返回初始值
        items = item ? JSON.parse(item) : []
      }
    } catch (error) {
      items = []
      console.log(error)
    }
  }

  let MtItems = initialMtItems
  if (!MtItems.length) {
    try {
      // 修正nextjs中window is undefined的問題
      if (typeof window !== 'undefined') {
        const item = window.localStorage.getItem(localStorageKey2)
        // 剖析存儲的json，如果沒有則返回初始值
        MtItems = item ? JSON.parse(item) : []
      }
    } catch (error) {
      MtItems = []
      console.log(error)
    }
  }

  // 初始化 cartItems, cartState)($)
  // 加入到購物車中的項目
  const [cartItems, setCartItems] = useState(items)
  // 加入到各分類的項目
  const [merchantItems, setMerchantItems] = useState(MtItems)
  const [cartState, setCartState] = useState(init(items))

  // 初始化 setValue(localStoage), setValue用於存入localStorage中
  const [storedValue, setValue] = useLocalStorage(localStorageKey1, items)
  const [storedValueMt, setValueMt] = useLocalStorage(localStorageKey2, MtItems)

  //送來資料多一個checked屬性
  merchantItems.map((v, i) => {
    const a = v.items
    a.map((v, i) => {
      v.checked = false
    })
  })
  //即時更新
  useEffect(() => {
    setNewMerchantItems(merchantItems)
  }, [merchantItems])

  //設定至狀態(下方跑map使用)
  const [newMerchantItems, setNewMerchantItems] = useState(merchantItems)
  // console.log(newMerchantItems)
  // 當 cartItems 更動時 -> 更動 localStorage 中的值 -> 更動 cartState
  useEffect(() => {
    // 使用字串比較
    if (JSON.stringify(cartItems) !== storedValue) {
      setValue(cartItems)
    }
    // eslint-disable-next-line
}, [cartItems])

  useEffect(() => {
    // 使用字串比較
    if (JSON.stringify(merchantItems) !== storedValueMt) {
      setValueMt(merchantItems)
    }
    // eslint-disable-next-line
}, [merchantItems])



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
    const foundIndex = cartItems.findIndex((v, i) => {
      return v.id === item.id
    })
    if (foundIndex > -1) {
      increment(cartItems, item.id)
    } else {
      const newItems = [...cartItems, item]
      setCartItems(newItems)
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
    setCartItems(newItems)
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
      merchantItems[i].items.forEach((event) => {
        total += event.qty
      })
    }
    return total
  }

  //總金額
  const calcTotalPrice = () => {
    let total = 0

    for (let i = 0; i < merchantItems.length; i++) {
      merchantItems[i].items.forEach((event) => {
        total += event.qty * event.price
      })
    }
    return total
  }
  //最外(上)元件階層包裹提供者元件，讓⽗⺟元件可以提供它
  return (
    <CartContext.Provider
      value={{
        data,
        cartItems,
        addItem,
        MerchantItem,
        merchantItems,
        newMerchantItems,
        setNewMerchantItems,
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
