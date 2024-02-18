// import { useRouter } from 'next/router'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'

// only redirect to member/login
export default function MemberIndex() {
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
            <div className="member-bgc ">
              <div className='py-2'>
              <div className="py-3 d-flex justify-content-center">
                <img
                  className="avatar rounded-circle"
                  src="https://www.shutterstock.com/image-vector/cute-cartoon-rubber-duck-vector-600nw-2276837591.jpg"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <h6 className="mb-0 me-2">王小鴨</h6>
                <Button variant="primary" size="sm">
                  黃金會員
                </Button>
              </div>
              <p className="text-center sm-p mt-2">duck.wang@gmail.com</p>
              </div>
              <hr />
              <div className="py-2 member-side-bar">
                <div className="sm-p ps-4 pb-3">會員資料</div>
                <h6>
                  <Link href="/admin">
                    <i className="bi bi-person text-primary pe-3"></i>
                    <span>帳戶設定</span>
                  </Link>
                </h6>
                <h6>
                  <Link href="/admin">
                    <i className="bi bi-credit-card text-primary pe-3"></i>
                    <span>管理付款方式</span>
                  </Link>
                </h6>
              </div>
              <div className="py-2 member-side-bar">
                <div className="sm-p ps-4 pb-3">會員資料</div>
                <h6>
                  <Link href="/admin">
                    <i className="bi bi-calendar-minus text-primary pe-3"></i>
                    <span>訂單管理</span>
                  </Link>
                </h6>
                <h6>
                  <Link href="/admin">
                    <i className="bi bi-person-fill-up text-primary pe-3"></i>
                    <span>會員等級</span>
                  </Link>
                </h6>
                <h6>
                  <Link href="/admin">
                    <i className="bi bi-ticket-perforated text-primary pe-3"></i>
                    <span>優惠卷管理</span>
                  </Link>
                </h6>
                <h6>
                  <Link href="/admin">
                    <i className="bi bi-heart text-primary pe-3"></i>
                    <span>我的收藏</span>
                  </Link>
                </h6>
              </div>
            </div>
          </Col>
          <Col sm={9}>
            <div className="member-bgc contain">
              <Form>
                <h4>帳戶設定</h4>
                <Row className="mt-4">
                  <Col sm={3}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>姓名</Form.Label>
                      <Form.Control
                        className="dark-input"
                        type="text"
                        placeholder="王小鴨"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={3}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>性別</Form.Label>
                      <Form.Control
                        className="dark-input"
                        type="email"
                        placeholder="請選擇"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>生日</Form.Label>
                      <Form.Control
                        className="dark-input"
                        type="date"
                        placeholder="王小鴨"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>手機</Form.Label>
                      <Form.Control
                        className="dark-input"
                        type="text"
                        placeholder="請輸入"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>信箱</Form.Label>
                      <Form.Control
                        className="dark-input"
                        type="email"
                        placeholder="請輸入"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="d-flex justify-content-end mt-3">
                  <button className="btn btn-primary">儲存</button>
                </div>
              </Form>
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
          .avatar {
            width: 100px;
            height: 100px;
          }
          .sm-p {
            color: var(--normal-gray-light-color);
          }
          .member-side-bar {
            a {
              color: #fff;
              text-decoration: none;
            }
            h6 {
              padding: 0 20px;
              margin-bottom: 20px;
            }
            h6:hover {
              border-left: 4px solid var(--primary-color);
              transition: 0.1s;
            }
          }
        `}
      </style>
    </>
  )
}
