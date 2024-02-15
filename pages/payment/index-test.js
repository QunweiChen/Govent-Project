import React from 'react'
import styles from './payment.module.scss'
import CheckboxInput from '@/components/payment/checkbox-input/index'

export default function Payment() {
  return (
    <>
      <div className="row mt-5 mx-5 ">
        <div className="col-md-8 cart-area">
          <h3 className="bg-bg-gray-secondary rounded-3">訂單明細</h3>
          {/* 商品詳情 */}
          <div className="product-info-data ">
            <h5>
              <i className="bi bi-card-text"></i>商品詳情
            </h5>
            <div className="product-info d-flex mb-3 bg-bg-gray-secondary rounded-3 px-4 py-3">
              <div className="product-image col-md-3">
                <img
                  src="/images/product/detail/info-1.webp"
                  alt=""
                  style={{ width: '100%' }}
                />
              </div>
              <div className="product-content col-md-8">
                <div className="product-title">
                  YOASOBI演唱會2024台北站｜YOASOBI ASIA TOUR 2023-2024 Solo
                  Concert in Taipei
                </div>
                <div className="product-type">1F 站位</div>
                <div className="product-date d-flex">
                  <div className="date-range d-flex">
                    <i className="bi bi-calendar-week text-primary"></i>
                    <p>2024-01-21</p>
                  </div>
                  <div className="date-time d-flex">
                    <i className="bi bi-clock text-primary"></i>
                    <p>18:00</p>
                  </div>
                  <div className="product-people d-flex">
                    <i className="bi bi-person-fill text-primary"></i>
                    <p>人數X2</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-info d-flex mb-3 bg-bg-gray-secondary rounded-3 px-4 py-3">
              <div className="product-image col-md-3">
                <img
                  src="/images/product/detail/info-1.webp"
                  alt=""
                  style={{ width: '100%' }}
                />
              </div>
              <div className="product-content col-md-8">
                <div className="product-title">
                  YOASOBI演唱會2024台北站｜YOASOBI ASIA TOUR 2023-2024 Solo
                  Concert in Taipei
                </div>
                <div className="product-type">1F 站位</div>
                <div className="product-date d-flex">
                  <div className="date-range d-flex">
                    <i className="bi bi-calendar-week text-primary"></i>
                    <p>2024-01-21</p>
                  </div>
                  <div className="date-time d-flex">
                    <i className="bi bi-clock text-primary"></i>
                    <p>18:00</p>
                  </div>
                  <div className="product-people d-flex">
                    <i className="bi bi-person-fill text-primary"></i>
                    <p>人數X2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 聯絡資料 */}
          <div className="connection-data  ">
            <div>
              <h5>
                <i className="bi bi-person-fill"></i>聯絡資料
              </h5>
            </div>
            <form className="row bg-bg-gray-secondary rounded-3 ">
              <div className="col-md-6 d-flex justify-content-between ">
                <div className="col-md-6 pe-2">
                  <label htmlFor="validationDefault01" className="form-label">
                    姓名
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault01"
                    value="Mark"
                    required
                  />
                </div>
                <div className="col-md-6 ps-2">
                  <label htmlFor="validationDefault02" className="form-label">
                    性別
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault02"
                    value="Otto"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationDefault03" className="form-label">
                  生日
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault03"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="validationDefault03" className="form-label">
                  手機
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault03"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="validationDefault05" className="form-label">
                  信箱
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault05"
                  required
                />
              </div>
              <div className="d-flex">
                <div>
                  <CheckboxInput />
                </div>
                <p>與會員註冊資料相同</p>
              </div>
            </form>
          </div>
          {/* 付款方式 */}
          <div className="payment-type">
            <div>
              <h5>
                <i className="bi bi-wallet-fill"></i>付款方式
              </h5>
            </div>
            <div className="points-coupons-container d-flex grid " >
              <div className="point bg-bg-gray-secondary rounded-3  g-col-md-6 ">
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
              <div className="coupon bg-bg-gray-secondary rounded-3 g-col-md-6 ">
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
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex justify-content-between align-items-center">
            <div className="text-truncate ">
              YOASOBI演唱會2024台北站｜YOASOBI ASIA TOUR 2023-2024 Solo Concert
              in Taipei
            </div>
            <span className="">$4,300.00</span>
          </div>

          <div className=" d-flex justify-content-between align-items-center">
            優惠卷-全館消費95折 <span>– $300.00</span>
          </div>
          <div className=" d-flex justify-content-between align-items-center">
            點數折抵 <span>– $200.00</span>
          </div>
          <hr />
          <div className=" d-flex justify-content-between align-items-center fw-bold">
            合計 <span>NT$200.00</span>
          </div>
          <div className=" d-flex justify-content-between align-items-center ">
            點數回饋{' '}
            <span>
              <i className="bi bi-database"></i>1136
            </span>
          </div>
        </div>
      </div>
      <style global jsx>
        {`
          body {
            background-color: #151515;
            color: #fff;
          }
          main > .container {
            padding: 60px 15px 0;
          }
        `}
      </style>
    </>
  )
}
