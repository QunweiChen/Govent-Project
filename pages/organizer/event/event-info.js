import React, { useState } from 'react'
import OrganizerLayout from '@/components/layout/organizer-layout'
import OrganizerEventSidebar from '@/components/organizer/organizer-event-sidebar'
import OrganizerTopBar from '@/components/organizer/organizer-top-bar'
import { Row, Col } from 'react-bootstrap'

export default function OrganizerEvent() {
  const [selectedButton, setSelectedButton] = useState(1)

  const handleRadioChange = (value) => {
    setSelectedButton(value)
  }

  return (
    <>
      <div className="d-flex organizer-container">
        <OrganizerEventSidebar />
        <div className="w-100 bg-bg-gray organizer-main d-flex flex-column">
          <OrganizerTopBar title="活動資訊總覽" />
          <div>
            <Row>
              <Col sm="6">
                <div className='object-fit mb-4'>
                  <img src='https://i.kfs.io/article5_cover/global/9415739v2/fit/800x420.jpg' />
                </div>
                <div className='control-bgc p-20'>
                  <Row className='gy-3'>
                    <Col sm="12">
                      <div className='sm-p mb-2'>活動名稱</div>
                      <h5>YOASOBI演唱會2024台北站｜YOASOBI ASIA TOUR 2023-2024 Solo Concert in Taipei</h5>
                    </Col>
                    <Col sm="6">
                      <div className='sm-p mb-2'>活動類別</div>
                      <h6>演唱會</h6>
                    </Col>
                    <Col sm="6">
                      <div className='sm-p mb-2'>活動時間</div>
                      <h6>2024/01/21 － 2024/01/22</h6>
                    </Col>
                    <Col sm="6">
                      <div className='sm-p mb-2'>售票時間</div>
                      <h6>2024/01/21 － 2024/01/22</h6>
                    </Col>
                    <Col sm="6">
                      <div className='sm-p mb-2'>活動建立時間</div>
                      <h6>2024/01/21 12:36:21</h6>
                    </Col>
                  </Row>

                </div>
              </Col>
              <Col sm="6">
                <Row className='gy-4'>
                  <Col sm="6">
                    <div className='control-bgc'>
                      <div className='text-normal-gray-light py-2 bottom-line text-center'>活動狀態</div>
                      <div className='text-center py-4'>
                        <h4><i className="bi bi-lightning-fill text-success"></i></h4>
                        <h4>上架中</h4>
                      </div>
                    </div>
                  </Col>
                  <Col sm="6">
                    <div className='control-bgc'>
                      <div className='text-normal-gray-light py-2 bottom-line text-center'>活動收藏數</div>
                      <div className='text-center py-4'>
                        <h4><i className="bi bi-bookmark-fill text-normal-gray-light"></i></h4>
                        <h4>926</h4>
                      </div>
                    </div>
                  </Col>
                  <Col sm="6">
                    <div className='control-bgc'>
                      <div className='text-normal-gray-light py-2 bottom-line text-center'>販售數量</div>
                      <div className='text-center py-4'>
                        <h4>2,412</h4>
                      </div>
                    </div>
                  </Col>
                  <Col sm="6">
                    <div className='control-bgc'>
                      <div className='text-normal-gray-light py-2 bottom-line text-center'>總銷售額</div>
                      <div className='text-center py-4'>
                        <h4>7,718,400</h4>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
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
            border-radius: 30px 0 0 30px;
            padding: 25px;
            height: 100vh;
          }
          .control-bgc{
            background-color: var(--bg-gray-secondary-color);
            border-radius: 10px;
          }
          .p-20{
            padding: 20px;
          }
          .object-fit{
            border-radius: 10px;
            overflow: hidden;
            img{
              width:100%;
              height: 100%;
              object-fit: cover;
            }
          }
        `}
      </style>
    </>
  )
}

OrganizerEvent.getLayout = function (page) {
  return <OrganizerLayout>{page}</OrganizerLayout>
}
