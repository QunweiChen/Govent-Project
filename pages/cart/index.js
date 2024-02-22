import React from 'react'
import EventsRecommend from '@/components/events-recommend'
import NavbarBottomRwd from '@/components/layout/default-layout/navbar-bottom-rwd'

export default function CartIndex() {
  return (
    <>
      <div className="container width-1200">
        <div className="row justify-content-center">
          <div className="col-sm-12">
            <div className="d-flex align-items-center justify-content-start mb-3 mt-5 text-white">
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

            <div className="cart-top ">
              <div className="cart-area card bg-bg-gray-secondary">
                <div className="border-0 cart-card border-bottom border-normal-gray">
                  <div className="row g-0 my-4">
                    <div className="col-6 text-white d-flex align-items-center">
                      <h4 className="ms-4">購物車</h4>
                    </div>
                    <div className="col-6 text-white d-flex align-items-center justify-content-end">
                      <label className="me-4 d-flex align-items-center justify-content-end form-check-label">
                        <input
                          type="checkbox"
                          className="checkbox-large form-check-input"
                        />
                        <p className="ms-2">全選</p>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="rwd-text">
                  {/* 到時候return資料用這一層 */}{' '}
                  <div className="border-0 cart-card border-bottom border-top border-normal-gray">
                    <div className="d-flex align-items-center justify-content-between my-3 text-center">
                      <div className="ms-4 text-primary-light">
                        主辦單位 - 遠雄創藝
                      </div>
                      <div className="me-4">
                        <i className="bi bi-chevron-right text-white"></i>
                      </div>
                    </div>
                  </div>
                  <div className="border-0 cart-card row g-0 border-bottom border-normal-gray event">
                    <div className="col-sm-2 col-4 d-flex align-items-center ms-4">
                      <input
                        type="checkbox"
                        className="me-4 checkbox-large form-check-input"
                      />
                      <div className="bg-normal-white rounded-4 product-img">
                        <img
                          src="./images/cart/4-03.jpg"
                          className=" rounded-start object-fit-cover"
                          alt="..."
                        />
                      </div>
                    </div>

                    <div className="col-sm-9 col-7 row">
                      <div className="card-body col-sm-8 col">
                        <h6 className="card-title card-text d-flex justify-content-between align-items-center text-white truncatetext">
                          YOASOBI演唱會2024台北站｜YOASOBI ASIA TOUR 2023-2024
                          Solo Concert in Taipei
                        </h6>
                        <p className="card-text text-primary-light mt-2">
                          1F 站位
                        </p>
                        <div className="iconbar text-white d-flex align-items-center mt-2 row">
                          <div className="col-sm-6 col-12 d-flex justify-content-start align-items-center">
                            <i className="bi bi-calendar-week text-primary-light"></i>
                            <p className="text-white ms-2">2024-01-21</p>
                          </div>
                          <div className="col-sm-6 col-12 d-flex justify-content-start align-items-center">
                            <i className="bi bi-clock text-primary-light"></i>
                            <p className="text-white ms-2"> 10:00</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4 col row d-flex justify-content-center align-items-center pb-3 pb-sm-0">
                        <div className="col-sm-6 d-flex justify-content-start align-items-center">
                          <i className="bi bi-person-fill text-primary-light"></i>
                          <p className="text-white ms-2">人數 X 2</p>
                        </div>
                        <div className="col-sm-6">
                          <p className="text-white">NT $6,400</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 d-flex justify-content-center align-items-center">
                      <div className="btn d-flex justify-content-center align-items-center me-5 me-sm-0">
                        <i className="bi bi-trash-fill text-primary-light"></i>
                        <p className="text-white ms-2 hide">刪除</p>
                      </div>
                    </div>
                  </div>
                  <div className="border-0 cart-card row g-0 border-bottom border-normal-gray event">
                    <div className="col-sm-2 col-4 d-flex align-items-center ms-4">
                      <input
                        type="checkbox"
                        className="me-4 checkbox-large form-check-input"
                      />
                      <div className="bg-normal-white rounded-4 product-img">
                        <img
                          src="./images/cart/4-03.jpg"
                          className=" rounded-start object-fit-cover"
                          alt="..."
                        />
                      </div>
                    </div>

                    <div className="col-sm-9 col-7 row">
                      <div className="card-body col-sm-8 col">
                        <h6 className="card-title card-text d-flex justify-content-between align-items-center text-white truncatetext">
                          YOASOBI演唱會2024台北站｜YOASOBI ASIA TOUR 2023-2024
                          Solo Concert in Taipei
                        </h6>
                        <p className="card-text text-primary-light mt-2">
                          1F 站位
                        </p>
                        <div className="iconbar text-white d-flex align-items-center mt-2 row">
                          <div className="col-sm-6 col-12 d-flex justify-content-start align-items-center">
                            <i className="bi bi-calendar-week text-primary-light"></i>
                            <p className="text-white ms-2">2024-01-21</p>
                          </div>
                          <div className="col-sm-6 col-12 d-flex justify-content-start align-items-center">
                            <i className="bi bi-clock text-primary-light"></i>
                            <p className="text-white ms-2"> 10:00</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4 col row d-flex justify-content-center align-items-center pb-3 pb-sm-0">
                        <div className="col-sm-6 d-flex justify-content-start align-items-center">
                          <i className="bi bi-person-fill text-primary-light"></i>
                          <p className="text-white ms-2">人數 X 2</p>
                        </div>
                        <div className="col-sm-6">
                          <p className="text-white">NT $6,400</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 d-flex justify-content-center align-items-center">
                      <div className="btn d-flex justify-content-center align-items-center me-5 me-sm-0">
                        <i className="bi bi-trash-fill text-primary-light"></i>
                        <p className="text-white ms-2 hide">刪除</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rwd-text">
                  {/* 到時候return資料用這一層 */}{' '}
                  <div className="border-0 cart-card border-bottom border-top border-normal-gray">
                    <div className="d-flex align-items-center justify-content-between my-3 text-center">
                      <div className="ms-4 text-primary-light">
                        主辦單位 - 好玩國際文化
                      </div>
                      <div className="me-4">
                        <i className="bi bi-chevron-right text-white"></i>
                      </div>
                    </div>
                  </div>
                  <div className="border-0 cart-card row g-0 border-bottom border-normal-gray event">
                    <div className="col-sm-2 col-4 d-flex align-items-center ms-4">
                      <input
                        type="checkbox"
                        className="me-4 checkbox-large form-check-input"
                      />
                      <div className="bg-normal-white rounded-4 product-img">
                        <img
                          src="./images/cart/4-03.jpg"
                          className=" rounded-start object-fit-cover"
                          alt="..."
                        />
                      </div>
                    </div>

                    <div className="col-sm-9 col-7 row">
                      <div className="card-body col-sm-8 col">
                        <h6 className="card-title card-text d-flex justify-content-between align-items-center text-white truncatetext">
                          YOASOBI演唱會2024台北站｜YOASOBI ASIA TOUR 2023-2024
                          Solo Concert in Taipei
                        </h6>
                        <p className="card-text text-primary-light mt-2">
                          1F 站位
                        </p>
                        <div className="iconbar text-white d-flex align-items-center mt-2 row">
                          <div className="col-sm-6 col-12 d-flex justify-content-start align-items-center">
                            <i className="bi bi-calendar-week text-primary-light"></i>
                            <p className="text-white ms-2">2024-01-21</p>
                          </div>
                          <div className="col-sm-6 col-12 d-flex justify-content-start align-items-center">
                            <i className="bi bi-clock text-primary-light"></i>
                            <p className="text-white ms-2"> 10:00</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4 col row d-flex justify-content-center align-items-center pb-3 pb-sm-0">
                        <div className="col-sm-6 d-flex justify-content-start align-items-center">
                          <i className="bi bi-person-fill text-primary-light"></i>
                          <p className="text-white ms-2">人數 X 2</p>
                        </div>
                        <div className="col-sm-6">
                          <p className="text-white">NT $6,400</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-1 d-flex justify-content-center align-items-center">
                      <div className="btn d-flex justify-content-center align-items-center me-5 me-sm-0">
                        <i className="bi bi-trash-fill text-primary-light"></i>
                        <p className="text-white ms-2 hide">刪除</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-0 cart-card d-none d-xxl-block border-top border-normal-gray">
                  <div className="d-flex justify-content-end align-items-center m-4">
                    <p className="text-primary-light ms-3">合計2件商品</p>
                    <h5 className="text-white ms-3">總金額 NT 12,200</h5>
                    <h6 className="btn btn-primary-deep text-white ms-4">
                      前往結帳
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <EventsRecommend />
          </div>
        </div>
      </div>
      <NavbarBottomRwd />
      <div className="border-0 cart-card d-block d-xxl-none border-top border-normal-gray bg-normal-gray-deep fixed-bottom">
        <div className="d-flex justify-content-between align-items-center m-2">
          <p className="text-primary-light ms-3">合計2件商品</p>
          <div className="d-flex justify-content-center align-items-center">
            <p className="text-white ms-3">總金額 NT 12,200</p>
            <h6 className="btn btn-primary-deep text-white ms-4 m-0 ">
              前往結帳
            </h6>
          </div>
        </div>
      </div>

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

          .width-1200 {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0;
          }

          .event:hover {
            background-color: #151515;
          }
          @media screen and (max-width: 576px) {
            .truncatetext {
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .card-body {
               {
                /* padding-bottom: 0; */
              }
            }
            .desktop-text {
              display: none;
            }
            .rwd-text {
              h6 {
                font-size: 14px;
                font-weight: 400;
                margin-bottom: 0;
              }
              p {
                font-size: 12px;
                font-weight: 300;
              }
              .hide {
                display: none;
              }
            }
          }
        `}
      </style>
    </>
  )
}
