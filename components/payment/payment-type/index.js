/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Form } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

export default function PaymentType() {
  return (
    <div className="payment-type  py-3 px-4 rounded-4 mb-4 bg-bg-gray-secondary">
      {/* 信用卡 */}
      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="creditCard"
        />
        <label className="form-check-label" htmlFor="creditCard">
          信用卡 / 簽帳金融卡
        </label>
        <div className="d-flex">
          {' '}
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
      </div>
      {/* LINE PAY */}
      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          <Image src="/line-pay/LINE-Pay(h)_W98_n.png" />
        </label>
      </div>
    </div>
  )
}
