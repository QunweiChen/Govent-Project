import React from 'react'

export default function Login() {
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
                <h4 className="mainTitle-rwd">歡迎回來</h4>
                <p className="subTitle-rwd">繼續下一趟美好旅程吧！</p>
              </div>
              <div className="text-black mt-4">
                <div className="mb-3">
                  <label
                    htmlFor="accountEmail"
                    className="form-label sm-p text-normal-gray-light"
                  >
                    帳號
                  </label>
                  <input
                    type="email"
                    className="form-control bg-normal-gray-light"
                    id="accountEmail"
                    placeholder="請輸入帳號"
                  />
                </div>
                <div className="mb-3 text-black">
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
              <div className="mb-4 form-check d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label
                    className="form-check-label text-white sm-p px-2"
                    htmlFor="exampleCheck1"
                  >
                    記住我的帳號
                  </label>
                </div>
                <div className="text-primary sm-p d-flex align-items-center">
                  忘記密碼
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="btn btn-primary text-white w-100"
                >
                  登入
                </button>
              </div>
              <div className="text-center p-2">
                <span className="text-white sm-p">
                  還沒有帳號？
                  <span className="text-primary sm-p">點擊註冊</span>
                </span>
              </div>
              <div className="text-white text-center xs-p my-4">
                <span>OR</span>
              </div>
              <div className="d-flex justify-content-between text-white row">
                <div className="btn-lg btn btn-outline-light text-white col-5 googleLoginButton">
                  <div className="sm-p py-1">
                    <i className="bi bi-google me-2"></i>google 登入
                  </div>
                </div>
                <div className="btn-lg btn btn-outline-light text-white col-5 xLoginButton">
                  <div className="sm-p py-1">
                    <i className="bi bi-twitter-x"></i> 登入
                  </div>
                </div>
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
          }
          .formBackground {
            border-radius: 10px;
            width: 420px;
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
            .googleLoginButton {
              @media screen and (max-width: 435px) {
                margin-left: 12px;
              }
            }
            .xLoginButton {
              @media screen and (max-width: 435px) {
                margin-right: 12px;
              }
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
          }
          .btn-outline-light {
            border-radius: 5px;
          }
          .btn-primary {
            border-radius: 5px;
          }
          .bi-eye-fill {
            border-radius: 5px;
            opacity: 0.5;
          }
        `}
      </style>
    </>
  )
}
