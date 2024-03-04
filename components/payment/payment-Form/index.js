/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState, useRef } from 'react'
import Form from 'react-bootstrap/Form'
import CheckboxInput from '../checkbox-input'
import Image from 'react-bootstrap/Image'
import GoventToast from '@/components/toast'
import PaymentButton from '@/components/payment/payment-button'

export default function PaymentForm() {
  const handleSubmit = (event) => {
    // event.preventDefault()
  }

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
    point: 0,
    coupon: 0,
  })
  //監聽使用者輸入表單欄位
  function formChange(e) {
    let setConnectionData = { ...data, [e.target.name]: e.target.value }
    console.log(setConnectionData)
    setDate(setConnectionData)
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
  // function validate(data) {
  //   console.log(data)
  //   if (data.target) {
  //     let inputValue = data.target.value
  //     let errorP = data.target.parentElement.querySelector('.text-danger')
  //     // console.log(inputValue)
  //     if (inputValue == '') {
  //       errorP.classList.remove('d-none')
  //     } else {
  //       errorP.classList.add('d-none')
  //     }
  //   } else {
  //     if (data.userName == '') {
  //       document.querySelector('p.userName').classList.remove('d-none')
  //     }
  //     if (data.userGender == '') {
  //       document.querySelector('p.userGender').classList.remove('d-none')
  //     }
  //     if (data.birthday == '') {
  //       document.querySelector('p.birthday').classList.remove('d-none')
  //     }
  //     if (data.phoneNumber == '') {
  //       document.querySelector('p.phoneNumber').classList.remove('d-none')
  //     }
  //     if (data.email == '') {
  //       document.querySelector('p.email').classList.remove('d-none')
  //     }
  //   }
  // }

  return (
    <>
      <Form onSubmit={handleSubmit} method="post">
        {/* 聯絡資料 */}
        <div className="connection-data mb-3 ">
          <div>
            <h5>
              <i className="bi bi-person-fill"></i>聯絡資料
            </h5>
          </div>

          <div className="row bg-bg-gray-secondary  rounded-4 py-3 px-4 gx-0">
            {/* 姓名 */}
            <Form.Group
              className="mb-3 col-md-3 px-2"
              controlId="formGroupEmail"
            >
              <Form.Label>姓名</Form.Label>
              <Form.Control
                type="text"
                placeholder="輸入姓名"
                className="bg-bg-gray  placeholder-text text-white-50 validate"
                name="userName"
                onChange={(e) => {
                  formChange(e)
                }}
                required
              />
              <p className="py-2 text-danger d-none userName">請輸入姓名</p>
            </Form.Group>
            {/* 性別 */}
            <Form.Group
              className="mb-3 col-md-3 px-2"
              controlId="formGroupEmail"
            >
              <Form.Label>性別</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="bg-bg-gray text-white-50 validate"
                name="userGender"
                onChange={(e) => {
                  formChange(e)
                }}
                required
              >
                <option value="">選擇</option>
                <option value="1">男</option>
                <option value="2">女</option>
              </Form.Select>
              <p className="py-2 text-danger d-none userGender">請選擇性別</p>
            </Form.Group>
            {/* 生日 */}
            <Form.Group
              className="mb-3 col-md-6 px-2"
              controlId="formGroupEmail"
            >
              <Form.Label>生日</Form.Label>
              <Form.Control
                type="date"
                className="bg-bg-gray text-white-50  validate"
                name="birthday"
                onChange={(e) => {
                  formChange(e)
                }}
                required
              />
              <p className="py-2 text-danger d-none birthday">請輸入生日</p>
            </Form.Group>
            {/* 手機 */}
            <Form.Group
              className="mb-3 col-md-6 px-2"
              controlId="formGroupEmail"
            >
              <Form.Label>手機</Form.Label>
              <Form.Control
                type="text"
                placeholder="0912345678"
                className="bg-bg-gray text-white-50 placeholder-text validate"
                name="phoneNumber"
                onChange={(e) => {
                  formChange(e)
                }}
                pattern="^09\d{2}-?\d{3}-?\d{3}$"
                required
              />
              <p className="py-2 text-danger d-none phoneNumber">請輸入手機</p>
            </Form.Group>
            {/* 信箱 */}
            <Form.Group
              className="mb-3 col-md-6 px-2"
              controlId="formGroupEmail"
            >
              <Form.Label>信箱</Form.Label>
              <Form.Control
                type="email"
                placeholder="輸入email"
                className="bg-bg-gray  placeholder-text text-white-50 validate"
                name="email"
                onChange={(e) => {
                  formChange(e)
                }}
                pattern="^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$"
                required
              />
              <p className="py-2 text-danger d-none email">請輸入信箱</p>
            </Form.Group>
            {/* 與會員註冊資料相同 */}
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
                  className="form-control bg-bg-gray  text-white-50 placeholder-text"
                  name="point"
                  id="pointInput"
                  placeholder="輸入數量"
                  ref={pointInputRef}
                  onChange={formChange}
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
                  className="form-select bg-bg-gray text-white-50 "
                  aria-label="Default select example"
                  defaultValue="0"
                  ref={couponInputRef}
                  name="coupon"
                >
                  <option value="0">選擇優惠券</option>
                  <option value="0.9">九折</option>
                  <option value="-200">折抵200</option>
                  <option value="+200">增加200</option>
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
              required
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
                    className="form-control bg-bg-gray text-white-50  placeholder-text"
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
                    className="form-control bg-bg-gray text-white-50  placeholder-text"
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
                    className="form-control bg-bg-gray text-white-50  placeholder-text"
                    id="securityCode"
                    required
                    maxlength="3"
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
              required
            />
            <label className="form-check-label" htmlFor="LinePay">
              <Image src="/line-pay/LINE Pay_logo-02.png" />
            </label>
          </div>
        </div>
        {/* 送出資料 */}
        <PaymentButton />
      </Form>
      <style global jsx>{`
        .placeholder-text::placeholder {
          color: gray;
        }
      `}</style>
    </>
  )
}
