// import { useRouter } from 'next/router'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

// only redirect to member/login
export default function MemberIndex() {
  // const router = useRouter()
  // // Make sure we're in the browser
  // if (typeof window !== 'undefined') {
  //   router.push('/member/login')
  // }

  return (
    <>
      <Row data-bs-theme="dark">
        <Col sm={3}>
          <div className="member-bgc">
            <div className='py-3 d-flex justify-content-center'>
              <img className='avatar rounded-circle' src='https://www.shutterstock.com/image-vector/cute-cartoon-rubber-duck-vector-600nw-2276837591.jpg' />
            </div>
            <hr/>
            <div className='py-3'>
              <div className='sm-p ps-4 pb-2'>會員資料</div>
              <h6 className='ps-4 py-2 m-0'><i className="bi bi-person text-primary pe-3"></i><span>帳戶設定</span></h6>
              <h6 className='ps-4 py-2 m-0'><i className="bi bi-credit-card text-primary pe-3"></i><span>管理付款方式</span></h6>
            </div>
            <div className='py-3'>
              <div className='sm-p ps-4 pb-2'>會員資料</div>
              <h6 className='ps-4 py-2 m-0'><i className="bi bi-calendar-minus text-primary pe-3"></i><span>訂單管理</span></h6>
              <h6 className='ps-4 py-2 m-0'><i className="bi bi-person-fill-up text-primary pe-3"></i><span>會員等級</span></h6>
              <h6 className='ps-4 py-2 m-0'><i className="bi bi-ticket-perforated text-primary pe-3"></i><span>優惠卷管理</span></h6>
              <h6 className='ps-4 py-2 m-0'><i className="bi bi-heart text-primary pe-3"></i><span>我的收藏</span></h6>
            </div>
          </div>
        </Col>
        <Col sm={9}>
          <div className="member-bgc contain">
            <Form>
              <h4>帳戶設定</h4>
              <Row className='mt-4'>
                <Col sm={3}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>姓名</Form.Label>
                    <Form.Control className='dark-input' type="text" placeholder="王小鴨" />
                  </Form.Group>
                </Col>
                <Col sm={3}>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>性別</Form.Label>
                    <Form.Control className='dark-input' type="email" placeholder="請選擇" />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>生日</Form.Label>
                    <Form.Control className='dark-input' type="date" placeholder="王小鴨" />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>手機</Form.Label>
                    <Form.Control className='dark-input' type="text" placeholder="請輸入" />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>信箱</Form.Label>
                    <Form.Control className='dark-input' type="email" placeholder="請輸入信箱" />
                  </Form.Group>
                </Col>
              </Row>
              <div className='d-flex justify-content-end mt-3'>
                <button className='btn btn-primary'>儲存</button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
      <style global jsx>
        {`body {
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
        `}
      </style>
    </>
  )
}
