import React, { useEffect, useState } from 'react'
import EventsRecommend from '@/components/events-recommend'
import NavbarBottomRwd from '@/components/layout/default-layout/navbar-bottom-rwd'
import Link from 'next/link'
//勾子
import { useCart } from '@/hooks/use-cart'
import { faL } from '@fortawesome/free-solid-svg-icons'
import { setMinutes } from 'date-fns'

export default function CartIndex() {
  //--------
  //引入勾子
  const { items, merchantItems, removeItem, calcTotalItems, calcTotalPrice } =
    useCart()
  // console.log(merchantItems)
  // -
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

  //送來資料多一個checked屬性
  merchantItems.map((v, i) => {
    const a = v.items
    a.map((v, i) => {
      v.checked = false
    })
  })

  //設定至狀態(下方跑map使用)
  const [newMerchantItems, setNewMerchantItems] = useState(merchantItems)
  //即時更新
  useEffect(() => {
    setNewMerchantItems(merchantItems)
  }, [merchantItems])
  //checkbox內容
  //全選
  const [selectAll, setSelectAll] = useState(false)
  //商家全選
  const [selectMt, setSelectMt] = useState(false)
  //切換
  const toggleCheckbox = (merchantItems, id) => {
    return merchantItems.map((merchant) => {
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
  }
  //全選
  const handleSelectAll = (e) => {
    const isChecked = e.target.checked
    setSelectAll(isChecked)
    const updatedItems = newMerchantItems.map((merchant) => {
      return {
        ...merchant,
        items: merchant.items.map((item) => {
          return { ...item, checked: isChecked }
        }),
      }
    })
    setNewMerchantItems(updatedItems)
  }
  //商家全選
  const handleSelectMt = (isChecked, MtId) => {
    setSelectMt(isChecked)
    const updatedItems = newMerchantItems.map((merchant) => {
      if (merchant.merchantId === MtId) {
        return {
          ...merchant,
          items: merchant.items.map((item) => {
            return { ...item, checked: isChecked }
          }),
        }
      } else {
        return merchant
      }
    })
    setNewMerchantItems(updatedItems)
  }
  return (
    <>
      <div className="container width-1200">
        <div className="row justify-content-center">
          <div className="col-sm-12">
            <div className="cart-top ">
              <div className="cart-area card bg-bg-gray-secondary">
                <div className="border-0 cart-card border-bottom border-normal-gray">
                  <div className="row g-0 my-4">
                    <div className="col-6 text-white d-flex align-items-center">
                      <Link href="/cart/event-list">
                        <h4 className="ms-4 text-white">購物車</h4>
                      </Link>
                    </div>
                    <div className="col-6 text-white d-flex align-items-center justify-content-end">
                      <label className="me-4 d-flex align-items-center justify-content-end form-check-label">
                        <input
                          type="checkbox"
                          checked={selectAll}
                          onChange={handleSelectAll}
                          className="checkbox-large form-check-input"
                        />
                        <p className="ms-2">全選票券</p>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="rwd-text">
                  {/* 到時候return資料用這一層 */} {/* 第一 */}
                  {newMerchantItems.map((v, i) => {
                    return (
                      <div key={i}>
                        <div className="border-0 cart-card border-bottom border-top border-normal-gray">
                          <div className="d-flex align-items-center justify-content-between my-3 text-center">
                            <div className="d-flex align-items-center">
                              <input
                                type="checkbox"
                                checked={selectMt}
                                onChange={(e) => {
                                  const isChecked = e.target.checked
                                  handleSelectMt(isChecked, v.merchantId)
                                }}
                                className="ms-4 checkbox-large form-check-input"
                              />
                              <div className="ms-4 text-primary-light">
                                {v.merchantId}
                              </div>
                            </div>
                            <div className="me-4">
                              <i className="bi bi-chevron-right text-white"></i>
                            </div>
                          </div>
                        </div>
                        {v.items.map((v, i) => {
                          // 使用 split() 方法分割日期時間字串
                          const [datePart, timePart] = v.holdingTime.split(' ')
                          return (
                            <div key={i}>
                              <div className="border-bottom border-normal-gray">
                                <div className="border-0 cart-card row g-0 py-3 event">
                                  <div className="col-sm-2 col-4 d-flex align-items-center ms-4">
                                    <input
                                      type="checkbox"
                                      checked={v.checked}
                                      onChange={() => {
                                        setNewMerchantItems(
                                          toggleCheckbox(newMerchantItems, v.id)
                                        )
                                      }}
                                      className="me-4 checkbox-large form-check-input"
                                    />
                                    <div className="bg-normal-white rounded-4 product-img">
                                      <img
                                        src="./images/cart/4-03.jpg"
                                        className=" rounded-start object-fit-cover"
                                        alt="..."
                                      />
                                    </div>
                                  </div>

                                  <div className="col-sm-9 col-7 row">
                                    <div className="card-body col-sm-8 col">
                                      <h6 className="card-title card-text d-flex justify-content-between align-items-center text-white truncatetext">
                                        {v.eventName}
                                      </h6>
                                      <p className="card-text text-primary-light mt-2">
                                        {v.ticketName}
                                      </p>
                                      <div className="iconbar text-white d-flex align-items-center mt-2 row">
                                        <div className="col-sm-6 col-12 d-flex justify-content-start align-items-center">
                                          <i className="bi bi-calendar-week text-primary-light"></i>
                                          <p className="text-white ms-2">
                                            {datePart}
                                          </p>
                                        </div>
                                        <div className="col-sm-6 col-12 d-flex justify-content-start align-items-center">
                                          <i className="bi bi-clock text-primary-light"></i>
                                          <p className="text-white ms-2">
                                            {timePart}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-4 col row d-flex justify-content-center align-items-center pb-3 pb-sm-0">
                                      <div className="col-sm-6 d-flex justify-content-start align-items-center">
                                        <i className="bi bi-person-fill text-primary-light"></i>
                                        <p className="text-white ms-2">
                                          {' '}
                                          X {v.qty} 張
                                        </p>
                                      </div>
                                      <div className="col-sm-6">
                                        <p className="text-white">
                                          NT $
                                          {parseInt(v.price).toLocaleString()}
                                          /張
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-1 d-flex justify-content-center align-items-center">
                                    <div className="btn d-flex justify-content-center align-items-center me-5 me-sm-0">
                                      <i className="bi bi-trash-fill text-primary-light"></i>
                                      <button
                                        className="btn"
                                        onClick={() => {
                                          removeItem(
                                            newMerchantItems,
                                            v.id,
                                            v.merchantId
                                          )
                                        }}
                                      >
                                        <p className="text-white ms-2 hide text-nowrap">
                                          刪除
                                        </p>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    )
                  })}
                </div>
                <div className="border-0 cart-card d-none d-xxl-block border-top border-normal-gray">
                  <div className="d-flex justify-content-end align-items-center m-4">
                    <p className="text-primary-light ms-3">
                      合計{calcTotalItems()}件商品
                    </p>
                    <h5 className="text-white ms-3">
                      總金額 NT {parseInt(calcTotalPrice()).toLocaleString()}
                    </h5>
                    <h6 className="btn btn-primary-deep ms-4">
                      <Link href="/payment" className="text-white">
                        前往結帳
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EventsRecommend />
      {/* <NavbarBottomRwd /> */}
      <div className="border-0 cart-card d-block d-xxl-none border-top border-normal-gray bg-normal-gray-deep fixed-bottom">
        <div className="d-flex justify-content-between align-items-center m-2">
          <p className="text-primary-light ms-3">
            合計{calcTotalItems()}件商品
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <p className="text-white ms-3">
              總金額 NT {parseInt(calcTotalPrice()).toLocaleString()}
            </p>
            <h6 className="btn btn-primary-deep text-white ms-4 m-0 ">
              前往結帳
            </h6>
          </div>
        </div>
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
