// import { useRouter } from 'next/router'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import TicketInfoLeft from '@/components/member/ticket-info-left'
import Link from 'next/link'

// only redirect to member/login
export default function MemberTicket() {
  // const router = useRouter()
  // // Make sure we're in the browser
  // if (typeof window !== 'undefined') {
  //   router.push('/member/login')
  // }

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
              <div className="p-3 px-4 bottom-line d-flex">
                <h6 className="m-0">票卷資訊</h6>
              </div>
              <div className="p-4">
                <div className='event'>
                  <div className="sm-p px-3 py-2">票卷編號 TX555689945132</div>
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
                      <div className='d-flex justify-content-between align-items-end'>
                        <div>
                          <p>2024/01/21</p>
                          <p>Zepp New Taipei</p>
                          <p>新北市新莊區新北大道四段3號8樓</p>
                        </div>
                        <div>
                        <button className='btn btn-primary'>1F站票</button>
                        </div>
                      </div>
                    </div>
                     
                  </div>
                </div>
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
