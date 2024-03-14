import { result } from 'lodash'
import React, { createContext, useState, useContext, useEffect } from 'react'
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

  // 加入到購物車中的項目
  const [cartItems, setCartItems] = useState(items)
  // 加入到各分類的項目
  const [merchantItems, setMerchantItems] = useState(MtItems)

  // 初始化 setValue(localStoage), setValue用於存入localStorage中
  const [storedValue, setValue] = useLocalStorage(localStorageKey1, items)
  const [storedValueMt, setValueMt] = useLocalStorage(localStorageKey2, MtItems)
  //連接資料庫
  const [Mt, setMt] = useState([])

  //重新定義公司
  useEffect(() => {
    const getCartMt = async () => {
      try {
        const response = await fetch('http://localhost:3005/api/cart')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setMt(data.data ? data.data.posts : [])
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    getCartMt()
  }, [])
  //送來資料多一個checked屬性
  useEffect(() => {
    const news = merchantItems.map((v) => {
      const a = v.items
      a.map((v) => {
        v.checked = false
      })
    })
    setMerchantItems(news)
  }, [])
  // 當 cartItems 更動時 -> 更動 localStorage 中的值 -> 更動 cartState
  useEffect(() => {
    // 使用字串比較
    if (JSON.stringify(cartItems) !== storedValue) {
      setValue(cartItems)
    }
    setMerchantItems(merchantItems)
    setMerchantItems(merchantItems)
    // 使用字串比較
    if (JSON.stringify(merchantItems) !== storedValueMt) {
      setValueMt(merchantItems)
    }
    // eslint-disable-next-line
}, [cartItems,merchantItems])

  //checkbox內容
  //切換
  // 依傳入id進行切換completed屬性改變
  const toggleCheckbox = (newmerchantItems, id) => {
    const news = newmerchantItems.map((merchant) => {
      return {
        ...merchant,
        items: merchant.items.map((item) => {
          if (item.id === id) {
            return { ...item, checked: !item.checked }
          } else {
            return item
          }
        }),
      }
    })
    setMerchantItems(news)
  }
  const handleToggleCompleted = (id) => {
    toggleCheckbox(merchantItems, id)
  }
  //全選
  const toggleSelectedAll = (MerchantItems, isSelectedAll) => {
    const news = MerchantItems.map((merchant) => {
      return {
        ...merchant,
        items: merchant.items.map((item) => {
          return { ...item, checked: isSelectedAll }
        }),
      }
    })
    setMerchantItems(news)
  }
  const handleToggleSelectedAll = (isSelectedAll) => {
    toggleSelectedAll(merchantItems, isSelectedAll)
  }
  //商家全選
  const toggleSelectedMt = (merchantItems, isSelectedMt, MtId) => {
    const news = merchantItems.map((merchant) => {
      if (merchant.merchantId === MtId) {
        return {
          ...merchant,
          items: merchant.items.map((item) => {
            return { ...item, checked: isSelectedMt }
          }),
        }
      } else {
        return merchant
      }
    })
    console.log(news)
    setMerchantItems(news)
  }
  const handleToggleSelectedMt = (isSelectedMt, MtId) => {
    toggleSelectedMt(merchantItems, isSelectedMt, MtId)
  }
  //資料庫-用id尋找商家name
  const foundMt = (MtId) => {
    const foundItem = Mt.find((item) => item.id === MtId)
    const bankName = foundItem?.name
    return bankName
  }
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
    // console.log(filteredItems)
    setMerchantItems(filteredItems)
    //---
    const news = cartItems.filter((item) => item.id !== id)
    // console.log(cartItems)
    // console.log(news)
    setCartItems(news)
  }
  //`incrementOne(items, id)` 依照某id更新項目的數量+1
  const incrementOne = (items, id, merchantId) => {
    const newItems = items.map((merchant) => {
      if (merchant.merchantId === merchantId) {
        // 找到對應票券
        const updatedItems = merchant.items.map((item) => {
          if (item.id === id) {
            // 找到要增加數量的項目
            const newQty = item.qty + 1 > 0 ? item.qty + 1 : 1
            // 返回更新後的項目
            return { ...item, qty: newQty }
          }
          return item
        })

        // 返回更新後的商家資料
        return { ...merchant, items: updatedItems }
      }
      return merchant
    })
    // console.log(newItems)
    setMerchantItems(newItems)
  }
  // decrementOne(items, id)` 依照某id更新項目的數量-1。最小為1。
  const decrementOne = (items, id, merchantId) => {
    const newItems = items
      .map((merchant) => {
        if (merchant.merchantId === merchantId) {
          // 找到对应商家
          const updatedItems = merchant.items
            .map((item) => {
              if (item.id === id) {
                // 找到要减少数量的项目
                const newQty = item.qty - 1 > 0 ? item.qty - 1 : 0
                // 如果数量为0，则该项目自动消失
                if (newQty === 0) return null
                // 返回更新后的项目
                return { ...item, qty: newQty }
              }
              return item
            })
            .filter(Boolean) // 过滤掉值为 null 的项目

          // 如果商家内没有项目，则将该商家从商家列表中删除
          if (updatedItems.length === 0) return null

          // 返回更新后的商家数据
          return { ...merchant, items: updatedItems }
        }
        return merchant
      })
      .filter(Boolean) // 过滤掉值为 null 的商家

    // console.log(newItems)
    setMerchantItems(newItems)
  }

  //計算數量
  // console.log(merchantItems)
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
  const calcTotalItemstotal = calcTotalItems()
  // console.log(calcTotalItemstotal)

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
  const calcTotalPricetotal = parseInt(calcTotalPrice()).toLocaleString()

  //最外(上)元件階層包裹提供者元件，讓⽗⺟元件可以提供它
  return (
    <CartContext.Provider
      value={{
        MtItems,
        cartItems,
        addItem,
        MerchantItem,
        merchantItems,
        setMerchantItems,
        removeItem,
        calcTotalItemstotal,
        calcTotalPricetotal,
        handleToggleCompleted,
        handleToggleSelectedAll,
        handleToggleSelectedMt,
        foundMt,
        calcTotalItems,
        incrementOne,
        decrementOne,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
//在任何子元件層級深度,使用 useContext 勾子讀取它
export const useCart = () => useContext(CartContext)