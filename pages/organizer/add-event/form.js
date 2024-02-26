import React, { useState, useMemo } from 'react'
import OrganizerSidebar from '@/components/organizer/organizer-sidebar'
import OrganizerLayout from '@/components/layout/organizer-layout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Quill from '@/components/organizer/react-quill'

export default function OrganizerForm() {
  return (
    <>
      <div className="d-flex organizer-container">
        <OrganizerSidebar />
        <div className="w-100 bg-bg-gray organizer-main d-flex flex-column">
          <div className="px-4 py-3 d-flex justify-content-between mb-3">
            <h4 className="m-0">新增活動資訊</h4>
            <div>
              <button className="btn btn-outline-primary">
                <i className="bi bi-caret-left-fill pe-2"></i>回首頁
              </button>
            </div>
          </div>
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
                      <Form.Label>購票說明</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="請填寫購票說明"
                      />
                    </Form.Group>
                  </Col>
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
        `}
      </style>
    </>
  )
}

OrganizerForm.getLayout = function (page) {
  return <OrganizerLayout>{page}</OrganizerLayout>
}
