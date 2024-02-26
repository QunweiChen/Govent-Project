/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState } from 'react'
import Image from 'react-bootstrap/Image'
import GoventToast from '@/components/toast'

export default function PaymentType() {
  // const [cardValue, setCardValue] = useState(false)
  // const [linePayValue, setlinePayValue] = useState(false)
  const cardValue = useRef(null)
  const linePayValue = useRef(null)
  function changeValue() {
    let value = cardValue.current.checked
    console.log(value)
  }
  return (
    <div className="payment-type  py-3 px-4 rounded-4 mb-4 bg-bg-gray-secondary">
      {/* 信用卡 */}
      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="radio"
          name="paymentType"
          id="creditCard"
          ref={cardValue}
          onChange={changeValue}
        />
        <label className="form-check-label" htmlFor="creditCard">
          信用卡 / 簽帳金融卡
        </label>
        {/* 輸入信用卡內容 */}
        <GoventToast>
          <div className="d-flex">
            <div className="col-md-4 px-2">
              <label
                htmlFor="cardNumber"
                className="form-label sm-p text-normal-gray-light"
              >
                信用卡號碼
              </label>
              <input
                type="text"
                className="form-control"
                id="cardNumber"
                value="Mark"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4 px-2">
              <label
                htmlFor="Validityperiod"
                className="form-label sm-p text-normal-gray-light"
              >
                有效期限（月／年）
              </label>
              <input
                type="text"
                className="form-control"
                id="Validityperiod"
                value="Mark"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4 px-2">
              <label
                htmlFor="securityCode"
                className="form-label sm-p text-normal-gray-light"
              >
                安全碼
              </label>
              <input
                type="text"
                className="form-control"
                id="securityCode"
                value="Mark"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
          </div>
        </GoventToast>
      </div>
      {/* LINE PAY */}
      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="radio"
          name="paymentType"
          id="flexRadioDefault2"
          ref={linePayValue}
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          <Image src="/line-pay/LINE Pay_logo-02.png" />
        </label>
      </div>
    </div>
  )
}
