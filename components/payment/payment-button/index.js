import React from 'react'
import CheckboxInput from '../checkbox-input'

export default function PaymentButton() {
  return (
    <>
      <div className="agree d-flex justify-content-center mb-2">
        <CheckboxInput />
        <p className="p">
          我同意網站 <span className="text-warning">服務條款</span> 及{' '}
          <span className="text-warning">隱私權政策</span>{' '}
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <button
          type="submit"
          className="btn btn-primary h6 fw-bolder text-white"
          style={{ width: '400px', height: '60px', borderRadius: '15px' }}
        >
          確認付款
        </button>
      </div>
    </>
  )
}
