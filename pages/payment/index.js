import React, { useEffect, useState } from 'react'
import ProductInfo from '@/components/payment/product-info/index.js'
import { Form } from 'react-bootstrap'
import DefaultLayout from '@/components/layout/default-layout'
import PaymentForm from '@/components/payment/payment-Form'
export default function Payment() {
  const [discount, setDiscount] = useState({})
  console.log('discount', discount)
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
  console.log('MtItems', MtItems)
  //計算總金額
  const TotalPrice = () => {
    let total = 0
    productData.forEach((event) => {
      total += event.qty * event.price
    })

    return total
  }

  const redeem = () => {
    let total = TotalPrice()
    let point = total * 0.05
    return point
  }

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
          <PaymentForm setDiscount={setDiscount} />
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

            <div className=" d-flex justify-content-between align-items-center mb-1">
              優惠卷-全館消費95折 <span>– $300.00</span>
            </div>
            <div className=" d-flex justify-content-between align-items-center mb-1">
              點數折抵 <span>– $200.00</span>
            </div>
            <hr />
            <div className=" d-flex justify-content-between align-items-center fw-bold mb-1">
              合計 <span>NT${TotalPrice()}.00</span>
            </div>
            <div className=" d-flex justify-content-between align-items-center mb-1">
              點數回饋{' '}
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
