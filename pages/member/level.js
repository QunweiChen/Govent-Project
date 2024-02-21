// import { useRouter } from 'next/router'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Memberleft from '@/components/member/member-left'
import ProgressBar from 'react-bootstrap/ProgressBar';

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
                <div className='member-bgc contain bg-bg-gray'>
                  <div className='d-flex justify-content-between pb-2'>
                    <span className='sm-p'>會員等級</span>
                    <span className='sm-p'><i className="bi bi-question-circle"></i> 常見問題與幫助</span>
                  </div>
                  <h4>黃金會員</h4>
                  <hr className='my-4'/>
                  <h6 className='text-normal-gray-light'>會籍禮遇</h6>
                  <div className='pt-3'>
                    <h5><i className="bi bi-credit-card pe-2 text-primary"></i>消費金額 10% 點數回饋</h5>
                    <ul>
                      <li>積分累積加速：作為黃金會員，您在購物、參與活動等方面可以更快速地累積積分</li>
                      <li>獨家禮品或折扣券：您可以使用積分兌換獨家禮品或折扣券，讓您感受到不斷的價值回饋。</li>
                    </ul>
                  </div>
                  <div className='pt-3'>
                    <h5><i className="bi bi-cake pe-2 text-primary"></i>生日特典</h5>
                    <ul>
                      <li>生日禮物：在您的生日當月，您可獲得獨家的生日禮物或優惠券，提升您的會員體驗。</li>
                      <li>生日活動參與權：參與獨家的生日活動，例如舉辦生日聚餐、線上活動等，讓您感受到特別尊榮。</li>
                    </ul>
                  </div>
                  <div className='pt-3'>
                    <h5><i className="bi bi-person pe-2 text-primary"></i>專屬活動及體驗</h5>
                    <ul>
                      <li>黃金會員專場：我們定期舉辦專屬的會員活動或促銷，僅限黃金會員參與，提供獨特的購物體驗。</li>
                      <li>體驗式活動：不定期舉辦特別的體驗活動，如工廠參訪、品酒會等，讓您有機會與品牌更深入地互動。</li>
                    </ul>
                  </div>
                </div>
                <hr className='my-4'/>
                <div className='px-3'>
                <div className='sm-p'>累積金額 3123</div>
                <ProgressBar now={60} className='my-3'/>
                <h5>額外消費 1871 元 解鎖 鑽石會員</h5>
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
          li{
            color: var(--normal-gray-light-color)
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
            padding: 20px 20px;
          }
        `}
      </style>
    </>
  )
}
