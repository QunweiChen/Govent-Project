import React, { useState, useLayoutEffect } from 'react'
import CartCard from '@/components/cart/cart-card'
import TodoAll from '@/components/cart/todo-all'
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
    merchantItems,
    removeItem,
    calcTotalItemstotal,
    calcTotalPricetotal,
    handleToggleCompleted,
    handleToggleSelectedAll,
    handleToggleSelectedMt,
    foundMt,
  } = useCart()

  const [hasMtItems, setHasMtItems] = useState(false)

  useLayoutEffect(() => {
    const mtItems = window.localStorage.getItem('MtItems')
    if (mtItems.length) setHasMtItems(mtItems > 0)
  }, [])
  return (
    <>
      <div className="container width-1200">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className=""
        >
          <div className="cart-area card bg-bg-gray-secondary">
            <div className="border-0 cart-card border-bottom border-normal-gray">
              <div className="row my-4">
                <div className="col-6 text-white d-flex align-items-center">
                  <Link href="../cart/event-list">
                    <h4 className="ms-4 text-white">購物車</h4>
                  </Link>
                </div>
                <TodoAll
                  merchantItems={merchantItems}
                  handleToggleSelectedAll={handleToggleSelectedAll}
                />
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
                calcTotalItemstotal={calcTotalItemstotal}
                calcTotalPricetotal={calcTotalPricetotal}
              />
            ) : (
              <NoCart />
            )}
          </div>
        </motion.div>
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
              合計{calcTotalItemstotal}件商品
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <p className="text-white ms-3">總金額 NT {calcTotalPricetotal}</p>
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
