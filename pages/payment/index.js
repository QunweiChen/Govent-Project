import React from 'react'
import styles from './payment.module.scss'
import ProductInfo from '@/components/payment/product-info/index.js'
import ConnectionData from '@/components/payment/connection-data'
import PaymentType from '@/components/payment/payment-type'
import PointCoupons from '@/components/payment/points-coupons'
import PaymentButton from '@/components/payment/payment-button'
export default function Payment() {
  return (
    <>
      <div className="row mt-5 mx-5 ">
        <div className="col-md-8 cart-area">
          <h3 className="bg-bg-gray-secondary rounded-3 py-3 px-4">訂單明細</h3>
          {/* 商品詳情 */}
          <ProductInfo />
          {/* 聯絡資料 */}
          <ConnectionData />
          {/* 付款方式 */}
          <div>
            <h5>
              <i className="bi bi-wallet-fill"></i>付款方式
            </h5>
          </div>
          <PointCoupons />
          <PaymentType />
          {/* 送出資料 */}
          <PaymentButton/>
        </div>
        <div className="col-md-4 ">
          <div className='bg-bg-gray-secondary  rounded-4 py-3 px-4'>
            <div className="d-flex justify-content-between align-items-center">
            <div className="text-truncate pe-2">
              YOASOBI演唱會2024台北站｜YOASOBI ASIA TOUR 2023-2024 Solo Concert
              in Taipei
            </div>
            <span className="">$4,300.00</span>
          </div>
          <div className=" d-flex justify-content-between align-items-center">
            優惠卷-全館消費95折 <span>– $300.00</span>
          </div>
          <div className=" d-flex justify-content-between align-items-center">
            點數折抵 <span>– $200.00</span>
          </div>
          <hr />
          <div className=" d-flex justify-content-between align-items-center fw-bold">
            合計 <span>NT$200.00</span>
          </div>
          <div className=" d-flex justify-content-between align-items-center ">
            點數回饋{' '}
            <span>
              <i className="bi bi-database"></i>1136
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
