import React, { useState, useRef, useEffect } from 'react'
import OrganizerSidebar from '@/components/organizer/organizer-sidebar'
import OrganizerLayout from '@/components/layout/organizer-layout'
import { Row, Col, Form, Button } from 'react-bootstrap'
import OrganizerTopBar from '@/components/organizer/organizer-top-bar'
import dynamic from 'next/dynamic'
import axios from 'axios'
import 'react-quill/dist/quill.core.css'
import 'react-quill/dist/quill.snow.css'

const QuillNoSSRWrapper = dynamic(() => import('react-quill'), { ssr: false })

function FormWithQuill() {
  const editorRef = useRef(null)
  const [quillContent, setQuillContent] = useState('')
  const [otherFormData, setOtherFormData] = useState({
    title: '',
    type: '',
    place: '',
    city: '',
    address: '',
    buyTicket: '',
    startTime: '',
    endTime: '',
    startSellTime: '',
    endSellTime: '',
  })

  const toolbarContainer = [
    [{ size: ['small', false, 'large', 'huge'] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ align: [] }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ direction: 'rtl' }],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ color: [] }, { background: [] }],
    ['image'],
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setOtherFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    console.log('這是其他內容')
    console.log(otherFormData)
    console.log('這是quill')
    console.log(quillContent)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // 上传图片并获取图片链接
      const imageUrl = await uploadImageFile()

      // 准备发送至服务器的数据
      const formData = {
        ...otherFormData,
        quillContent: quillContent,
        imageUrl: imageUrl, // 假设 imageUrl 是上传图片后获取的链接
      }

      // 使用 axios 或其他 HTTP 客户端发送数据至服务器
      const response = await axios.post('/api/submit-form', formData)
      console.log('表单提交成功:', response.data)

      // 处理成功情况，比如显示成功消息或重定向
    } catch (error) {
      console.error('表单提交出错:', error)
      // 处理错误情况
    }
  }

  const imageHandler = (a) => {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.click()

    input.onchange = () => {
      const file = input.files[0]

      // file type is only image.
      if (/^image\//.test(file.type)) {
        saveToServer(file)
      } else {
        console.warn('You could only upload images.')
      }
    }
  }

  function saveToServer(file) {
    const fd = new FormData()
    fd.append('upload', file)

    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:3005/api/organizer/contain-image', true)
    xhr.onload = () => {
      if (xhr.status === 201) {
        // this is callback data: url
        const url = JSON.parse(xhr.responseText).url
        console.log(url)
        insertToEditor(url)
      }
    }
    xhr.send(fd)
  }

  function insertToEditor(url) {
    editorRef.current.getEditor().insertEmbed(null, 'image', url)
  }

  return (
    <>
      <div className="d-flex organizer-container">
        <OrganizerSidebar />
        <div className="w-100 bg-bg-gray organizer-main d-flex flex-column">
          <OrganizerTopBar title="新增活動資訊" />
          <div className="d-flex flex-column align-items-center on-main justify-content-center">
            <h5 className="my-5">活動基本資料</h5>
            <div className="w-800">
              <Form data-bs-theme="dark" onSubmit={handleSubmit}>
                <Row>
                  <Col sm="12">
                    <Form.Group className="mb-3" controlId="place">
                      <Form.Label>活動名稱</Form.Label>
                      <Form.Control
                        type="text"
                        name="title"
                        value={otherFormData.title}
                        onChange={handleInputChange}
                        placeholder="請填寫活動名稱"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="12">
                    <Form.Group className="mb-3" controlId="type">
                      <Form.Label>活動種類</Form.Label>
                      <Form.Select
                        name="type"
                        value={otherFormData.type}
                        onChange={handleInputChange}
                      >
                        <option value="" disabled selected>
                          請選擇
                        </option>
                        <option value="1">演唱會</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col sm="12">
                    <Form.Group className="mb-3" controlId="place">
                      <Form.Label>活動地點</Form.Label>
                      <Form.Control
                        type="text"
                        name="place"
                        value={otherFormData.place}
                        onChange={handleInputChange}
                        placeholder="請填寫地點名稱 EX:台北小巨蛋"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="12">
                    <Form.Group className="mb-3" controlId="city">
                      <Form.Label>活動地址</Form.Label>
                      <Form.Text id="event-address" muted>
                        <div className="mb-2">縣市區域</div>
                      </Form.Text>
                      <Form.Select
                        name="city"
                        value={otherFormData.city}
                        onChange={handleInputChange}
                      >
                        <option disabled selected>
                          請選擇
                        </option>
                        <option value="1">台北市</option>
                        <option value="2">新北市</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col sm="12">
                    <Form.Group className="mb-3" controlId="address">
                      <Form.Text id="address" muted>
                        <div className="mb-2">詳細地址</div>
                      </Form.Text>
                      <Form.Control
                        type="text"
                        name="address"
                        value={otherFormData.address}
                        onChange={handleInputChange}
                        placeholder="請填寫地址"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="12">
                    <Form.Group className="mb-1" controlId="content">
                      <Form.Label>活動說明</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col sm="12">
                    <QuillNoSSRWrapper
                      theme="snow"
                      forwardedRef={editorRef}
                      modules={{
                        toolbar: {
                          container: toolbarContainer,
                          handlers: {
                            image: imageHandler,
                          },
                        },
                      }}
                      value={quillContent}
                      onChange={setQuillContent}
                      placeholder='請填寫'
                    />
                  </Col>
                  <Col sm="12">
                    <Form.Group className="mb-3" controlId="buyTicket">
                      <Form.Label>購票須知</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="buyTicket"
                        value={otherFormData.buyTicket}
                        onChange={handleInputChange}
                        placeholder="請填寫購票須知"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="6">
                    <Form.Group className="mb-3" controlId="startTime">
                      <Form.Label>活動時間</Form.Label>
                      <Form.Text id="startTime" muted>
                        <div className="mb-2">活動開始時間</div>
                      </Form.Text>
                      <Form.Control
                        type="datetime-local"
                        name="startTime"
                        value={otherFormData.startTime}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="6">
                    <Form.Group className="mb-3" controlId="endTime">
                      <Form.Text id="endTime" muted>
                        <div className="mt-4 pt-2 mb-2">活動結束時間</div>
                      </Form.Text>
                      <Form.Control
                        type="datetime-local"
                        name="endTime"
                        value={otherFormData.endTime}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="6">
                    <Form.Group className="mb-3" controlId="startSellTime">
                      <Form.Label>售票時間</Form.Label>
                      <Form.Text id="startSellTime" muted>
                        <div className="mb-2">開始售票時間</div>
                      </Form.Text>
                      <Form.Control
                        type="datetime-local"
                        name="startSellTime"
                        value={otherFormData.startSellTime}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="6">
                    <Form.Group className="mb-3" controlId="endSellTime">
                      <Form.Text id="event-address" muted>
                        <div className="mt-4 pt-2 mb-2">結束售票時間</div>
                      </Form.Text>
                      <Form.Control
                        type="datetime-local"
                        name="endSellTime"
                        value={otherFormData.endSellTime}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <div className="my-5 d-flex justify-content-between">
                    <Button variant="primary" type="submit">
                      提交
                    </Button>
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

export default FormWithQuill
