import BackToMainPage from '@/components/user/backToMainPage'
import React from 'react'

export default function ForgetPassword() {
  return (
    <>
      <div className="background d-flex justify-content-center">
        <div className="component-all">
          <BackToMainPage />
          <div className="formBackground">
            <div className="px-5 py-5">
              <div className="text-white">
                <h4 className="mainTitle-rwd">忘記密碼</h4>
                <p className="subTitle-rwd">
                  回到<span className="text-primary">登入</span>或
                  <span className="text-primary">註冊帳號</span>
                </p>
              </div>
              <div className="text-black mt-4">
                <div className="mb-3">
                  <label
                    htmlFor="accountAuthEmail"
                    className="form-label sm-p text-normal-gray-light"
                  >
                    輸入你註冊會員的電子信箱
                  </label>
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control bg-normal-gray-light"
                      id="accountAuthEmail"
                      placeholder="請輸入 email"
                    />
                    <span className="btn btn-primary authButton text-white px-2 sm-p d-flex justify-content-center align-items-center">
                      點選寄送驗證碼
                    </span>
                  </div>
                </div>
                <div className="mb-3 text-black">
                  <label
                    htmlFor="accountAuthCode"
                    className="form-label sm-p text-normal-gray-light"
                  >
                    輸入驗證碼
                  </label>
                  <div className="input-group">
                    <input
                      type="passwordVisible"
                      className="form-control bg-normal-gray-light"
                      id="accountAuthCode"
                      placeholder="請輸入驗證碼"
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="btn btn-primary text-white w-100 mt-3"
                >
                  重設密碼
                </button>
                <div className="text-center text-normal-gray-light sm-p mt-3">
                  點選重設密碼將會跳轉到登入畫面
                  <br />
                  請使用新設密碼進行登入
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center goventLogo">
            <img src="/images/govent-angus/govent-logo.png" />
          </div>
        </div>
      </div>
      <style jsx>
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
          }
          .component-all {
            margin-top: 200px;
          }
          .formBackground {
            border-radius: 10px;
            width: 420px;
            height: 480px;
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
