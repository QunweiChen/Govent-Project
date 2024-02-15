import React from 'react'
import Form from 'react-bootstrap/Form'

export default function ConnectionData() {
  return (
    <>
      {' '}
      <div className="connection-data">
        <div>
          <h5>
            <i className="bi bi-person-fill"></i>聯絡資料
          </h5>
        </div>
        <form className="row bg-bg-gray-secondary rounded-3 ">
          <div className="col-md-6 d-flex justify-content-between ">
            <div className="col-md-6 pe-2">
              <label htmlFor="validationDefault01" className="form-label">
                姓名
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                required
              />
            </div>
            <div className="col-md-6 ps-2">
              <label htmlFor="validationDefault02" className="form-label">
                性別
              </label>
              <input
                type="text"
                className="form-control"
                id="validationDefault02"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefault03" className="form-label">
              生日
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault03"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefault03" className="form-label">
              手機
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault03"
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefault05" className="form-label">
              信箱
            </label>
            <input
              type="text"
              className="form-control"
              id="validationDefault05"
              required
            />
          </div>
          {/* <div className="d-flex">
          <div>
            <CheckboxInput />
          </div>
          <p>與會員註冊資料相同</p>
        </div> */}
          <Form>
            <div className="mb-3">
              <Form.Check type="checkbox">
                <Form.Check.Input
                  className="custom-checkbox"
                  type="checkbox"
                  isValid
                />
                <Form.Check.Label style={{ color: '#f16e0f' }}>
                  1234
                </Form.Check.Label>
              </Form.Check>
            </div>
          </Form>
        </form>
      </div>
    </>
  )
}
