// import { useRouter } from 'next/router'
import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import TicketInfoLeft from '@/components/member/m-order-left-bar'
import MemberLayout from '@/components/layout/member-layout'
import { motion } from 'framer-motion'

export default function MemberOrderInfo() {
  const [tabs, setTabs] = useState(1)

  return (
    <>
      <div className="container width-1200">
        <Row data-bs-theme="dark">
          <Col sm={3}>
            <TicketInfoLeft />
          </Col>
          <Col sm={9}>
            <div className="member-bgc">
              <div className="p-3 px-4 bottom-line">
                <h6 className="m-0 text-primary-light">活動已結束</h6>
              </div>
              <div className="p-3 px-4">
                <p className="pb-2">
                  <i className="bi bi-person-fill pe-2"></i>訂購人：王小鴨
                </p>
                <p className="pb-2">
                  <i className="bi bi-person-fill pe-2"></i>
                  email：duckwang@gmail.com
                </p>
                <p className="pb-2">
                  <i className="bi bi-person-fill pe-2"></i>
                  聯絡電話：0988-543-641
                </p>
                <p>
                  <i className="bi bi-person-fill pe-2"></i>訂購日期：2023/12/31
                </p>
              </div>
            </div>
            <div className="member-bgc mt-3">
              <div className="px-4 bottom-line d-flex">
                <div
                  role="button"
                  tabIndex={0}
                  className={`p-3 ${tabs === 1 ? 'text-primary' : ''}`}
                  onClick={() => {
                    setTabs(1)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setTabs(1)
                    }
                  }}
                >
                  <h6 className="m-0">活動資訊</h6>
                </div>
                <div
                  role="button"
                  tabIndex={0}
                  className={`p-3 ${tabs === 2 ? 'text-primary' : ''}`}
                  onClick={() => {
                    setTabs(2)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setTabs(2)
                    }
                  }}
                >
                  <h6 className="m-0">票卷資訊</h6>
                </div>
              </div>
              <div className="p-4">
                {tabs === 1 && (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    1.本次活動購票進場採實名制，每位會員帳號限購2張票券。
                    2.若購買1張票券，該張票券填寫的參加者姓名須為購票會員帳號姓名，若購買2張票券，其中1張票券填寫的參加者姓名須為購票會員帳號姓名，請於購票前先至「會員專區」→「個人資料」確認會員姓名是否與會員本人證件姓名相符且完整填寫，恕不接受購票中及購票後修改，若經查核購票當下的「會員姓名」與填寫的「參加者姓名」無一符合者，主辦單位及遠大售票有權取消該會員於此活動購買之全數票券。若因事後修改會員資料，經核對後與購票當下資訊不符合者，主辦單位及遠大售票有權取消該會員於此活動購買之全數票券。(以上紅字部分為10/27新增實名制規定)
                    3.一個證件號僅能購買一張票券，請勿將個人資料提供給他人，以免影響自身購買權益。
                    4.系統列印票券時，將帶入購票頁面填寫的參加者資料，請確實填寫每位參加者的「身分證姓名」及「身分證證字號」，外籍人士請填寫「護照姓名」及「護照號碼」，購票時請務必確認每張票券對應之參加者資料填寫正確，以免影響入場權益。
                    5.實名制票券的參加者「姓名」及「證件字號」如填寫有誤將不接受任何形式變更資料，僅接受退票期限內申請退票，請務必確認再進行結帳。
                    6.詳細實施規則請見購票頁面說明，並建議提前加入會員，於「會員專區」→「個人資料」→「信用卡資訊」登錄信用卡完成驗證手續，以便進行購票流程。
                  </motion.div>
                )}
                {tabs === 2 && (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="event"
                  >
                    <div className="sm-p px-3 py-2">
                      票卷編號 TX555689945132
                    </div>
                    <hr className="my-0" />
                    <div className="p-3 d-flex">
                      <div className="event-img me-4">
                        <img
                          src="https://qr-code-generator-free.com/wp-content/themes/QR%20theme/img/defaultQR.png"
                          alt=""
                        />
                      </div>
                      <div>
                        <h6>
                          YOASOBI演唱會2024台北站｜YOASOBI ASIA TOUR 2023-2024
                          Solo Concert in Taipei
                        </h6>
                        <div className="d-flex justify-content-between align-items-end">
                          <div>
                            <p>2024/01/21</p>
                            <p>Zepp New Taipei</p>
                            <p>新北市新莊區新北大道四段3號8樓</p>
                          </div>
                          <div>
                            <button className="btn btn-primary">1F站票</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <style global jsx>
        {`
          body {
            background-color: #1e1e1e;
            color: #fff;
            padding: 90px 0 0 0;
          }
          .dark-input {
            background-color: #232323;
            color: #fff;
            border: 1px solid #404040;
          }
          .member-bgc {
            background-color: #282828;
            border-radius: 10px;
          }
          .contain {
            padding: 30px 40px;
          }
          .card {
            background-color: var(--bg-gray-light-color);
            border-radius: 10px;
          }
          .ticket-number {
            border-bottom: 1px solid var(--normal-gray-color);
            padding: 10px 20px;
          }
          .event {
            border: 1px solid var(--normal-gray-color);
            border-radius: 10px;
          }
          .event-img {
            width: 150px;
            height: 100%;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        `}
      </style>
    </>
  )
}

MemberOrderInfo.getLayout = function (page) {
  return <MemberLayout>{page}</MemberLayout>
}
