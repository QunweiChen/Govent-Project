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

  // 初始化 cartItems, cartState)($)
  // 加入到購物車中的項目
  const [cartItems, setCartItems] = useState(items)
  // 加入到各分類的項目
  const [merchantItems, setMerchantItems] = useState(MtItems)
  console.log(merchantItems)
  //送來資料多一個checked屬性
  //即時更新
  useEffect(() => {
    const news = merchantItems.map((v, i) => {
      const a = v.items
      a.map((v, i) => {
        v.checked = false
      })
    })
    setMerchantItems(news)
  }, [])
  useEffect(() => {
    setMerchantItems(merchantItems)
  }, [merchantItems])
  // 當 cartItems 更動時 -> 更動 localStorage 中的值 -> 更動 cartState
  useEffect(() => {
    // 使用字串比較
    if (JSON.stringify(cartItems) !== storedValue) {
      setValue(cartItems)
    }
    // eslint-disable-next-line
}, [cartItems])
  useEffect(() => {
    console.log(merchantItems)
    // 使用字串比較
    if (JSON.stringify(merchantItems) !== storedValueMt) {
      setValueMt(merchantItems)
    }
    // eslint-disable-next-line
}, [merchantItems])

  // 初始化 setValue(localStoage), setValue用於存入localStorage中
  const [storedValue, setValue] = useLocalStorage(localStorageKey1, items)
  const [storedValueMt, setValueMt] = useLocalStorage(localStorageKey2, MtItems)
  //連接資料庫
  const [data, setData] = useState([])
  const [Mt, setMt] = useState([])
  console.log(data)
  useEffect(() => {
    const getCartMt = async () => {
      fetch('http://localhost:3005/api/cart')
        .then((res) => res.json())
        .then((text) => {
          setData(text)
          setMt(text.data ? text.data.posts : [])
        })
    }

    getCartMt()
  }, [])
  //重新定義公司
  //const Mt = data.data ? data.data.posts : []
  // console.log(Mt)

  //checkbox內容
  //商家全選
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
    // console.log(news)
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
    // console.log(news)
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
    // console.log(bankName)
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
        setMerchantItems,
        removeItem,
        calcTotalItems,
        calcTotalPrice,
        handleToggleCompleted,
        handleToggleSelectedAll,
        handleToggleSelectedMt,
        foundMt,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
//在任何子元件層級深度,使用 useContext 勾子讀取它
export const useCart = () => useContext(CartContext)
