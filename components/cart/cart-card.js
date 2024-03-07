import React from 'react'
import Link from 'next/link'

export default function CartCard({
  merchantItems = {},
  handleToggleSelectedMt = () => {},
  foundMt = () => {},
  handleToggleCompleted = () => {},
  removeItem = () => {},
  calcTotalItems = () => {},
  calcTotalPrice = () => {},
}) {
  return (
    <>
      <div className="rwd-text">
        {merchantItems.map((v, i) => {
          return (
            <div key={i}>
              <div className="border-0 cart-card border-bottom border-top border-normal-gray">
                <div className="d-flex align-items-center justify-content-between my-3 text-center">
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        handleToggleSelectedMt(e.target.checked, v.merchantId)
                      }}
                      className="ms-4 checkbox-large form-check-input"
                    />
                    <div className="ms-4 text-primary-light">
                      {foundMt(v.merchantId)}
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
                            onChange={(e) => {
                              // 這裡要作toggle completed狀態的動作
                              handleToggleCompleted(v.id)
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
                                <p className="text-white ms-2">{datePart}</p>
                              </div>
                              <div className="col-sm-6 col-12 d-flex justify-content-start align-items-center">
                                <i className="bi bi-clock text-primary-light"></i>
                                <p className="text-white ms-2">{timePart}</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-4 col row d-flex justify-content-center align-items-center pb-3 pb-sm-0">
                            <div className="col-sm-6 d-flex justify-content-start align-items-center">
                              <i className="bi bi-person-fill text-primary-light"></i>
                              <p className="text-white ms-2"> X {v.qty} 張</p>
                            </div>
                            <div className="col-sm-6">
                              <p className="text-white">
                                NT ${parseInt(v.price).toLocaleString()}
                                /張
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-1 d-flex justify-content-center align-items-center">
                          <div className="btn me-5 me-sm-0">
                            <button
                              className="btn d-flex justify-content-center align-items-center"
                              onClick={() => {
                                removeItem(merchantItems, v.id, v.merchantId)
                              }}
                            >
                              <i className="bi bi-trash-fill text-primary-light"></i>
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
      <div className="border-0 cart-card d-none d-sm-block border-top border-normal-gray">
        <div className="d-flex justify-content-end align-items-center m-4">
          <p className="text-primary-light ms-3">
            合計{calcTotalItems()}件商品
          </p>
          <h5 className="text-white ms-3">
            總金額 NT {parseInt(calcTotalPrice()).toLocaleString()}
          </h5>
          <h6 className="btn btn-primary-deep ms-4">
            <Link href="/cart/pay-list" className="text-white">
              前往結帳
            </Link>
          </h6>
        </div>
      </div>
    </>
  )
}
