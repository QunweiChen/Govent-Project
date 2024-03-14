import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'react-bootstrap/Image'

import { Modal } from 'react-bootstrap'

export default function CartCard({
  merchantItems = {},
  handleToggleSelectedMt = () => {},
  foundMt = () => {},
  handleToggleCompleted = () => {},
  removeItem = () => {},
  calcTotalItemstotal = 0,
  calcTotalPricetotal = 0,
  incrementOne = () => {},
  decrementOne = () => {},
  checkcalcTotalItems = () => {},
}) {
  const [showModal, setShowModal] = useState(false)
  // console.log(showModal)
  // console.log(merchantItems)

  const checkAllChecked = (merchantItems) => {
    let allUnchecked = true

    merchantItems.forEach((merchant) => {
      merchant.items.forEach((item) => {
        if (item.checked) {
          allUnchecked = false
          return // 如果有一个选中了就跳出循环
        }
      })
    })

    setShowModal(allUnchecked) // 如果所有选项都未选中，则显示模态框
    return !allUnchecked // 返回是否有任何选项被选中
  }

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
                            onChange={() => {
                              // 這裡要作toggle completed狀態的動作
                              handleToggleCompleted(v.id)
                            }}
                            className="me-4 checkbox-large form-check-input"
                          />
                          <div className="bg-normal-white rounded-4 product-img">
                            <Image
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
                              <button
                                className="btn"
                                onClick={() => {
                                  decrementOne(
                                    merchantItems,
                                    v.id,
                                    v.merchantId
                                  )
                                }}
                              >
                                <i className="bi bi-dash-circle text-white"></i>
                              </button>
                              <p className="text-white">{v.qty}</p>
                              <button
                                className="btn"
                                onClick={() => {
                                  incrementOne(
                                    merchantItems,
                                    v.id,
                                    v.merchantId
                                  )
                                }}
                              >
                                <i className="bi bi-plus-circle text-white"></i>
                              </button>
                            </div>
                            <p className="col-sm-6 text-white">
                              NT ${parseInt(v.price).toLocaleString()}
                              /張
                            </p>
                          </div>
                        </div>
                        <div className="col-1 d-flex justify-content-center align-items-center">
                          <div className="btn me-5 me-sm-0">
                            <button
                              type="button"
                              className="p btn d-flex justify-content-center align-items-center text-white text-nowrap"
                              data-bs-toggle="modal"
                              data-bs-target="#delete"
                            >
                              <i className="bi bi-trash-fill text-primary-light me-1"></i>
                              刪除
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* 吐司 */}
                    <div
                      className="modal fade"
                      id="delete"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabindex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header ">
                            <h1
                              className="modal-title fs-5 "
                              id="staticBackdropLabel"
                            >
                              是否要移除此張票券?
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              再考慮一下
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-bs-dismiss="modal"
                              onClick={() => {
                                setTimeout(() => {
                                  removeItem(merchantItems, v.id, v.merchantId)
                                }, 650)
                              }}
                            >
                              移除
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
            已選取 {calcTotalItemstotal} 張票券
          </p>
          <h5 className="text-white ms-3">總金額 NT {calcTotalPricetotal}</h5>
          <h6 className="btn btn-primary-deep ms-4">
            <Link
              href="/payment"
              className="text-white"
              onClick={(e) => {
                if (!checkAllChecked(merchantItems)) {
                  e.preventDefault() // 阻止默认行为
                }
              }}
            >
              前往結帳
            </Link>
          </h6>
        </div>
      </div>
      {/* 吐司 */}
      <Modal
        show={showModal} // 控制模态框显示
        onHide={() => setShowModal(false)} // 点击模态框外部或关闭按钮时关闭模态框
        centered
      >
        <Modal.Body>
          <Modal.Header closeButton>請勾選要結帳的票券</Modal.Header>
        </Modal.Body>
      </Modal>
    </>
  )
}
