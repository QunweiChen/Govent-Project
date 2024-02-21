import React from 'react'

export default function Register() {
  return (
    <>
      <div className="background d-flex justify-content-center">
        <div className="component-all">
          <div className="text-black mb-3 backToMainPage">
            <i className="bi bi-caret-left-fill"></i>回首頁
          </div>
          <div className="formBackground">
            <div className="px-5 py-5">
              <div className="text-white">
                <h4 className="mainTitle-rwd">註冊帳號</h4>
                <p className="text-normal-gray-light subTitle-rwd">
                  已經有帳號？<span className="text-primary">點擊登入</span>
                </p>
              </div>
              <div className="registerForm">
                {/* 帳號密碼 */}
                <div className="text-black mt-3 row justify-content-between">
                  <div className="mb-3 col-sm-6 col-12">
                    <label
                      htmlFor="accountEmail"
                      className="form-label sm-p text-normal-gray-light"
                    >
                      email 帳號
                    </label>
                    <input
                      type="email"
                      className="form-control bg-normal-gray-light"
                      id="accountEmail"
                      placeholder="請輸入 email 帳號"
                    />
                  </div>
                  <div className="mb-3 text-black col-sm-6 col-12">
                    <label
                      htmlFor="accountPassword"
                      className="form-label sm-p text-normal-gray-light"
                    >
                      密碼
                    </label>
                    <div className="input-group">
                      <input
                        type="passwordVisible"
                        className="form-control bg-normal-gray-light"
                        id="accountPassword"
                        placeholder="請輸入密碼"
                      />
                      <i className="bi bi-eye-fill passwordVisible btn text-normal-gray bg-normal-gray-light"></i>
                    </div>
                  </div>
                </div>
                {/* 姓名性別出身年月日 */}
                <div className="text-black row justify-content-between">
                  <div className="mb-3 col-sm-4 col-8">
                    <label
                      htmlFor="accountName"
                      className="form-label sm-p text-normal-gray-light"
                    >
                      姓名
                    </label>
                    <input
                      type="text"
                      className="form-control bg-normal-gray-light"
                      id="accountName"
                      placeholder="請輸入姓名"
                    />
                  </div>
                  <div className="mb-3 col-sm-2 col-4">
                    <label
                      htmlFor="accountSex"
                      className="form-label sm-p text-normal-gray-light"
                    >
                      性別
                    </label>
                    <select
                      className="form-select bg-normal-gray-light"
                      id="accountSex"
                    >
                      <option className="bg-normal-gray-light" value="">
                        請選擇
                      </option>
                      <option className="bg-normal-gray-light" value="1">
                        女
                      </option>
                      <option className="bg-normal-gray-light" value="2">
                        男
                      </option>
                    </select>
                  </div>
                  <div className="mb-3 text-black col-sm-6 col-12">
                    <label
                      htmlFor="accountBirth"
                      className="form-label sm-p text-normal-gray-light"
                    >
                      出身年月日
                    </label>
                    <div className="input-group">
                      <input
                        type="date"
                        className="form-control bg-normal-gray-light"
                        id="accountBirth"
                        placeholder="請選擇"
                      />
                    </div>
                  </div>
                </div>
                {/* 手機 */}
                <div className="text-black row justify-content-between">
                  <div className="mb-3 col-sm-6 col-12">
                    <label
                      htmlFor="accountCellphone"
                      className="form-label sm-p text-normal-gray-light"
                    >
                      手機
                    </label>
                    <input
                      type="phone"
                      className="form-control bg-normal-gray-light"
                      id="accountCellphone"
                      placeholder="請輸入手機號碼"
                    />
                  </div>
                </div>
                {/* 縣市鄉鎮地址 */}
                <div className="text-black row justify-content-between">
                  <div className="mb-3 col-sm-3 col-6">
                    <label
                      htmlFor="accountCounty"
                      className="form-label sm-p text-normal-gray-light"
                    >
                      居住縣市
                    </label>
                    <select
                      className="form-select bg-normal-gray-light"
                      id="accountCounty"
                    >
                      <option className="bg-normal-gray-light" value="">
                        請選擇縣市
                      </option>
                      <option className="bg-normal-gray-light" value="1">
                        台北市
                      </option>
                      <option className="bg-normal-gray-light" value="2">
                        新北市
                      </option>
                    </select>
                  </div>
                  <div className="mb-3 col-sm-3 col-6">
                    <label
                      htmlFor="accountDistrict"
                      className="form-label sm-p text-normal-gray-light"
                    >
                      鄉鎮區
                    </label>
                    <select
                      className="form-select bg-normal-gray-light"
                      id="accountDistrict"
                    >
                      <option className="bg-normal-gray-light" value="">
                        請選擇鄉鎮區
                      </option>
                      <option className="bg-normal-gray-light" value="1">
                        信義區
                      </option>
                      <option className="bg-normal-gray-light" value="2">
                        大安區
                      </option>
                    </select>
                  </div>
                  <div className="mb-3 text-black col-sm-6 col-12">
                    <label
                      htmlFor="accountAddress"
                      className="form-label sm-p text-normal-gray-light"
                    >
                      詳細地址
                    </label>
                    <div className="input-group">
                      <input
                        type="address"
                        className="form-control bg-normal-gray-light"
                        id="accountAddress"
                        placeholder="請輸入地址"
                      />
                      <i className="bi bi-pin-map border-0 address btn text-normal-gray bg-normal-gray-light"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-3 form-check d-flex justify-content-center align-items-center registerDeclaration">
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    <div className=" text-white sm-p px-2">
                      我已閱讀並同意
                      <span className="text-primary">會員註冊條款</span>
                    </div>
                  </label>
                </div>
              </div>
              <div className="registerButton">
                <button
                  type="submit"
                  className="btn btn-primary text-white w-100"
                >
                  註冊
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center goventLogo">
            <img src="/images/govent-angus/govent-logo.png" />
          </div>
        </div>
      </div>
      <style jsx global>
        {`
          .background {
            background-image: url(/images/govent-angus/loginPage-BG.jpg);
            background-size: cover;
            background-position: center;
            height: 100vh;
            letter-spacing: 2px;
            input {
              border-radius: 5px;
              opacity: 0.5;
            }
            select {
              border-radius: 5px;
              opacity: 0.5;
            }
            @media screen and (max-width: 435px) {
              background: linear-gradient(
                  180deg,
                  rgba(0, 0, 0, 0.8) 0%,
                  rgba(34, 34, 34, 0.8) 100%
                ),
                url('/images/govent-angus/loginPage-BG.jpg') lightgray 50% /
                  cover no-repeat;
              height: 100vh;
              letter-spacing: 2px;
            }
            .backToMainPage {
              @media screen and (max-width: 435px) {
                display: none;
              }
            }
          }
          .component-all {
            margin-top: 200px;
            @media screen and (max-width: 435px){
              margin-top: 70px;
            }
          }
          .formBackground {
            border-radius: 10px;
            width: 720px;
            height: 580px;
            background: linear-gradient(
              180deg,
              rgba(18, 18, 18, 0.9) 0%,
              rgba(40, 40, 40, 0.49) 100%
            );

            /* bg-blur + shadow */
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            backdrop-filter: blur(7.5px);

            @media screen and (max-width: 435px) {
              background: none;
              box-shadow: none;
              backdrop-filter: none;
              border-radius: none;
              width: 430px;
            }
          }

          .mainTitle-rwd {
            @media screen and (max-width: 435px) {
              font-size: 36px;
            }
          }
          .subTitle-rwd {
            @media screen and (max-width: 435px) {
              font-size: 16px;
            }
          }

          .registerForm {
            @media screen and (max-width: 435px) {
              max-width: 430px;
            }
          }

          .registerDeclaration {
            @media screen and (max-width: 435px) {
              max-width: 430px;
            }
          }

          .registerButton {
            @media screen and (max-width: 435px) {
              max-width: 430px;
            }
          }

          .goventLogo {
            margin-top: 135px;
            height: 30px;
            @media screen and (max-width: 435px) {
              img {
                display: none;
              }
          }
          .btn-primary {
            border-radius: 5px;
          }
          .bi-eye-fill {
            border-radius: 5px;
            opacity: 0.5;
          }
          .bi-pin-map {
            border-radius: 5px;
            opacity: 0.5;
          }
        `}
      </style>
    </>
  )
}
