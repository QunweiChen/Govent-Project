import React from 'react'
import Col from 'react-bootstrap/Col'

export default function TodoAll({
  handleToggleSelectedAll = () => {},
  cartItems,
}) {
  // console.log(cartItems)
  return (
    <>
      {cartItems && cartItems.length > 0 ? (
        <Col className="text-white d-flex align-items-center justify-content-end">
          <label className="me-4 d-flex align-items-center justify-content-end form-check-label">
            <input
              type="checkbox"
              checked={cartItems.every((v) => v.checked)}
              onChange={(e) => {
                // 切換所有的項目
                handleToggleSelectedAll(e.target.checked, 0)
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
