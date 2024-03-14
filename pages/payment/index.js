import React, { use, useEffect, useState } from 'react'
import ProductInfo from '@/components/payment/product-info/index.js'
import DefaultLayout from '@/components/layout/default-layout'
import PaymentForm from '@/components/payment/payment-Form'

export default function Payment() {
  //總金額
  const [money, setMoney] = useState(0)
  //點數及優惠券的值
  const [discount, setDiscount] = useState({
    point: 0,
    coupon: { name: '', value: 1 },
  })
  //點數及優惠券是否被勾選
  const [discountState, setDiscountState] = useState({
    point: false,
    coupon: false,
  })
  //購物車資料
  const [productData, setProductData] = useState([])
  // 從 localStorage 中獲取 MtItems 資料
  const MtItemsString =
    typeof window !== 'undefined'
      ? window.localStorage.getItem('MtItems')
      : '[]'
  //轉成物件
  var MtItems = JSON.parse(MtItemsString)
  // 過濾出所有符合條件的項目
  const news = MtItems.flatMap((merchant) => {
    return merchant.items.filter((item) => item.checked === true)
  })
  //計算總金額
  const TotalPrice = () => {
    let total = 0
    news.forEach((event) => {
      total += event.qty * event.price
    })
    return total
  }
  //計算回饋的點數
  const redeem = () => {
    let total = money
    let point = Math.floor(total * 0.05)
    return point
  }
  //計算折價
  const coupon = () => {
    let total = TotalPrice()
    let coupon = discount.coupon.value
    if (coupon > 1) {
      return coupon
    }
    let result = total - total * coupon
    return result
  }

  //監聽是否有輸入優惠券或折抵金額
  useEffect(() => {
    let TotalMoney = TotalPrice()
    let result = 0
    switch (true) {
      case discountState.coupon == false && discountState.point == true:
        TotalMoney = TotalMoney - discount.point
        setMoney(TotalMoney)
        break
      case discountState.point == false && discountState.coupon == true:
        TotalMoney = TotalMoney - coupon()
        setMoney(TotalMoney)
        break
      case discountState.point == false && discountState.coupon == false:
        setMoney(TotalMoney)
        break
      case discount.point === '':
        setMoney(TotalPrice())
        if (discount.coupon.value !== 1) {
          setMoney(TotalPrice() - coupon())
        }
        break
      case discountState.point == true && discountState.coupon == true:
        result = TotalMoney - coupon() - discount.point
        setMoney(result)
        break
    }
  }, [discount, discountState])
  //初始化設定
  useEffect(() => {
    setMoney(TotalPrice())
  }, [])
  useEffect(() => {
    setProductData(news)
  }, [])
  return (
    <>
      <div className="row m-5  ">
        <div className="col-md-8 cart-area">
          <h3 className="bg-bg-gray-secondary rounded-3 py-3 px-4">訂單明細</h3>
          {/* 商品詳情 */}
          <ProductInfo productData={productData} />
          {/* 會員資料&折抵&付款資訊 */}
          <PaymentForm
            setDiscount={setDiscount}
            setDiscountState={setDiscountState}
            discount={discount}
            money={money}
            productData={productData}
            discountState={discountState}
            redeem={redeem}
          />
        </div>
        <div className="col-md-4 ">
          <div className="bg-bg-gray-secondary  rounded-4 py-3 px-4 sticky-top">
            {productData.map((v, i) => {
              return (
                <div
                  key={i}
                  className="d-flex justify-content-between align-items-center mb-1"
                >
                  <div className="col text-truncate pe-2">{v.eventName}</div>
                  <div className="col-auto ">
                    <span className="px-1">{v.qty}</span>
                    <span className="px-1">=</span> ${v.price * v.qty}
                  </div>
                </div>
              )
            })}
            {discount.coupon?.name !== '' && (
              <>
                <div className=" d-flex justify-content-between align-items-center mb-1">
                  <div>{discount.coupon?.name}</div>
                  <div>
                    <span className="px-1">-</span>
                    {coupon()}
                  </div>
                </div>
              </>
            )}

            <div className="col-auto">
              {discount.point !== '' && (
                <>
                  <div className=" d-flex justify-content-between align-items-center mb-1">
                    <div className="col">點數折抵</div>
                    <span className="px-1">-</span>
                    {discount.point}
                  </div>
                </>
              )}
            </div>
            <hr />
            <div className=" d-flex justify-content-between align-items-center fw-bold mb-1">
              合計 <span>NT${money}.00</span>
            </div>
            <div className=" d-flex justify-content-between align-items-center mb-1">
              點數回饋
              <span>
                <i className="bi bi-database"></i>
                {redeem()}
              </span>
            </div>
          </div>
        </div>
      </div>
      <style global jsx>
        {`
          body {
            background-color: #151515;
            color: #fff;
          }
          main > .container {
            padding: 60px 15px 0;
          }
        `}
      </style>
    </>
  )
}
Payment.getLayout = function (page) {
  return <DefaultLayout title="Payment">{page}</DefaultLayout>
}
