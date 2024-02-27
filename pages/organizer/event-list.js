import React, { useState } from 'react'
import OrganizerLayout from '@/components/layout/organizer-layout'
import OrganizerSidebar from '@/components/organizer/organizer-sidebar'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import OrganizerTopBar from '@/components/organizer/organizer-top-bar'

export default function EventList() {
  const [selectedButton, setSelectedButton] = useState(1)

  const handleRadioChange = (value) => {
    setSelectedButton(value)
  }

  return (
    <>
      <div className="d-flex organizer-container">
        <OrganizerSidebar />
        <div className="w-100 bg-bg-gray organizer-main d-flex flex-column">
          <OrganizerTopBar title="活動清單"/>
          <div className="event-nav flex-grow-1 d-flex flex-column">
            <Tabs
              id="uncontrolled-tab-example"
              className="border-0"
              defaultActiveKey="all"
            >
              <Tab
                eventKey="all"
                title="所有活動"
                className="bg-bg-gray-secondary"
              >
                <div className="d-flex justify-content-between align-items-center p-3 text-normal-gray-light mb-2">
                  <div>共列出17檔活動</div>
                  <div className="d-flex align-items-center">
                    <div className="pe-4">
                      <ToggleButtonGroup
                        type="radio"
                        name="options"
                        value={selectedButton}
                        onChange={handleRadioChange}
                        defaultValue={1}
                        size="sm"
                      >
                        <ToggleButton
                          id="tbg-radio-1"
                          value={1}
                          variant={
                            selectedButton === 1 ? 'primary' : 'secondary'
                          }
                        >
                          活動時間<i className="bi bi-sort-down ps-2"></i>
                        </ToggleButton>
                        <ToggleButton
                          id="tbg-radio-2"
                          value={2}
                          variant={
                            selectedButton === 2 ? 'primary' : 'secondary'
                          }
                        >
                          建立時間<i className="bi bi-sort-down ps-2"></i>
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </div>
                    <i className="bi bi-search pe-3"></i>
                    <input className="form-control on-search" />
                    <button className="btn btn-sm btn-outline-normal-white ms-2">
                      搜尋
                    </button>
                  </div>
                </div>
                <div>
                  <Row className="mx-3 on-list align-items-center gx-5 mt-2">
                    <Col sm="auto" className="mx-2">
                      <i className="bi bi-lightning-fill pe-2 text-success"></i>
                      上架中
                    </Col>
                    <Col sm="auto" className="on-list-img p-0">
                      <img
                        src="https://www.shutterstock.com/image-vector/cute-cartoon-rubber-duck-vector-600nw-2276837591.jpg"
                        alt=""
                      />
                    </Col>
                    <Col className="d-flex align-items-center border-end border-normal-gray h-75 ">
                      <h6 className="m-0">
                        YOASOBI演唱會2024台北站｜YOASOBI ASIA TOUR 2023-2024
                        Solo Concert in Taipei
                      </h6>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center border-end border-normal-gray h-75 ">
                      <div className="sm-p">活動時間</div>
                      <h6 className="">2024/01/21 17:00 － 2024/01/22 19:00</h6>
                    </Col>
                    <Col
                      sm="auto"
                      className="d-flex flex-column justify-content-center border-end border-normal-gray h-75 "
                    >
                      <div className="sm-p">建立時間</div>
                      <div className="sm-p">2024/01/02</div>
                    </Col>
                    <Col sm="auto" className="text-center mx-3">
                      <i className="bi bi-three-dots"></i>
                      <br />
                      更多
                    </Col>
                  </Row>
                  <Row className="mx-3 on-list align-items-center gx-5 mt-2">
                    <Col sm="auto" className="mx-2">
                      <i className="bi bi-lightning-fill pe-2 text-success"></i>
                      上架中
                    </Col>
                    <Col sm="auto" className="on-list-img p-0">
                      <img
                        src="https://www.shutterstock.com/image-vector/cute-cartoon-rubber-duck-vector-600nw-2276837591.jpg"
                        alt=""
                      />
                    </Col>
                    <Col className="d-flex align-items-center border-end border-normal-gray h-75 ">
                      <h6 className="m-0">
                        YOASOBI演唱會2024台北站｜YOASOBI ASIA TOUR 2023-2024
                        Solo Concert in Taipei
                      </h6>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center border-end border-normal-gray h-75 ">
                      <div className="sm-p">活動時間</div>
                      <h6 className="">2024/01/21 17:00 － 2024/01/22 19:00</h6>
                    </Col>
                    <Col
                      sm="auto"
                      className="d-flex flex-column justify-content-center border-end border-normal-gray h-75 "
                    >
                      <div className="sm-p">建立時間</div>
                      <div className="sm-p">2024/01/02</div>
                    </Col>
                    <Col sm="auto" className="text-center mx-3">
                      <i className="bi bi-three-dots"></i>
                      <br />
                      更多
                    </Col>
                  </Row>
                  <Row className="mx-3 on-list align-items-center gx-5 mt-2">
                    <Col sm="auto" className="mx-2">
                      <i className="bi bi-lightning-fill pe-2 text-success"></i>
                      上架中
                    </Col>
                    <Col sm="auto" className="on-list-img p-0">
                      <img
                        src="https://www.shutterstock.com/image-vector/cute-cartoon-rubber-duck-vector-600nw-2276837591.jpg"
                        alt=""
                      />
                    </Col>
                    <Col className="d-flex align-items-center border-end border-normal-gray h-75 ">
                      <h6 className="m-0">
                        YOASOBI演唱會2024台北站｜YOASOBI ASIA TOUR 2023-2024
                        Solo Concert in Taipei
                      </h6>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center border-end border-normal-gray h-75 ">
                      <div className="sm-p">活動時間</div>
                      <h6 className="">2024/01/21 17:00 － 2024/01/22 19:00</h6>
                    </Col>
                    <Col
                      sm="auto"
                      className="d-flex flex-column justify-content-center border-end border-normal-gray h-75 "
                    >
                      <div className="sm-p">建立時間</div>
                      <div className="sm-p">2024/01/02</div>
                    </Col>
                    <Col sm="auto" className="text-center mx-3">
                      <i className="bi bi-three-dots"></i>
                      <br />
                      更多
                    </Col>
                  </Row>
                  <Row className="mx-3 on-list align-items-center gx-5 mt-2">
                    <Col sm="auto" className="mx-2">
                      <i className="bi bi-lightning-fill pe-2 text-success"></i>
                      上架中
                    </Col>
                    <Col sm="auto" className="on-list-img p-0">
                      <img
                        src="https://www.shutterstock.com/image-vector/cute-cartoon-rubber-duck-vector-600nw-2276837591.jpg"
                        alt=""
                      />
                    </Col>
                    <Col className="d-flex align-items-center border-end border-normal-gray h-75 ">
                      <h6 className="m-0">
                        YOASOBI演唱會2024台北站｜YOASOBI ASIA TOUR 2023-2024
                        Solo Concert in Taipei
                      </h6>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center border-end border-normal-gray h-75 ">
                      <div className="sm-p">活動時間</div>
                      <h6 className="">2024/01/21 17:00 － 2024/01/22 19:00</h6>
                    </Col>
                    <Col
                      sm="auto"
                      className="d-flex flex-column justify-content-center border-end border-normal-gray h-75 "
                    >
                      <div className="sm-p">建立時間</div>
                      <div className="sm-p">2024/01/02</div>
                    </Col>
                    <Col sm="auto" className="text-center mx-3">
                      <i className="bi bi-three-dots"></i>
                      <br />
                      更多
                    </Col>
                  </Row>
                  <div className="d-flex justify-content-center pt-4">
                    <ButtonToolbar aria-label="Toolbar with button groups">
                      <ButtonGroup className="me-2" aria-label="First group">
                        <Button>1</Button> <Button>2</Button> <Button>3</Button>{' '}
                        <Button>4</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="onSale"
                title="上架中"
                className="bg-bg-gray-secondary"
              >
                Tab content for Profile
              </Tab>
              <Tab
                eventKey="review"
                title="審核中"
                className="bg-bg-gray-secondary"
              >
                Tab content for Contact
              </Tab>
              <Tab
                eventKey="end"
                title="已結束"
                className="bg-bg-gray-secondary"
              >
                Tab content for Contact
              </Tab>
            </Tabs>
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
          .event-nav {
            height: 100%;
            .nav-item {
              background-color: var(--bg-gray-light-color);
              margin-right: 5px;
              border-radius: 5px 5px 0 0;
              .nav-link {
                color: white;
                width: 130px;
                border: 0px;
                border-top: 4px solid var(--none);
              }
              .nav-link:focus,
              .nav-link:hover {
                 {
                  /* border-color: var(--none); */
                }
                border: 0px;
                border-top: 4px solid var(--primary-color);
              }
              .nav-link.active {
                background-color: var(--bg-gray-secondary-color);
                border: 0px;
                border-top: 4px solid var(--primary-color);
                color: var(--primary-color);
              }
            }
          }
          .tab-content {
            flex: 1;
            .tab-pane {
              height: 100%;
              border-radius: 0 10px 10px 10px;
              padding: 10px 15px;
            }
          }
          .on-search {
            width: 180px;
            height: 31px;
          }
          .on-list {
            border: 1px solid var(--normal-gray-color);
            border-radius: 10px;
            height: 140px;
            .on-list-img {
              border-radius: 5px;
              width: 160px;
              height: 120px;
              overflow: hidden;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
        `}
      </style>
    </>
  )
}

EventList.getLayout = function (page) {
  return <OrganizerLayout>{page}</OrganizerLayout>
}
