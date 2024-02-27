import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Toast from 'react-bootstrap/Toast'

export default function GoventToast({ value = '', children }) {
  const [show, setShow] = useState(false)

  const toggleShow = () => {
    console.log(value, show)
    if (value === 'creditCard') {
      setShow(false)
      setShow(!show)
    } else if (value === 'LinePay') {
      setShow(true)
      setShow(!show)
    }
  }
  useEffect(() => {
    toggleShow()
  }, [value])

  return (
    <>
      <Row>
        <Col className="mb-2">
          <Toast bg="light" show={show} style={{ width: '100%' }}>
            <Toast.Body md={12}>{children}</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </>
  )
}
