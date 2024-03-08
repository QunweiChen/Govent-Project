import React, { useState, useRef, useMemo, useEffect, use } from 'react'
import OrganizerSidebar from '@/components/organizer/organizer-sidebar'
import OrganizerLayout from '@/components/layout/organizer-layout'
import { Row, Col, Form, Button } from 'react-bootstrap'
import OrganizerTopBar from '@/components/organizer/organizer-top-bar'
import 'react-quill/dist/quill.core.css'
import 'react-quill/dist/quill.snow.css'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

function OrganizerOtptionForm() {
  const router = useRouter()
  const { eid } = router.query
  const [formNumber, setFormNumber] = useState(1)
  const [optionFormData1, setOptionFormData1] = useState({
    event_id: '',
    option_name: '',
    price: '',
    max_quantity: '',
    contain: '',
    start_time: '',
  })
  const [optionFormData2, setOptionFormData2] = useState({
    event_id: '',
    option_name: '',
    price: '',
    max_quantity: '',
    contain: '',
    start_time: '',
  })
  const [optionFormData3, setOptionFormData3] = useState({
    event_id: '',
    option_name: '',
    price: '',
    max_quantity: '',
    contain: '',
    start_time: '',
  })

  useEffect(() => {
    if (eid) {
      setOptionFormData1((prevData) => ({
        ...prevData,
        event_id: eid,
      }))
      setOptionFormData2((prevData) => ({
        ...prevData,
        event_id: eid,
      }))
      setOptionFormData3((prevData) => ({
        ...prevData,
        event_id: eid,
      }))
    }
  }, [eid])

  const handleInputChange1 = (e) => {
    const { name, value } = e.target
    setOptionFormData1((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    console.log('內容1')
    console.log(optionFormData1)
  }
  const handleInputChange2 = (e) => {
    const { name, value } = e.target
    setOptionFormData2((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    console.log('內容2')
    console.log(optionFormData2)
  }
  const handleInputChange3 = (e) => {
    const { name, value } = e.target
    setOptionFormData3((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    console.log('內容3')
    console.log(optionFormData3)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // 創建一個空的 JSON 對象
    const formData = {
      data1: optionFormData1,
    }

    // 添加第二組表單數據
    if (formNumber > 1) {
      formData.data2 = optionFormData2
    }

    // 添加第三組表單數據
    if (formNumber > 2) {
      formData.data3 = optionFormData3
    }

    console.log(formData)

    try {
      const response = await fetch(
        'http://localhost:3005/api/organizer/add-options',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // 如果有需要，可以設置其他 headers，例如：
            // 'Authorization': 'Bearer your_access_token',
          },
          body: JSON.stringify(formData),
        }
      )

      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error('Error sending form data:', error)
    }
  }

  return (
    <>
      <div className="d-flex organizer-container">
        <OrganizerSidebar />
        <div className="w-100 bg-bg-gray organizer-main d-flex flex-column">
          <OrganizerTopBar title="新增活動資訊" />
          <div className="d-flex flex-column align-items-center on-main">
            <h5 className="my-5">活動規格</h5>
            <div className="w-1200">
              <Form data-bs-theme="dark" onSubmit={handleSubmit}>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="ticket-format"
                >
                  <div className="bottom-line px-3 py-2 ">規格1</div>
                  <Row className="px-3 py-2">
                    <Col sm="6">
                      <Form.Group className="mb-3" controlId="option_name">
                        <Form.Label>票卷規格名稱</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="請填寫規格名稱 EX:1F站票"
                          name="option_name"
                          value={optionFormData1.option_name}
                          onChange={handleInputChange1}
                        />
                      </Form.Group>
                    </Col>
                    <Col sm="6">
                      <Form.Group className="mb-3" controlId="start_time">
                        <Form.Label>使用時間</Form.Label>
                        <Form.Control
                          type="datetime-local"
                          name="start_time"
                          value={optionFormData1.start_time}
                          onChange={handleInputChange1}
                        />
                      </Form.Group>
                    </Col>
                    <Col sm="6">
                      <Form.Group className="mb-3" controlId="max_quantity">
                        <Form.Label>最大販售數量</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="最大販售數量"
                          name="max_quantity"
                          value={optionFormData1.max_quantity}
                          onChange={handleInputChange1}
                        />
                      </Form.Group>
                    </Col>
                    <Col sm="6">
                      <Form.Group className="mb-3" controlId="price">
                        <Form.Label>價格</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="價格"
                          name="price"
                          value={optionFormData1.price}
                          onChange={handleInputChange1}
                        />
                      </Form.Group>
                    </Col>
                    <Col sm="12">
                      <Form.Group className="mb-2" controlId="contain">
                        <Form.Label>規格說明（顯示於顧客票卷中）</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          placeholder="請填寫規格說明"
                          name="contain"
                          value={optionFormData1.contain}
                          onChange={handleInputChange1}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </motion.div>
                {formNumber > 1 && (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    exit={{ y: 20, opacity: 0 }}
                    className="ticket-format"
                  >
                    <div className="bottom-line px-3 py-2">規格2</div>
                    <Row className="px-3 py-2">
                      <Col sm="6">
                        <Form.Group className="mb-3" controlId="option_name">
                          <Form.Label>票卷規格名稱</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="請填寫規格名稱 EX:1F站票"
                            name="option_name"
                            value={optionFormData2.option_name}
                            onChange={handleInputChange2}
                          />
                        </Form.Group>
                      </Col>
                      <Col sm="6">
                        <Form.Group className="mb-3" controlId="start_time">
                          <Form.Label>使用時間</Form.Label>
                          <Form.Control
                            type="datetime-local"
                            name="start_time"
                            value={optionFormData2.start_time}
                            onChange={handleInputChange2}
                          />
                        </Form.Group>
                      </Col>
                      <Col sm="6">
                        <Form.Group className="mb-3" controlId="max_quantity">
                          <Form.Label>最大販售數量</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="最大販售數量"
                            name="max_quantity"
                            value={optionFormData2.max_quantity}
                            onChange={handleInputChange2}
                          />
                        </Form.Group>
                      </Col>
                      <Col sm="6">
                        <Form.Group className="mb-3" controlId="price">
                          <Form.Label>價格</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="價格"
                            name="price"
                            value={optionFormData2.price}
                            onChange={handleInputChange2}
                          />
                        </Form.Group>
                      </Col>
                      <Col sm="12">
                        <Form.Group className="mb-2" controlId="contain">
                          <Form.Label>規格說明（顯示於顧客票卷中）</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder="請填寫規格說明"
                            name="contain"
                            value={optionFormData2.contain}
                            onChange={handleInputChange2}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </motion.div>
                )}
                {formNumber > 2 && (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    exit={{ y: 20, opacity: 0 }}
                    className="ticket-format"
                  >
                    <div className="bottom-line px-3 py-2">規格3</div>
                    <Row className="px-3 py-2">
                      <Col sm="6">
                        <Form.Group className="mb-3" controlId="option_name">
                          <Form.Label>票卷規格名稱</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="請填寫規格名稱 EX:1F站票"
                            name="option_name"
                            value={optionFormData3.option_name}
                            onChange={handleInputChange3}
                          />
                        </Form.Group>
                      </Col>
                      <Col sm="6">
                        <Form.Group className="mb-3" controlId="start_time">
                          <Form.Label>使用時間</Form.Label>
                          <Form.Control
                            type="datetime-local"
                            name="start_time"
                            value={optionFormData3.start_time}
                            onChange={handleInputChange3}
                          />
                        </Form.Group>
                      </Col>
                      <Col sm="6">
                        <Form.Group className="mb-3" controlId="max_quantity">
                          <Form.Label>最大販售數量</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="最大販售數量"
                            name="max_quantity"
                            value={optionFormData3.max_quantity}
                            onChange={handleInputChange3}
                          />
                        </Form.Group>
                      </Col>
                      <Col sm="6">
                        <Form.Group className="mb-3" controlId="price">
                          <Form.Label>價格</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="價格"
                            name="price"
                            value={optionFormData3.price}
                            onChange={handleInputChange3}
                          />
                        </Form.Group>
                      </Col>
                      <Col sm="12">
                        <Form.Group className="mb-2" controlId="contain">
                          <Form.Label>規格說明（顯示於顧客票卷中）</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder="請填寫規格說明"
                            name="contain"
                            value={optionFormData3.contain}
                            onChange={handleInputChange3}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </motion.div>
                )}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="button-control d-flex justify-content-between mb-5"
                >
                  <div>
                    <Button
                      onClick={() =>
                        setFormNumber((prevNumber) =>
                          Math.min(prevNumber + 1, 3)
                        )
                      }
                      variant="primary-deep"
                      className={`${
                        formNumber > 2 ? 'disabled' : ''
                      } px-5 me-3`}
                    >
                      <h6 className="m-0">新增規格</h6>
                    </Button>
                    <Button
                      onClick={() =>
                        setFormNumber((prevNumber) =>
                          Math.max(prevNumber - 1, 1)
                        )
                      }
                      variant="primary-deep"
                      className={`${formNumber === 1 ? 'disabled' : ''} px-5`}
                    >
                      <h6 className="m-0">刪除規格</h6>
                    </Button>
                  </div>
                  <Button variant="primary-deep" className="px-5" type="sumbit">
                    <h6 className="m-0">提交送出</h6>
                  </Button>
                </motion.div>
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
            position: relative;
            background-color: var(--bg-gray-secondary-color);
            border-radius: 10px;
            height: 100%;
          }
          .button-control {
            padding: 20px;
            background-color: var(--primary-color);
            border-radius: 10px;
            position: sticky;
            bottom: 30px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          }
          .w-1200 {
            width: 1000px;
          }
          .ticket-format {
            border: 1px solid var(--normal-gray-color);
            border-radius: 5px;
            background-color: var(--bg-gray-light-color);
            margin-bottom: 40px;
          }
          .bottom-line {
            background-color: var(--bg-gray-color);
            border-radius: 5px 5px 0 0;
          }
        `}
      </style>
    </>
  )
}

export default OrganizerOtptionForm

OrganizerOtptionForm.getLayout = function (page) {
  return <OrganizerLayout>{page}</OrganizerLayout>
}
