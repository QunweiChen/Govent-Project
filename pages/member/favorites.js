// import { useRouter } from 'next/router'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Memberleft from '@/components/member/member-left-bar'
import NoBCLayout from '@/components/layout/nocb-default-layout'

// only redirect to member/login
export default function MemberFavorites() {
  // const router = useRouter()
  // // Make sure we're in the browser
  // if (typeof window !== 'undefined') {
  //   router.push('/member/login')
  // }

  return (
    <>
      <div className="container width-1200" >
        <Row data-bs-theme="dark" className='mb-5'>
          <Col sm={3}>
            <Memberleft />
          </Col>
          <Col sm={9}>
            <div className="member-bgc contain">
              <h4>我的收藏</h4>
              <hr className="my-4" />
              <div className="mb-4">您已收藏 3 項商品</div>
              <div className="event p-4 mt-2 d-flex">
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
                  <h6 className="text-primary-deep m-0">＄1200 起</h6>
                  <span className="sm-p">2023-06-01</span>
                </div>
                <div>
                  <i className="bi bi-heart-fill text-primary"></i>
                </div>
              </div>
              <div className="event p-4 mt-2 d-flex">
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
                  <h6 className="text-primary-deep m-0">＄1200 起</h6>
                  <span className="sm-p">2023-06-01</span>
                </div>
                <div>
                  <i className="bi bi-heart-fill text-primary"></i>
                </div>
              </div>
              <div className="event p-4 mt-2 d-flex">
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
                  <h6 className="text-primary-deep m-0">＄1200 起</h6>
                  <span className="sm-p">2023-06-01</span>
                </div>
                <div>
                  <i className="bi bi-heart-fill text-primary"></i>
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

MemberFavorites.getLayout = function (page) {
  return <NoBCLayout>{page}</NoBCLayout>
}
