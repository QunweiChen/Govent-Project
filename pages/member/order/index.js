// import { useRouter } from 'next/router'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Memberleft from '@/components/member/member-left-bar'
import Link from 'next/link'
import NoBCLayout from '@/components/layout/nocb-default-layout'

// only redirect to member/login
export default function MemberOrder() {
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
            <Memberleft />
          </Col>
          <Col sm={9}>
            <div className="member-bgc contain">
              <h4>我的票卷</h4>
              <hr className="my-4" />
              <div className="event mt-2">
                <div className="ticket-number sm-p">訂單編號 TX225633592</div>
                <div className="p-4 d-flex">
                  <div className="event-img me-4">
                    <img
                      src="https://www.shutterstock.com/image-vector/cute-cartoon-rubber-duck-vector-600nw-2276837591.jpg"
                      alt=""
                    />
                  </div>
                  <div className="me-4">
                    <h6>
                      YOASOBI演唱會2024台北站｜YOASOBI ASIA TOUR 2023-2024 Solo
                      Concert in Taipei
                    </h6>

                    <div className="d-flex justify-content-between align-items-end">
                      <h6 className="text-primary-deep m-0">總金額 $8000</h6>
                      <Link href="order/order-info">
                        <button className="btn btn-primary text-white">
                          查看票卷
                        </button>
                      </Link>
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
            background-color: var(--bg-gray-light-color);
            border-radius: 10px;
          }
          .event-img {
            width: 160px;
            height: 100px;
            border-radius: 5px;
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

MemberOrder.getLayout = function (page) {
  return <NoBCLayout>{page}</NoBCLayout>
}
