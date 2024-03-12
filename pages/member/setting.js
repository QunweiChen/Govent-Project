// import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import Memberleft from '@/components/member/member-left-bar'
import MemberLayout from '@/components/layout/member-layout'
import { motion } from 'framer-motion'

export default function MemberSetting() {
  // const router = useRouter()
  // // Make sure we're in the browser
  // if (typeof window !== 'undefined') {
  //   router.push('/member/login')
  // }

  const [userData, setUserData] = useState([])
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    gender: '',
    birthday: '',
    phone: '',
    username: '',
  })

  //---------------------------------------------------------------------------------
  // 處理後端api
  //---------------------------------------------------------------------------------

  useEffect(() => {
    fetch('http://localhost:3005/api/member')
      .then((response) => response.json())
      .then((data) => {
        // 檢查是否有資料並設定到 state 中
        if (
          data &&
          data.data &&
          data.data.posts &&
          data.data.posts.length > 0
        ) {
          setUserData(data.data.posts[0])
        } else {
          console.warn('No data received from the server.')
        }
      })
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      id: userData.id,
      name: userData.name,
      gender: userData.gender,
      birthday: userData.birthday,
      phone: userData.phone,
      username: userData.username,
    }))
  }, [userData])

  //---------------------------------------------------------------------------------
  // 處理值改變
  //---------------------------------------------------------------------------------

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // 在這裡處理表單提交的邏輯
    try {
      const response = await fetch('http://localhost:3005/api/member/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log('User updated successfully!')
      } else {
        console.error('Failed to update user.')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const setLocalStorage = () => {
    const userObject = {
      name: '我是localname',
      level: '我是local會員',
      email: '我是local email',
      avatar: 'http://localhost:3005/images/contain/ct_1709886753648.jpg'
    }

    // 将对象转换为 JSON 字符串并存储在 localStorage 中
    localStorage.setItem('user', JSON.stringify(userObject))
}

  return (
    <>
      <div className="container width-1200">
        <Row data-bs-theme="dark">
          <Col sm={3}>
            <Memberleft />
          </Col>
          <Col sm={9}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="member-bgc contain"
            >
              <Form onSubmit={handleSubmit}>
                <h4>帳戶設定</h4>
                <Row className="mt-4">
                  <Col sm={3}>
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label>姓名</Form.Label>
                      <Form.Control
                        className="dark-input"
                        type="text"
                        name="name"
                        defaultValue={formData.name}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={3}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>性別</Form.Label>
                      <Form.Select
                        className="dark-input"
                        name="gender"
                        onChange={handleChange}
                        defaultValue={formData.gender}
                      >
                        <option value="1">男</option>
                        <option value="0">女</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>生日</Form.Label>
                      <Form.Control
                        className="dark-input"
                        type="date"
                        name="birthday"
                        onChange={handleChange}
                        defaultValue={formData.birthday}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>手機</Form.Label>
                      <Form.Control
                        className="dark-input"
                        type="text"
                        name="phone"
                        onChange={handleChange}
                        defaultValue={formData.phone}
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={6}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>信箱</Form.Label>
                      <Form.Control
                        className="dark-input"
                        type="email"
                        name="username"
                        onChange={handleChange}
                        defaultValue={formData.username}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="d-flex justify-content-end mt-3">
                  <button className="btn btn-primary" type="sumbit">
                    儲存
                  </button>
                </div>
              </Form>
              <button className="btn btn-primary" onClick={setLocalStorage}>
                拿localstorge
              </button>
            </motion.div>
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
        `}
      </style>
    </>
  )
}

MemberSetting.getLayout = function (page) {
  return <MemberLayout title="帳戶設定">{page}</MemberLayout>
}
