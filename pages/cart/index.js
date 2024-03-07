import React from 'react'
import CartCard from '@/components/cart/cart-card'
import NoCart from '@/components/cart/no-cart'
import EventsRecommend from '@/components/events-recommend'
import NavbarBottomRwd from '@/components/layout/default-layout/navbar-bottom-rwd'
import Link from 'next/link'
import { motion } from 'framer-motion'
//勾子
import { useCart } from '@/hooks/use-cart'

export default function CartIndex() {
  //--------
  //引入勾子
  const {
    data,
    merchantItems,
    removeItem,
    calcTotalItems,
    calcTotalPrice,
    handleToggleCompleted,
    handleToggleSelectedAll,
    handleToggleSelectedMt,
    foundMt,
  } = useCart()
  // {
  //   "id": 1,
  //   "merchantId": 1,
  //   "eventName": "YOASOBI 台北演唱會111",
  //   "holdingTime": "8:00",
  //   "images": "4-03.jpg",
  //   "ticketName": "優惠票",
  //   "price": "3400",
  //   "qty":2
  // }
  //-
  // [
  //   {
  //     merchantId: 1,
  //     items: [
  //       {
  //         id: 1,
  //         merchantId: 1,
  //         eventTypeId: 2,
  //         eventName: 'YOASOBI 台北演唱會111',
  //         startDate: '2024-04-01 8:00:00',
  //         endDate: '2024-04-01 11:00:00',
  //         holdingTime: '2023-06-15 14:23:45',
  //         images: '4-03.jpg',
  //         str: '台北市',
  //         vaild: '上架中',
  //         ticketName: '優惠票',
  //         price: '3400',
  //         qty: 2,
  //         checked: false
  //       }
  //     ]
  //   },
  //   {
  //     merchantId: 2,
  //     items: [
  //       {
  //         id: 3,
  //         merchantId: 2,
  //         eventTypeId: 2,
  //         eventName: 'YOASOBI 台北演唱會333',
  //         startDate: '2024-04-01 8:00:00',
  //         endDate: '2024-04-01 11:00:00',
  //         holdingTime: '2025-02-10 18:00:00',
  //         images: '4-03.jpg',
  //         str: '台北市',
  //         vaild: '上架中',
  //         ticketName: '早鳥票',
  //         price: '3000',
  //         qty: 5,
  //         checked: false
  //       }
  //     ]
  //   }
  // ]
  console.log(data)

  return (
    <>
      <div className="container width-1200">
        <div className="row justify-content-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className=""
          >
            <div className="col-sm-12">
              <div className="cart-area card bg-bg-gray-secondary">
                <div className="border-0 cart-card border-bottom border-normal-gray">
                  <div className="row g-0 my-4">
                    <div className="col-6 text-white d-flex align-items-center">
                      <a href="../cart/event-list">
                        <h4 className="ms-4 text-white">購物車</h4>
                      </a>
                    </div>
                    {merchantItems && merchantItems.length > 0 ? (
                      <div className="col-6 text-white d-flex align-items-center justify-content-end">
                        <label className="me-4 d-flex align-items-center justify-content-end form-check-label">
                          <input
                            type="checkbox"
                            // checked={selectAll}
                            onChange={(e) => {
                              // 切換所有的項目
                              handleToggleSelectedAll(e.target.checked)
                            }}
                            className="checkbox-large form-check-input"
                          />
                          <p className="ms-2">全選票券</p>
                        </label>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
                {/* 到時候return資料用這一層 */}
                {/* 沒購物車內容 判斷*/}
                {merchantItems && merchantItems.length > 0 ? (
                  <CartCard
                    merchantItems={merchantItems}
                    handleToggleSelectedMt={handleToggleSelectedMt}
                    foundMt={foundMt}
                    handleToggleCompleted={handleToggleCompleted}
                    removeItem={removeItem}
                    calcTotalItems={calcTotalItems}
                    calcTotalPrice={calcTotalPrice}
                  />
                ) : (
                  <NoCart />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className=""
      >
        <EventsRecommend />
      </motion.div>

      {/* <NavbarBottomRwd /> */}
      <div className="border-0 cart-card d-block d-sm-none border-top border-normal-gray bg-normal-gray-deep fixed-bottom">
        {merchantItems && merchantItems.length > 0 ? (
          <div className="d-flex justify-content-between align-items-center m-2">
            <p className="text-primary-light ms-3">
              合計{calcTotalItems()}件商品
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <p className="text-white ms-3">
                總金額 NT {parseInt(calcTotalPrice()).toLocaleString()}
              </p>
              <h6 className="btn btn-primary-deep text-white ms-4 m-0">
                <Link href="/payment" className="text-white">
                  前往結帳
                </Link>
              </h6>
            </div>
          </div>
        ) : (
          <div className="container d-flex justify-content-center bg-primary-deep">
            <Link href="/product/list" className="text-white my-2">
              瀏覽最新活動!
            </Link>
          </div>
        )}
      </div>

      <style global jsx>
        {`
          body {
            background-color: #151515;
          }
          main > .container {
            padding: 60px 15px 0;
            max-width: 1200px;
            margin: 0 auto;
          }
          .card-cover {
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
          }

          .width-1200 {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0;
          }

          .event:hover {
            background-color: #151515;
          }
          .cart-logo {
            width: 160px;
          }
          @media screen and (max-width: 576px) {
            .truncatetext {
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .card-body {
               {
                /* padding-bottom: 0; */
              }
            }
            .desktop-text {
              display: none;
            }
            .rwd-text {
              h6 {
                font-size: 14px;
                font-weight: 400;
                margin-bottom: 0;
              }
              p {
                font-size: 12px;
                font-weight: 300;
              }
              .hide {
                display: none;
              }
            }
          }
        `}
      </style>
    </>
  )
}
