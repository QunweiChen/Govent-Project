import React, { useState } from 'react'
import CheckboxInput from '../checkbox-input'

export default function PointCoupons() {
  return (
    <>
      <div className="points-coupons-container d-flex row mb-3">
        <div className="point bg-bg-gray-secondary rounded-4  col me-2 py-3 px-4">
          <div className="point-title  mb-1">
            <CheckboxInput Content={'我要使用點數折抵（目前尚餘 583 點）'} />
          </div>
          <div className="point-input">
            <div class="mb-3">
              <label
                htmlFor="formGroupExampleInput"
                className="form-label sm-p"
              >
                折抵數量
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="輸入數量"
              />
            </div>
          </div>
        </div>
        <div className="coupon bg-bg-gray-secondary rounded-4 col ms-2 py-3 px-4">
          <div className="point-title d-flex">
            <CheckboxInput Content={'我要使用優惠卷'} />
          </div>
          <div className="point-input">
            <div class="mb-3">
              <label
                htmlFor="formGroupExampleInput"
                className="form-label sm-p"
              >
                優惠卷
              </label>
              <select class="form-select" aria-label="Default select example">
                <option selected>選擇優惠券</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
