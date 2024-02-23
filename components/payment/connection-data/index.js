import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'

export default function ConnectionData() {
  const [data, setDate] = useState({
    userName: '',
    userGender: '',
    birthday: '',
    phoneNumber: '',
    email: '',
  })
  function formChange(e) {
    console.log(e.target.name, e.target.value)
    setDate({ ...data, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className="connection-data mb-3 ">
        <div>
          <h5>
            <i className="bi bi-person-fill"></i>聯絡資料
          </h5>
        </div>
        <div className="row bg-bg-gray-secondary  rounded-4 py-3 px-4 gx-0">
          {/* 姓名 */}
          <Form.Group className="mb-3 col-md-3 px-2" controlId="formGroupEmail">
            <Form.Label>姓名</Form.Label>
            <Form.Control
              type="text"
              placeholder="姓名"
              className="bg-bg-dark text-white"
              name="userName"
              onChange={formChange}
            />
          </Form.Group>
          {/* 性別 */}
          <Form.Group className="mb-3 col-md-3 px-2" controlId="formGroupEmail">
            <Form.Label>性別</Form.Label>
            <Form.Select
              aria-label="Default select example"
              className="bg-bg-dark text-white"
              name="userGender"
              onChange={formChange}
            >
              <option value="0">選擇</option>
              <option value="1">男</option>
              <option value="2">女</option>
            </Form.Select>
          </Form.Group>
          {/* 生日 */}
          <div className="col-md-6 px-2">
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>生日</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter email"
                style={{ colorScheme: 'dark' }}
                className="bg-bg-dark text-white"
                name="birthday"
                onChange={formChange}
              />
            </Form.Group>
          </div>
          {/* 手機 */}
          <div className="col-md-6 px-2">
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>手機</Form.Label>
              <Form.Control
                type="text"
                placeholder="09-XXXXXXXX"
                className="bg-bg-dark text-white"
                name="phoneNumber"
                onChange={formChange}
              />
            </Form.Group>
          </div>
          {/* 信箱 */}
          <div className="col-md-6 px-2">
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>信箱</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="bg-bg-dark text-white"
                name="email"
                onChange={formChange}
              />
            </Form.Group>
          </div>
          <Form.Group className="mb-3 px-2" id="formGridCheckbox">
            <Form.Check type="checkbox" label="與會員註冊資料相同" />
          </Form.Group>
        </div>
      </div>
      <style jsx>{`
        input {
          color-scheme: dark;
        }
      `}</style>
    </>
  )
}
