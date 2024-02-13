import React from 'react'
// import d from '@/public/images/cart/4-03.jpg'
export default function CartIndex() {
  return (
    <>
      <div className="row mx-5 bg-bg-gray-secondary cart-top">
        <div className="col-sm-12 cart-area ">
          <div className="card border-0 cart-card bg-bg-gray-secondary border-bottom border-normal-gray">
            <div className="row g-0 my-4">
              <div className="col-6 text-normal-white h4 d-flex align-items-center">
                <div className="ms-4">購物車</div>
              </div>
              <div className="col-6 text-normal-white p d-flex align-items-center justify-content-end">
                <label className="me-4 d-flex align-items-center justify-content-end">
                  <input type="checkbox" className="checkbox-large" />
                  <div className="ms-2">全選</div>
                </label>
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
                    <div className="card-title card-text d-flex justify-content-between align-items-center text-normal-white h6">
                      YOASOBI演唱會2024台北站｜YOASOBI ASIA TOUR 2023-2024 Solo
                      Concert in Taipei
                    </div>
                    <div className="card-text text-primary-light mt-2 p">
                      1F 站位
                    </div>
                    <div className="iconbar text-normal-white d-flex align-items-center mt-2 row">
                      <div className="col-sm-6 col-12">
                        <i class="bi bi-calendar-minus text-primary-light"></i>
                        <span className="text-normal-white p ms-2">
                          2024-01-21
                        </span>
                      </div>
                      <div className="col-sm-6 col-12">
                        <i class="bi bi-clock text-primary-light"></i>
                        <span className="text-normal-white p ms-2"> 10:00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col row d-flex justify-content-center align-items-center">
                    <div className="col-sm-6">
                      <i class="bi bi-person-fill text-primary-light"></i>
                      <span className="text-normal-white p ms-2">人數 X 2</span>
                    </div>
                    <div className="col-sm-6">
                      <div className="p text-normal-white">NT $6,400</div>
                    </div>
                  </div>
                </div>
                <div className="col-1 d-flex justify-content-center align-items-center">
                  <div className="btn">
                    <i class="bi bi-trash-fill text-primary-light"></i>
                    <span className="text-normal-white p ms-2">刪除</span>
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
                    <div className="card-title card-text d-flex justify-content-between align-items-center text-normal-white h6">
                      YOASOBI演唱會2024台北站｜YOASOBI ASIA TOUR 2023-2024 Solo
                      Concert in Taipei
                    </div>
                    <div className="card-text text-primary-light mt-2 p">
                      1F 站位
                    </div>
                    <div className="iconbar text-normal-white d-flex align-items-center mt-2 row">
                      <div className="col-sm-6 col-12">
                        <i class="bi bi-calendar-minus text-primary-light"></i>
                        <span className="text-normal-white p ms-2">
                          2024-01-21
                        </span>
                      </div>
                      <div className="col-sm-6 col-12">
                        <i class="bi bi-clock text-primary-light"></i>
                        <span className="text-normal-white p ms-2"> 10:00</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col row d-flex justify-content-center align-items-center">
                    <div className="col-sm-6">
                      <i class="bi bi-person-fill text-primary-light"></i>
                      <span className="text-normal-white p ms-2">人數 X 2</span>
                    </div>
                    <div className="col-sm-6">
                      <div className="p text-normal-white">NT $6,400</div>
                    </div>
                  </div>
                </div>
                <div className="col-1 d-flex justify-content-center align-items-center">
                  <div className="btn">
                    <i class="bi bi-trash-fill text-primary-light"></i>
                    <span className="text-normal-white p ms-2">刪除</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card border-0 cart-card bg-bg-gray-secondary d-none d-xxl-block">
            <div className="d-flex justify-content-end align-items-center m-4">
              <div className="text-primary-light p ms-3">合計2件商品</div>
              <div className="text-normal-white h5 ms-3">總金額 NT 12,200</div>
              <div className="btn btn-primary-deep text-normal-white h6 ms-4">
                前往結帳
              </div>
            </div>
          </div>
        </div>

        {/* <div className="col-sm-4">
          <h4 className="mb-3">摘要</h4>

          <p className="card-text d-flex justify-content-between align-items-center">
            小計 <span>$4,000.00</span>
          </p>
          <hr />
          <p className="card-text d-flex justify-content-between align-items-center">
            預估運費與手續費 <span>$300.00</span>
          </p>
          <hr />
          <p className="card-text d-flex justify-content-between align-items-center">
            總計 <span>$4,300.00</span>
          </p>
          <hr />
          <button className="btn btn-primary w-100 mb-3">會員結帳</button>
          <button className="btn btn-primary w-100 mb-3">訪客結帳</button>
        </div> */}
      </div>
      <div className="row mt-5 mx-5">
        <div className="col-sm-12 cart-area">
          <h4 className="mb-3 h4">為你推薦</h4>
          <div className="row gy-3">
            <div className="col-sm-3 col-12">
              <div class="card bg-bg-gray">
                <div className="">
                  <img
                    src="./images/cart/4-03.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <div className="card-title h6 text-normal-white">
                    Ed Sheeran 紅髮艾德 高雄國家體育場{' '}
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="text-normal-white p border border-white rounded-5 py-1 px-2">
                      演唱會
                    </div>
                    <div className="text-primary-light p">NT $ 800 起</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-12">
              <div class="card bg-bg-gray">
                <div className="">
                  <img
                    src="./images/cart/4-03.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <div className="card-title h6 text-normal-white">
                    Ed Sheeran 紅髮艾德 高雄國家體育場{' '}
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="text-normal-white p border border-white rounded-5 py-1 px-2">
                      粉絲見面會
                    </div>
                    <div className="text-primary-light p">NT $ 800 起</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-12">
              <div class="card bg-bg-gray">
                <div className="">
                  <img
                    src="./images/cart/4-03.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <div className="card-title h6 text-normal-white">
                    Ed Sheeran 紅髮艾德 高雄國家體育場{' '}
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="text-normal-white p border border-white rounded-5 py-1 px-2">
                      景點
                    </div>
                    <div className="text-primary-light p">NT $ 800 起</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-12">
              <div class="card bg-bg-gray">
                <div className="">
                  <img
                    src="./images/cart/4-03.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="card-body">
                  <div className="card-title h6 text-normal-white">
                    Ed Sheeran 紅髮艾德 高雄國家體育場{' '}
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="text-normal-white p border border-white rounded-5 py-1 px-2">
                      展覽
                    </div>
                    <div className="text-primary-light p">NT $ 800 起</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
