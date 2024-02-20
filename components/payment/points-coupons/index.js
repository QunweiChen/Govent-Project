import React from 'react'
import CheckboxInput from '../checkbox-input'

export default function PointCoupons() {
  return (
    <> <div className="points-coupons-container d-flex row mb-3">
    <div className="point bg-bg-gray-secondary rounded-4  col me-2 py-3 px-4">
      <div className="point-title d-flex mb-1">
        <CheckboxInput />
        <p >我要使用點數折抵（目前尚餘 583 點）</p>
      </div>
      <div className="point-input">
        <div class="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            折抵數量
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Example input placeholder"
          />
        </div>
      </div>
    </div>
    <div className="coupon bg-bg-gray-secondary rounded-4 col ms-2 py-3 px-4">
      <div className="point-title d-flex">
        <CheckboxInput />
        <p>我要使用點數折抵（目前尚餘 583 點）</p>
      </div>
      <div className="point-input">
        <div class="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            折抵數量
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Example input placeholder"
          />
        </div>
      </div>
    </div>
  </div></>
  )
}
