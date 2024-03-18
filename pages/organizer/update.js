import React, { useEffect, useState } from 'react'
import { Image } from 'react-bootstrap'
import { motion } from 'framer-motion'

import OrganizerLayout from '@/components/layout/organizer-layout'
import OrganizerTopBar from '@/components/organizer/organizer-top-bar'

export default function OrganizerEvent() {
  const [page, setPage] = useState(1)
  const [organizerType, setOrganizerType] = useState(0)

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }
  const nextPage = () => {
    if (page < 5) {
      setPage(page + 1)
    }
  }

  return (
    <>
      <div className="d-flex organizer-container justify-content-center p-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          key={previousPage}
          className="organizer-main d-flex flex-column"
        >
          <OrganizerTopBar title="升級主辦單位" />
          <div className="content bg-bg-gray rounded-4 p-4 h-100 d-flex flex-column justify-content-center align-items-center">
            <div className="step-window d-flex justify-content-center align-items-center">
              {page === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3>GOVENT 主辦單位條款</h3>
                  <h5>
                    歡迎您升級成為GOVENT主辦單位！請在升級前詳細閱讀以下條款：
                  </h5>
                  <hr />
                  <p>
                    主辦單位責任：升級為GOVENT主辦單位代表您願意承擔舉辦活動的責任，包括但不限於活動策劃、管理、宣傳和財務責任等。
                    <br />
                    活動內容：您需要確保您舉辦的活動內容符合當地法律法規，並且不包含任何違法、淫穢或具有攻擊性的內容。GOVENT有權對不符合要求的活動進行審查和處理。
                    <br />
                    費用支付：作為主辦單位，您需要支付GOVENT相關的活動管理費用，包括但不限於設置活動頁面、支付處理費等。
                    <br />
                    活動宣傳：您需要負責向您的目標受眾宣傳活動，GOVENT將協助您進行宣傳，但不承擔全部責任。
                    <br />
                    票務管理：您需要負責設置活動票種、定價、座位安排等票務相關事宜。GOVENT將提供相應的票務管理工具和支持。
                    <br />
                    客戶服務：作為主辦單位，您需要提供優質的客戶服務，解答參加者的問題和解決問題。
                    <br />
                    活動安全：您需要確保活動場地的安全性，並對活動期間可能發生的事故負責。
                    <br />
                    活動結算：活動結束後，GOVENT將根據您設置的票務信息進行結算，並在指定的時間內將款項轉至您的帳戶。
                    <br />
                    請您仔細閱讀以上條款，如有任何疑問，請隨時與我們的客戶服務團隊聯繫。
                    <br />
                  </p>
                </motion.div>
              )}
              {page === 2 && (
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <h5 className="mb-4">選擇主辦單位類型</h5>
                  <div className="d-flex">
                    <button
                      className={`text-center choice-btn btn company text-center ${
                        organizerType === 0
                          ? 'btn-primary'
                          : 'btn-bg-gray-light'
                      }`}
                      onClick={() => {
                        setOrganizerType(0)
                      }}
                    >
                      <Image
                        src={
                          organizerType === 0
                            ? '/personal.gif'
                            : '/personal.png'
                        }
                      />
                      <h4 className="mb-4">個人</h4>
                    </button>
                    <button
                      className={`text-center choice-btn btn company ms-4 text-center ${
                        organizerType === 1
                          ? 'btn-primary'
                          : 'btn-bg-gray-light'
                      }`}
                      onClick={() => {
                        setOrganizerType(1)
                      }}
                    >
                      <Image
                        src={
                          organizerType === 1 ? '/company.gif' : '/company.png'
                        }
                      />
                      <h4 className="mb-4">公司／法人</h4>
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
            <div className="text-center steps">
              <button
                className={`btn btn-primary me-3 ${page === 1 ? 'd-none' : ''}`}
                onClick={previousPage}
              >
                上一步
              </button>
              <button className="btn btn-primary" onClick={nextPage}>
                下一步
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <style global jsx>
        {`
          body {
            background-color: var(--bg-dark-color);
            color: var(--normal-white-color);
          }
          .sm-p {
            color: var(--normal-gray-light-color);
          }
          .organizer-container {
            width: 100%;
            min-height: 100vh;
          }
          .organizer-main {
            border-radius: 20px;
            padding: 25px;
            width: 1200px;
            .content {
              position: relative;
            }
          }
          .step-window {
            width: 800px;
            height: 500px;
          }
          .steps {
            position: relative;
            bottom: -40px;
          }
          .choice-btn {
            border-radius: 20px;
            width: 400px;
            height: 360px;
          }
        `}
      </style>
    </>
  )
}

OrganizerEvent.getLayout = function (page) {
  return <OrganizerLayout title="升級主辦單位">{page}</OrganizerLayout>
}
