import React, { useEffect, useState, useRef } from 'react'
import CheckboxInput from '../checkbox-input'

export default function PointCoupons() {
  const pointInputRef = useRef(null)
  const couponInputRef = useRef(null)
  //使用useState更改disabled的狀態，false為增加屬性true為關閉屬性
  const [pointDisabledValue, setPointDisabledValue] = useState(false)
  const [couponDisabledValue, setCouponDisabledValue] = useState(false)
  //從子元件傳遞過來true或是false的值
  function handlePointCheckboxChange(checkedValue) {
    setPointDisabledValue(checkedValue)
  }
  //從子元件傳遞過來true或是false的值
  function handleCouponCheckboxChange(checkedValue) {
    setCouponDisabledValue(checkedValue)
  }
  //使用Effect監聽值，當input打勾時執行add或remove，disabled屬性
  useEffect(() => {
    pointInputRef.current.removeAttribute('disabled', true)
    if (pointDisabledValue === false) {
      pointInputRef.current.setAttribute('disabled', true)
    }
    couponInputRef.current.removeAttribute('disabled', true)
    if (couponDisabledValue === false) {
      couponInputRef.current.setAttribute('disabled', true)
    }
  }, [pointDisabledValue, couponDisabledValue])

  return (
    <>
      <div className="points-coupons-container d-flex row mb-3 gx-0">
        <div className="point bg-bg-gray-secondary rounded-4  col me-2 py-3 px-4 ">
          <div className="point-title  mb-1">
            <CheckboxInput
              Content={'我要使用點數折抵（目前尚餘 583 點）'}
              inputID="point"
              change={handlePointCheckboxChange}
            />
          </div>
          <div className="point-input">
            <div className="mb-3">
              <label htmlFor="pointInput" className="form-label sm-p">
                折抵數量
              </label>
              <input
                type="text"
                className="form-control"
                id="pointInput"
                placeholder="輸入數量"
                ref={pointInputRef}
              />
            </div>
          </div>
        </div>
        <div className="coupon bg-bg-gray-secondary rounded-4 col ms-2 py-3 px-4">
          <div className="point-title d-flex">
            <CheckboxInput
              Content={'我要使用優惠卷'}
              inputID="coupon"
              change={handleCouponCheckboxChange}
            />
          </div>
          <div className="point-input">
            <div className="mb-3">
              <label htmlFor="couponInput" className="form-label sm-p">
                優惠卷
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                defaultValue="0"
                ref={couponInputRef}
              >
                <option value="0">選擇優惠券</option>
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
