import React from 'react'
import EventsRecommend from '@/components/events-recommend'

export default function CartIndex() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-start mx-5 mb-3 mt-5 text-white">
        <div className="text-primary-light">購物車 </div>
        <div>
          <i className="bi bi-chevron-right text-white"></i>
        </div>
        <div> 確認資料與付款 </div>
        <div>
          <i className="bi bi-chevron-right text-white"></i>
        </div>
        <div> 訂購完成</div>
      </div>
      <div className="row mx-5 bg-bg-gray-secondary cart-top">
        <div className="col-sm-12 cart-area ">
          <div className="card border-0 cart-card bg-bg-gray-secondary border-bottom border-normal-gray">
            <div className="row g-0 my-4">
              <div className="col-6 text-normal-white d-flex align-items-center">
                <h4 className="ms-4">購物車</h4>
              </div>
              <p className="col-6 text-normal-white d-flex align-items-center justify-content-end">
                <label className="me-4 d-flex align-items-center justify-content-end">
                  <input type="checkbox" className="checkbox-large" />
                  <div className="ms-2">全選</div>
                </label>
              </p>
            </div>
          </div>

          <div className=" border-bottom border-normal-gray">
            <div className="card border-0 cart-card bg-bg-gray-secondary m-4">
              <div className="row g-0">
                <div className="col-2 d-flex align-items-center">
                  <input type="checkbox" className="me-4 checkbox-large" />
                  <div className="bg-normal-white rounded-4 product-img">
                    <img
                      src="./images/cart/4-03.jpg"
                      className=" rounded-start object-fit-cover"
                      alt="..."
                    />
                  </div>
                </div>

                <div className="col-9 row">
                  <div className="card-body col-sm-8 col">
                    <h6 className="card-title card-text d-flex justify-content-between align-items-center text-normal-white">
                      YOASOBI演唱會2024台北站｜YOASOBI ASIA TOUR 2023-2024 Solo
                      Concert in Taipei
                    </h6>
                    <p className="card-text text-primary-light mt-2">1F 站位</p>
                    <div className="iconbar text-normal-white d-flex align-items-center mt-2 row">
                      <div className="col-sm-6 col-12 d-flex justify-content-start align-items-center">
                        <i className="bi bi-calendar-week text-primary-light"></i>
                        <p className="text-normal-white ms-2">2024-01-21</p>
                      </div>
                      <div className="col-sm-6 col-12 d-flex justify-content-start align-items-center">
                        <i className="bi bi-clock text-primary-light"></i>
                        <p className="text-normal-white ms-2"> 10:00</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col row d-flex justify-content-center align-items-center">
                    <div className="col-sm-6 d-flex justify-content-start align-items-center">
                      <i className="bi bi-person-fill text-primary-light"></i>
                      <p className="text-normal-white ms-2">人數 X 2</p>
                    </div>
                    <div className="col-sm-6">
                      <p className="text-normal-white">NT $6,400</p>
                    </div>
                  </div>
                </div>
                <div className="col-1 d-flex justify-content-center align-items-center">
                  <div className="btn d-flex justify-content-center align-items-center">
                    <i className="bi bi-trash-fill text-primary-light"></i>
                    <p className="text-normal-white ms-2">刪除</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" border-bottom border-normal-gray">
            <div className="card border-0 cart-card bg-bg-gray-secondary m-4">
              <div className="row g-0">
                <div className="col-2 d-flex align-items-center">
                  <input type="checkbox" className="me-4 checkbox-large" />
                  <div className="bg-normal-white rounded-4 product-img">
                    <img
                      src="./images/cart/4-03.jpg"
                      className=" rounded-start object-fit-cover"
                      alt="..."
                    />
                  </div>
                </div>

                <div className="col-9 row">
                  <div className="card-body col-sm-8 col">
                    <h6 className="card-title card-text d-flex justify-content-between align-items-center text-normal-white">
                      YOASOBI演唱會2024台北站｜YOASOBI ASIA TOUR 2023-2024 Solo
                      Concert in Taipei
                    </h6>
                    <p className="card-text text-primary-light mt-2">1F 站位</p>
                    <div className="iconbar text-normal-white d-flex align-items-center mt-2 row">
                      <div className="col-sm-6 col-12 d-flex justify-content-start align-items-center">
                        <i className="bi bi-calendar-week text-primary-light"></i>
                        <p className="text-normal-white ms-2">2024-01-21</p>
                      </div>
                      <div className="col-sm-6 col-12 d-flex justify-content-start align-items-center">
                        <i className="bi bi-clock text-primary-light"></i>
                        <p className="text-normal-white ms-2"> 10:00</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col row d-flex justify-content-center align-items-center">
                    <div className="col-sm-6 d-flex justify-content-start align-items-center">
                      <i className="bi bi-person-fill text-primary-light"></i>
                      <p className="text-normal-white ms-2">人數 X 2</p>
                    </div>
                    <div className="col-sm-6">
                      <p className="text-normal-white">NT $6,400</p>
                    </div>
                  </div>
                </div>
                <div className="col-1 d-flex justify-content-center align-items-center">
                  <div className="btn d-flex justify-content-center align-items-center">
                    <i className="bi bi-trash-fill text-primary-light"></i>
                    <p className="text-normal-white ms-2">刪除</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card border-0 cart-card bg-bg-gray-secondary d-none d-xxl-block">
            <div className="d-flex justify-content-end align-items-center m-4">
              <p className="text-primary-light ms-3">合計2件商品</p>
              <h5 className="text-normal-white ms-3">總金額 NT 12,200</h5>
              <h6 className="btn btn-primary-deep text-normal-white ms-4">
                前往結帳
              </h6>
            </div>
          </div>
        </div>
      </div>
      <EventsRecommend />
      <style global jsx>
        {`
          body {
            background-color: #151515;
          }

          .card-cover {
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
          }
        `}
      </style>
    </>
  )
}
