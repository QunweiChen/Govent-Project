import React from 'react'
import { Form } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'

export default function PaymentType() {
  return (
    <div className="payment-type bg-bg-gray-secondary py-3 px-4 rounded-4 mb-4">
      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="creditCard"
        />
        <label className="form-check-label" htmlFor="creditCard">
          信用卡 / 簽帳金融卡
        </label>
        <form action="" className="row g-3 needs-validation">
          <div className="col-md-4">
            <label htmlFor="cardNumber" className="form-label">
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
          <div className="col-md-4">
            <label htmlFor="Validityperiod" className="form-label">
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
          <div className="col-md-4">
            <label htmlFor="securityCode" className="form-label">
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
        </form>
      </div>
      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label className="form-check-label" for="flexRadioDefault2">
          {/* <Image src='@/public/line-pay/LINE-Pay(h)_W74_n.png'/> */}
          LINE PAY
        </label>
      </div>
    </div>
  )
}
