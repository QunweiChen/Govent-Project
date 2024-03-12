import React from 'react'
import Col from 'react-bootstrap/Col'

export default function TodoAll({
  merchantItems = {},
  handleToggleSelectedAll = () => {},
}) {
  return (
    <>
      {merchantItems && merchantItems.length > 0 ? (
        <Col className="text-white d-flex align-items-center justify-content-end">
          <label className="me-4 d-flex align-items-center justify-content-end form-check-label">
            <input
              type="checkbox"
              onChange={(e) => {
                // 切換所有的項目
                handleToggleSelectedAll(e.target.checked)
              }}
              className="checkbox-large form-check-input"
            />
            <p className="ms-2">全選票券</p>
          </label>
        </Col>
      ) : (
        ''
      )}
    </>
  )
}
