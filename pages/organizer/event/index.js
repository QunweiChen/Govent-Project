import React, { use, useEffect, useState } from 'react'
import {
  Row,
  Col,
  Tab,
  Tabs,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  ButtonGroup,
  ButtonToolbar
} from 'react-bootstrap'
import Link from 'next/link'
import { motion } from 'framer-motion'

import OrganizerLayout from '@/components/layout/organizer-layout'
import OrganizerSidebar from '@/components/organizer/organizer-sidebar'
import OrganizerTopBar from '@/components/organizer/organizer-top-bar'

export default function OrganizerEvent() {
  const [eventList, setEventList] = useState([])
  const [availableEventList, setAvailableEventList] = useState([]);
  const [underRiviewEvents, setUnderRiviewEvents] = useState([])
  const [currentPage, setCurrentPage] = useState(0);

  const [selectedButton, setSelectedButton] = useState(1)
  const handleRadioChange = (value) => {
    setSelectedButton(value)
  }

  useEffect(() => {
    fetch('http://localhost:3005/api/organizer', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        // 檢查是否有資料並設定到 state 中
        if (data && data.data && data.data.result) {
          const events = data.data.result
          const availableEvents = events.filter(event => event.valid === 1).reduce((acc, curr, index) => {
            const groupIndex = Math.floor(index / 4);
            if (!acc[groupIndex]) {
              acc[groupIndex] = [];
            }
            acc[groupIndex].push(curr);
            return acc;
          }, []);
          const underRiviewEvents = events.filter(event => event.valid === 0).reduce((acc, curr, index) => {
            const groupIndex = Math.floor(index / 4);
            if (!acc[groupIndex]) {
              acc[groupIndex] = [];
            }
            acc[groupIndex].push(curr);
            return acc;
          }, []);
          setAvailableEventList(availableEvents)
          setUnderRiviewEvents(underRiviewEvents)
          
        } else {
          console.warn('No favorites data received from the server.')
        }
      })
      .catch((error) => console.error('Error fetching data:', error))
  }, [])



  return (
    <>
      <div className="d-flex organizer-container">
        <OrganizerSidebar />
        <div className="w-100 bg-bg-gray organizer-main d-flex flex-column">
          <OrganizerTopBar title="活動清單" />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="event-nav flex-grow-1 d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center px-4 text-normal-gray-light mb-3">
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
            <Tabs
              id="uncontrolled-tab-example"
              className="border-0"
              defaultActiveKey="onSale"
            >
              <Tab
                eventKey="onSale"
                title="上架中"
                className="bg-bg-gray-secondary"
              >
                <div className='d-flex flex-column h-100'>
                  <div>
                    {availableEventList[currentPage] && availableEventList[currentPage].map((event, eventIndex) => (
                      <div key={eventIndex}>
                        <motion.div
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: eventIndex * 0.05 }}
                          key={currentPage}
                        >
                          <Row className="mx-1 on-list align-items-center gx-5 mt-2">
                            <Col sm="auto" className="on-list-img p-0 ms-3">
                              <img
                                src={`http://localhost:3005/images/banner/${event.banner}`}
                                alt=""
                              />
                            </Col>
                            <Col className="d-flex align-items-center border-end border-normal-gray h-75 ">
                              <h6 className="m-0">
                                {event.event_name}
                              </h6>
                            </Col>
                            <Col sm="auto" className="d-flex flex-column justify-content-center align-items-center border-end border-normal-gray h-75 ">
                              <div>
                                <div className="sm-p mb-1">活動時間</div>
                                <div className='d-flex'>
                                  <div>
                                    <h6 className='m-0'>{event.start_date.split('T')[0]}</h6>
                                    <p>{event.start_date.split('T')[1].slice(0, 5)}</p>
                                  </div>
                                  <div className='mx-3'>
                                    <h6 className='m-0'>－</h6>
                                  </div>
                                  <div>
                                    <h6 className='m-0'>{event.end_date.split('T')[0]}</h6>
                                    <p>{event.end_date.split('T')[1].slice(0, 5)}</p>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col
                              sm="auto"
                              className="d-flex flex-column justify-content-center border-end border-normal-gray h-75 "
                            >
                              <div className="sm-p mb-1">建立時間</div>
                              <div className="sm-p">{event.create_at.split('T')[0]}</div>
                            </Col>
                            <Col sm="auto" className="text-center mx-3">
                              <Link href="event/event-info" className="text-link">
                                <i className="bi bi-three-dots"></i>
                                <br />
                                更多
                              </Link>
                            </Col>
                          </Row>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                  <div className="d-flex justify-content-center pt-2 mt-auto">
                    <ul className='d-flex'>
                      {availableEventList.map((page, index) => (
                        <li key={index} className='list-unstyled mx-1'>
                          <button className={`btn ${currentPage === index ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setCurrentPage(index)}>
                            {index + 1}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="review"
                title="審核中"
                className="bg-bg-gray-secondary"
              >
                <div className='d-flex flex-column h-100'>
                  <div>
                    {underRiviewEvents[currentPage] && underRiviewEvents[currentPage].map((event, eventIndex) => (
                      <div key={eventIndex}>
                        <motion.div
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: eventIndex * 0.05 }}
                          key={currentPage}
                        >
                          <Row className="mx-1 on-list align-items-center gx-5 mt-2">
                            <Col sm="auto" className="on-list-img p-0 ms-3">
                              <img
                                src={`http://localhost:3005/images/banner/${event.banner}`}
                                alt=""
                              />
                            </Col>
                            <Col className="d-flex align-items-center border-end border-normal-gray h-75 ">
                              <h6 className="m-0">
                                {event.event_name}
                              </h6>
                            </Col>
                            <Col sm="auto" className="d-flex flex-column justify-content-center align-items-center border-end border-normal-gray h-75 ">
                              <div>
                                <div className="sm-p mb-1">活動時間</div>
                                <div className='d-flex'>
                                  <div>
                                    <h6 className='m-0'>{event.start_date.split('T')[0]}</h6>
                                    <p>{event.start_date.split('T')[1].slice(0, 5)}</p>
                                  </div>
                                  <div className='mx-3'>
                                    <h6 className='m-0'>－</h6>
                                  </div>
                                  <div>
                                    <h6 className='m-0'>{event.end_date.split('T')[0]}</h6>
                                    <p>{event.end_date.split('T')[1].slice(0, 5)}</p>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col
                              sm="auto"
                              className="d-flex flex-column justify-content-center border-end border-normal-gray h-75 "
                            >
                              <div className="sm-p mb-1">建立時間</div>
                              <div className="sm-p">{event.create_at.split('T')[0]}</div>
                            </Col>
                            <Col sm="auto" className="text-center mx-3">
                              <Link href="event/event-info" className="text-link">
                                <i className="bi bi-three-dots"></i>
                                <br />
                                更多
                              </Link>
                            </Col>
                          </Row>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                  <div className="d-flex justify-content-center pt-2 mt-auto">
                    <ul className='d-flex'>
                      {underRiviewEvents.map((page, index) => (
                        <li key={index} className='list-unstyled mx-1'>
                          <button className={`btn ${currentPage === index ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setCurrentPage(index)}>
                            {index + 1}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="end"
                title="已結束"
                className="bg-bg-gray-secondary"
              >
                Tab content for Contact
              </Tab>
            </Tabs>
          </motion.div>
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
            border-radius: 5px;
            height: 130px;
            .on-list-img {
              border-radius: 5px;
              width: 160px;
              height: 100px;
              overflow: hidden;
              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
          .flex-1{
            flex: 1;
          }
        `}
      </style>
    </>
  )
}

OrganizerEvent.getLayout = function (page) {
  return <OrganizerLayout>{page}</OrganizerLayout>
}
