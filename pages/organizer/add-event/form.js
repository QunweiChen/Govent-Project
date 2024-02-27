import React, { useState, useMemo } from 'react'
import OrganizerSidebar from '@/components/organizer/organizer-sidebar'
import OrganizerLayout from '@/components/layout/organizer-layout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Quill from '@/components/organizer/react-quill'
import OrganizerTopBar from '@/components/organizer/organizer-top-bar'

export default function OrganizerForm() {
  return (
    <>
      <div className="d-flex organizer-container">
        <OrganizerSidebar />
        <div className="w-100 bg-bg-gray organizer-main d-flex flex-column">
          <OrganizerTopBar title="新增活動資訊"/>
          <div className="d-flex flex-column align-items-center on-main justify-content-center">
            <h5 className="my-5">活動基本資料</h5>
            <div className="w-800">
              <Form data-bs-theme="dark">
                <Row>
                  <Col sm="12">
                    <Form.Group className="mb-3" controlId="banner-upload">
                      <Form.Label
                        for="banner-upload"
                        className="banner-upload flex-column d-flex align-items-center justify-content-center"
                      >
                        <h2>
                          <i className="bi bi-image"></i>
                        </h2>
                        <h6>上傳活動banner（建議比例16:9）</h6>
                        <p>檔案大小限制5MB，兼容格式 jpg/png/webp</p>
                      </Form.Label>
                      <Form.Control type="file" id="banner-upload" hidden />
                    </Form.Group>
                  </Col>
                  <Col sm="12">
                    <Form.Group
                      className="mb-3 disabled"
                      controlId="organizer-name"
                    >
                      <Form.Label>主辦單位</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="好玩國際文化"
                        disabled
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="12">
                    <Form.Group className="mb-3" controlId="event-type">
                      <Form.Label>活動種類</Form.Label>
                      <Form.Select>
                        <option disabled selected>
                          請選擇
                        </option>
                        <option value="1">演唱會</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col sm="12">
                    <Form.Group className="mb-3" controlId="event-place">
                      <Form.Label>活動地點</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="請填寫地點名稱 EX:台北小巨蛋"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="12">
                    <Form.Group className="mb-3" controlId="event-city">
                      <Form.Label>活動地址</Form.Label>
                      <Form.Text id="event-address" muted>
                        <div className="mb-2">縣市區域</div>
                      </Form.Text>
                      <Form.Select>
                        <option disabled selected>
                          請選擇
                        </option>
                        <option value="1">台北市</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col sm="12">
                    <Form.Group className="mb-3" controlId="event-city">
                      <Form.Text id="event-address" muted>
                        <div className="mb-2">詳細地址</div>
                      </Form.Text>
                      <Form.Control type="text" placeholder="請填寫地址" />
                    </Form.Group>
                  </Col>
                  <Col sm="12">
                    <Form.Group className="mb-1" controlId="event-place">
                      <Form.Label>活動說明</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col sm="12">
                    <Quill className="quill" />
                  </Col>
                  <Col sm="12">
                    <Form.Group className="mb-3" controlId="event-place">
                      <Form.Label>購票須知</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="請填寫購票須知"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="6">
                    <Form.Group className="mb-3" controlId="event-city">
                      <Form.Label>活動時間</Form.Label>
                      <Form.Text id="event-address" muted>
                        <div className="mb-2">活動開始時間</div>
                      </Form.Text>
                      <Form.Control type="datetime-local" />
                    </Form.Group>
                  </Col>
                  <Col sm="6">
                    <Form.Group className="mb-3" controlId="event-city">
                      <Form.Text id="event-address" muted>
                        <div className="mt-4 pt-2 mb-2">活動結束時間</div>
                      </Form.Text>
                      <Form.Control type="datetime-local" />
                    </Form.Group>
                  </Col>
                  <Col sm="6">
                    <Form.Group className="mb-3" controlId="event-city">
                      <Form.Label>售票時間</Form.Label>
                      <Form.Text id="event-address" muted>
                        <div className="mb-2">開始售票時間</div>
                      </Form.Text>
                      <Form.Control type="datetime-local" />
                    </Form.Group>
                  </Col>
                  <Col sm="6">
                    <Form.Group className="mb-3" controlId="event-city">
                      <Form.Text id="event-address" muted>
                        <div className="mt-4 pt-2 mb-2">結束售票時間</div>
                      </Form.Text>
                      <Form.Control type="datetime-local" />
                    </Form.Group>
                  </Col>
                  <h5 className="my-5 text-center">票卷規格</h5>
                  <Col sm="12">
                    <div className="ticket-format-01">
                      <div className="bottom-line px-3 py-2">規格1</div>
                      <Row className="px-3 py-2">
                        <Col sm="12">
                          <Form.Group className="mb-3" controlId="event-place">
                            <Form.Label className="sm-p">
                              票卷規格名稱
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="請填寫規格名稱 EX:1F站票"
                            />
                          </Form.Group>
                        </Col>
                        <Col sm="6">
                          <Form.Group className="mb-3" controlId="event-place">
                            <Form.Label className="sm-p">
                              最大販售數量
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="最大販售數量"
                            />
                          </Form.Group>
                        </Col>
                        <Col sm="6">
                          <Form.Group className="mb-3" controlId="event-place">
                            <Form.Label className="sm-p">價格</Form.Label>
                            <Form.Control type="text" placeholder="價格" />
                          </Form.Group>
                        </Col>
                        <Col sm="12">
                          <Form.Group className="mb-2" controlId="event-place">
                            <Form.Label className="sm-p">
                              規格說明（顯示於顧客票卷中）
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={5}
                              placeholder="請填寫規格說明"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <div className="mt-3">
                    <button className="btn btn-outline-normal-gray text-white w-100">
                      新增規格 ＋
                    </button>
                  </div>
                  <div className='my-5 d-flex justify-content-between'>
                    <button className='btn btn-outline-primary'>儲存草稿</button>
                    <button className='btn btn-primary'>完成，送出審核</button>
                  </div>
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <style global jsx>
        {`
          body {
            background-color: var(--bg-dark-color);
            color: var(--normal-white-color);
          }
          .form-control,
          .form-select {
            background-color: var(--bg-gray-light-color);
            border: 1px solid var(--normal-gray-color);
            resize: none;
            &:disabled {
              background-color: var(--bg-gray-secondary-color);
            }
            &::placeholder {
              color: var(--normal-gray-color);
            }
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
          }
          .on-main {
            background-color: var(--bg-gray-secondary-color);
            border-radius: 10px;
          }
          .w-800 {
            width: 800px;
          }
          .banner-upload {
            width: 100%;
            height: 300px;
            border: 1px solid var(--normal-gray-color);
            border-radius: 10px;
            cursor: pointer;
          }
          .quill {
            .ql-toolbar {
              background-color: var(--normal-gray-light-color);
              border-radius: 5px 5px 0 0;
            }
            .ql-container {
              height: 300px;
              border-radius: 0 0 5px 5px;
              border: 1px solid var(--normal-gray-color);
              background-color: var(--bg-gray-light-color);
              margin-bottom: 16px;
            }
          }
          .ticket-format-01 {
            border: 1px solid var(--normal-gray-color);
            border-radius: 5px;
            background-color: var(--bg-gray-light-color);
          }
        `}
      </style>
    </>
  )
}

OrganizerForm.getLayout = function (page) {
  return <OrganizerLayout>{page}</OrganizerLayout>
}
