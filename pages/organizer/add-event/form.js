import React, { useState, useRef, useMemo, useEffect } from 'react'
import OrganizerSidebar from '@/components/organizer/organizer-sidebar'
import OrganizerLayout from '@/components/layout/organizer-layout'
import { Row, Col, Form, Button } from 'react-bootstrap'
import OrganizerTopBar from '@/components/organizer/organizer-top-bar'
import dynamic from 'next/dynamic'
import axios from 'axios'
import 'react-quill/dist/quill.core.css'
import 'react-quill/dist/quill.snow.css'
import { motion } from 'framer-motion'

const QuillNoSSRWrapper = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');
    // eslint-disable-next-line react/display-name
    return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />;
  },
  { ssr: false }
);

function OrganizerForm() {
  const editorRef = useRef(null)
  const [banner, setBanner] = useState(null)
  const [previewBanner, setPreviewBanner] = useState(null);
  const [quillContent, setQuillContent] = useState('')
  const [otherFormData, setOtherFormData] = useState({
    merchat_id: '69',
    event_name: '',
    event_type_id: '',
    place: '',
    str: '',
    address: '',
    ticket_ins: '',
    start_date: '',
    end_date: '',
    sell_start_date: '',
    sell_end_date: '',
  })

  const bannerChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setBanner(selectedFile);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewBanner(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  }

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
    console.log('這是banner')
    console.log(banner);


  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 创建 FormData 对象
      const formData = new FormData();

      // 将其他表单数据添加到 FormData 中
      for (const key in otherFormData) {
        formData.append(key, otherFormData[key]);
      }

      // 添加 content 和 banner 到 FormData 中
      formData.append('content', quillContent);
      formData.append('banner', banner);

      console.log('FormData:', formData);

      // 使用 axios 或其他 HTTP 客户端发送数据至服务器
      const response = await axios.post('http://localhost:3005/api/organizer/add-event', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // 设置请求头为 multipart/form-data
        },
      });

      console.log('表单提交成功:', response.data);

      // 处理成功情况，比如显示成功消息或重定向
    } catch (error) {
      console.error('表单提交出错:', error);
    }
  };

  // ---------------------------------------------------------
  // 處理編輯器圖片上傳
  // ---------------------------------------------------------

  useEffect(() => {
    console.log("editorRef.current:", editorRef.current);
    // 其他代码
  }, [editorRef.current]); // 这样可以确保在 editorRef.current 发生变化时执行 useEffect

  const modules = useMemo(() => {
    const imageHandler = () => {
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
          console.log("上傳成功", url)

          if (editorRef.current) {
            editorRef.current.getEditor().insertEmbed(null, 'image', url);
          } else {
            console.error("Editor ref is not available");
          }
        }
      }
      xhr.send(fd)
    }

    return {
      toolbar: {
        container: [
          [{ size: ['small', false, 'large', 'huge'] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ align: [] }],
          [{ indent: '-1' }, { indent: '+1' }],
          [{ direction: 'rtl' }],
          ['blockquote', 'code-block'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ color: [] }, { background: [] }],
          ['image'],
        ],

        handlers: {
          image: imageHandler,
        },
      },
    };
  }, []); // Add any dependencies for modules if needed



  return (
    <>
      <div className="d-flex organizer-container">
        <OrganizerSidebar />
        <div className="w-100 bg-bg-gray organizer-main d-flex flex-column">
          <OrganizerTopBar title="新增活動資訊" />
          <div className="d-flex flex-column align-items-center on-main justify-content-center">
            <h5 className="my-5">活動基本資料</h5>
            <div className="w-1200">
              <Form data-bs-theme="dark" onSubmit={handleSubmit}>
                <Row>
                  <Col sm="12">
                    <Form.Group className="mb-3" controlId="banner">
                      <Form.Label
                        className="banner-upload object-fit flex-column d-flex align-items-center justify-content-center"
                      >
                        {!previewBanner && (
                          <motion.div
                          initial={{ y: 10}}
                          whileHover={{ y: 0}}
                            transition={{ duration: 0.2 }} className='text-center'>
                            <h2>
                              <i className="bi bi-image"></i>
                            </h2>
                            <h6>上傳活動banner（建議比例16:9）</h6>
                            <p>檔案大小限制5MB，兼容格式 jpg/png/webp</p>
                          </motion.div>
                        )}
                        {previewBanner && (
                          <motion.img
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }}
                            src={previewBanner}
                            alt="Preview"
                          />
                        )}
                      </Form.Label>
                      <Form.Control type="file" name="banner" accept="image/*" onChange={bannerChange} hidden />
                    </Form.Group>
                    
                  </Col>
                  <Col sm='12'>
                  <Form.Group className="mb-3" controlId="place">
                      <Form.Label>活動名稱</Form.Label>
                      <Form.Control
                        type="text"
                        name="event_name"
                        value={otherFormData.event_name}
                        onChange={handleInputChange}
                        placeholder="請填寫活動名稱"
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="6">
                    <Form.Group className="mb-3" controlId="type">
                      <Form.Label>活動種類</Form.Label>
                      <Form.Select
                        name="event_type_id"
                        value={otherFormData.event_type_id}
                        onChange={handleInputChange}
                      >
                        <option value="" disabled selected>
                          請選擇
                        </option>
                        <option value="1">演唱會</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col sm="6">
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
                  <Col sm="3">
                    <Form.Group className="mb-3" controlId="city">
                      <Form.Label>縣市</Form.Label>
                      
                      <Form.Select
                        name="str"
                        value={otherFormData.str}
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
                  <Col sm="9">
                    <Form.Group className="mb-3" controlId="address">
                      <Form.Label id="address" muted>
                        <div>詳細地址</div>
                      </Form.Label>
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
                      modules={modules}
                      value={quillContent}
                      onChange={setQuillContent}
                      placeholder='請填寫'
                    />
                  </Col>
                  <Col sm="12">
                    <Form.Group className="mb-3" controlId="buyTicket">
                      <Form.Label className='pb-2'>購票須知</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="ticket_ins"
                        value={otherFormData.ticket_ins}
                        onChange={handleInputChange}
                        placeholder="請填寫購票須知"
                      />
                    </Form.Group>
                  </Col>
                  <h5 className="my-5 text-center">時間資訊</h5>
                  <Col sm="6">
                    <Form.Group className="mb-5" controlId="startTime">
                      
                      <Form.Label id="startTime" muted>
                        <div className="mb-2">活動開始時間</div>
                      </Form.Label>
                      <Form.Control
                        type="datetime-local"
                        name="start_date"
                        value={otherFormData.start_date}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="6">
                    <Form.Group className="mb-5" controlId="endTime">
                      <Form.Label id="endTime" muted>
                        <div className="mb-2">活動結束時間</div>
                      </Form.Label>
                      <Form.Control
                        type="datetime-local"
                        name="end_date"
                        value={otherFormData.end_date}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="6">
                    <Form.Group className="mb-3" controlId="startSellTime">
                      
                      <Form.Label id="startSellTime" muted>
                        <div className="mb-2">開始售票時間</div>
                      </Form.Label>
                      <Form.Control
                        type="datetime-local"
                        name="sell_start_date"
                        value={otherFormData.sell_start_date}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm="6">
                    <Form.Group className="mb-3" controlId="endSellTime">
                      <Form.Label id="event-address" muted>
                        <div className="mb-2">結束售票時間</div>
                      </Form.Label>
                      <Form.Control
                        type="datetime-local"
                        name="sell_end_date"
                        value={otherFormData.sell_end_date}
                        onChange={handleInputChange}
                      />
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
          .w-1200 {
            width: 1000px;
          }
          .banner-upload {
            width: 100%;
            height: 450px;
            border: 1px solid var(--normal-gray-color);
            border-radius: 10px;
            cursor: pointer;
            transition: 300ms;
            color: var(--normal-gray-light-color);
            overflow: hidden;
            &:hover{
              color: white;
            }
          }
          .quill {
            .ql-toolbar {
              background-color: var(--normal-gray-light-color);
              border-radius: 5px 5px 0 0;
            }
            .ql-container {
              height: 600px;
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
          .object-fit {
            img {
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

export default OrganizerForm

OrganizerForm.getLayout = function (page) {
  return <OrganizerLayout>{page}</OrganizerLayout>
}
