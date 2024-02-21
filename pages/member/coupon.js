// import { useRouter } from 'next/router'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Memberleft from '@/components/member/member-left'


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
            <Memberleft />
          </Col>
          <Col sm={9}>
            <div className="member-bgc contain">
              <h4>可用優惠卷</h4>
              <hr className='my-4'/>
              <Row>
                <Col sm={6}>
                  <div className='card'>
                    <div className='sm-p px-3 py-2'>折扣碼 govent300</div>
                    <hr className='my-0'/>
                    <div className='px-3 py-3'>
                      <h3 className='text-primary'>NT$300</h3>
                      <p className='pb-3'>最低消費金額3000</p>
                      <p className='sm-p'>GOVENT x JCB 1月全站商品單筆消費滿NT$3,000元現折NT$300元優惠活動</p>
                    </div>
                    <hr className='my-0'/>
                    <p className='px-3 py-2'>使用期限：2024/01/01 - 2024/01/31</p>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className='card'>
                    <div className='sm-p px-3 py-2'>折扣碼 govent300</div>
                    <hr className='my-0'/>
                    <div className='px-3 py-3'>
                      <h3 className='text-primary'>NT$300</h3>
                      <p className='pb-3'>最低消費金額3000</p>
                      <p className='sm-p'>GOVENT x JCB 1月全站商品單筆消費滿NT$3,000元現折NT$300元優惠活動</p>
                    </div>
                    <hr className='my-0'/>
                    <p className='px-3 py-2'>使用期限：2024/01/01 - 2024/01/31</p>
                  </div>
                </Col>
                
              </Row>
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
          .card{
            background-color: var(--bg-gray-light-color);
            border-radius: 10px
          }
        `}
      </style>
    </>
  )
}
