/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState, useRef } from 'react'
import Form from 'react-bootstrap/Form'
import CheckboxInput from '../checkbox-input'
import Image from 'react-bootstrap/Image'
import GoventToast from '@/components/toast'
import { validate } from 'uuid'

export default function PaymentForm() {
  //確認是否有勾選與會員資料相同
  const numberValue = useRef(null)
  function changeNumberValue() {
    console.log(numberValue.current.checked)
  }

  //儲存聯絡資料
  const [data, setDate] = useState({
    userName: '',
    userGender: '',
    birthday: '',
    phoneNumber: '',
    email: '',
  })
  //監聽使用者輸入表單欄位
  function formChange(e) {
    // console.log(e.target.name, e.target.value)
    setDate({ ...data, [e.target.name]: e.target.value })
  }
  //監聽點數及優惠券是否被勾選
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

  //控制input radio選項，選擇信用卡時跳出填入信用卡資訊的欄位
  const [radioValue, setRadioValue] = useState('')
  //監聽使用者選擇欄位的id
  function changeValue(e) {
    let targetID = e.target.id
    setRadioValue(targetID)
  }
  //檢查是否有輸入欄位
  function validate(e) {
    const target = e.target
    const validityMessage = target.validity
    console.log(target.value)
    console.log(target.validity)
    let msg = ''
    switch (true) {
      case validityMessage.valueMissing && target.name == 'userName':
        msg = '請輸入姓名'
        break
      case validityMessage.valueMissing && target.name == 'userGender':
        msg = '請選擇性別'
        break
      case validityMessage.valueMissing && target.name == 'birthday':
        msg = '請輸入生日'
        break
      case validityMessage.valueMissing && target.name == 'phoneNumber':
        msg = '請輸入手機'
        break
      default:
        break
    }
    target.setCustomValidity(msg)
  }

  useEffect(() => {
    const Validate = document.querySelectorAll('.validate')
    Validate.forEach((input) => {
      input.addEventListener('blur', validate)
    })
    // document.addEventListener('scroll', validate)
    return () => {
      Validate.forEach(function (input) {
        input.removeEventListener('blur', validate)
      })
    }
  }, [])

  return (
    <>
      {/* 聯絡資料 */}
      <div className="connection-data mb-3 ">
        <div>
          <h5>
            <i className="bi bi-person-fill"></i>聯絡資料
          </h5>
        </div>
        <div className="row bg-bg-gray-secondary  rounded-4 py-3 px-4 gx-0">
          {/* 姓名 */}
          <Form.Group className="mb-3 col-md-3 px-2" controlId="formGroupEmail">
            <Form.Label>姓名</Form.Label>
            <Form.Control
              type="text"
              placeholder="輸入姓名"
              className="bg-bg-gray  placeholder-text text-white-50 validate"
              name="userName"
              onChange={formChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              請輸入姓名
            </Form.Control.Feedback>
          </Form.Group>
          {/* 性別 */}
          <Form.Group className="mb-3 col-md-3 px-2" controlId="formGroupEmail">
            <Form.Label>性別</Form.Label>
            <Form.Select
              aria-label="Default select example"
              className="bg-bg-gray text-white-50 validate"
              name="userGender"
              onChange={formChange}
              required
            >
              <option value="">選擇</option>
              <option value="1">男</option>
              <option value="2">女</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              請選擇性別
            </Form.Control.Feedback>
          </Form.Group>
          {/* 生日 */}
          <div className="col-md-6 px-2">
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>生日</Form.Label>
              <Form.Control
                type="date"
                className="bg-bg-gray text-white-50 validate"
                name="birthday"
                onChange={formChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                請選擇生日
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          {/* 手機 */}
          <div className="col-md-6 px-2">
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>手機</Form.Label>
              <Form.Control
                type="text"
                placeholder="0912345678"
                className="bg-bg-gray text-white-50 placeholder-text validate"
                name="phoneNumber"
                onChange={formChange}
                pattern="^09\d{2}-?\d{3}-?\d{3}$"
                required
              />
              <Form.Control.Feedback type="invalid">
                請輸入手機
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          {/* 信箱 */}
          <div className="col-md-6 px-2">
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>信箱</Form.Label>
              <Form.Control
                type="email"
                placeholder="輸入email"
                className="bg-bg-gray  placeholder-text text-white-50 validate"
                name="email"
                onChange={formChange}
                pattern="^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$"
                required
              />
              <Form.Control.Feedback type="invalid">
                請輸入信箱
              </Form.Control.Feedback>
            </Form.Group>
          </div>

          <div class="form-check mb-3 mx-2">
            <input
              ref={numberValue}
              class="form-check-input"
              type="checkbox"
              id="gridCheck"
              onChange={changeNumberValue}
            />
            <label class="form-check-label" for="gridCheck">
              與會員註冊資料相同
            </label>
          </div>
        </div>
      </div>
      {/* 付款方式 */}
      <div className="points-coupons-container d-flex row mb-3 gx-0">
        <div>
          <h5>
            <i className="bi bi-wallet-fill"></i>付款方式
          </h5>
        </div>
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
                className="form-control bg-bg-gray  placeholder-text"
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
                className="form-select bg-bg-gray text-white-50"
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
      <div className="payment-type  py-3 px-4 rounded-4 mb-4 bg-bg-gray-secondary">
        {/* 信用卡 */}
        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="radio"
            name="paymentType"
            id="creditCard"
            onChange={changeValue}
          />
          <label className="form-check-label" htmlFor="creditCard">
            信用卡 / 簽帳金融卡
          </label>
          {/* 輸入信用卡內容 */}
          <GoventToast radioValue={radioValue}>
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
                  className="form-control bg-bg-gray  placeholder-text"
                  id="cardNumber"
                  placeholder="123456"
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
                  className="form-control bg-bg-gray  placeholder-text"
                  id="Validityperiod"
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
                  className="form-control bg-bg-gray  placeholder-text"
                  id="securityCode"
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
            id="LinePay"
            onChange={changeValue}
          />
          <label className="form-check-label" htmlFor="LinePay">
            <Image src="/line-pay/LINE Pay_logo-02.png" />
          </label>
        </div>
      </div>
      <style global jsx>{`
        .placeholder-text::placeholder {
          color: gray;
        }
      `}</style>
    </>
  )
}
