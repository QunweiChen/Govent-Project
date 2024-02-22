import React from 'react'
import Form from 'react-bootstrap/Form'

export default function ConnectionData() {
  return (
    <>
      <div className="connection-data mb-3">
        <div>
          <h5>
            <i className="bi bi-person-fill"></i>聯絡資料
          </h5>
        </div>
        <Form className="row bg-bg-gray-secondary  rounded-4 py-3 px-4">
          {/* 姓名與性別 */}
          <div className="col-md-6 d-flex justify-content-between ">
            <Form.Group
              className="mb-3 col-md-6 pe-2"
              controlId="formGroupEmail"
            >
              <Form.Label>姓名</Form.Label>
              <Form.Control
                type="text"
                placeholder="姓名"
                className="bg-bg-dark text-white"
                style={{ color: 'blue' }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 col-md-6 ps-2"
              controlId="formGroupEmail"
            >
              <Form.Label>性別</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="bg-bg-dark text-white"
              >
                <option>選擇</option>
                <option value="1">男</option>
                <option value="2">女</option>
              </Form.Select>
            </Form.Group>
          </div>
          {/* 生日 */}
          <div className="col-md-6">
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>生日</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter email"
                className="bg-bg-dark text-white"
              />
            </Form.Group>
          </div>
          {/* 手機 */}
          <div className="col-md-6">
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>手機</Form.Label>
              <Form.Control
                type="text"
                placeholder="09-XXXXXXXX"
                className="bg-bg-dark text-white"
              />
            </Form.Group>
          </div>
          {/* 信箱 */}
          <div className="col-md-6">
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>信箱</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="bg-bg-dark text-white"
              />
            </Form.Group>
          </div>
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="與會員註冊資料相同" />
          </Form.Group>
        </Form>
      </div>
      <style>{`
      Form.Control { color: crimson;}`}</style>
    </>
  )
}
