import React from 'react'
import { Modal } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'

export default function AuthCart() {
  return (
    <>
      {/* 判斷登入 */}
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>請先登入會員</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              沒有註冊會員?
              <Link href="/user/signup">
                <span className="text-primary"> 前往註冊</span>
              </Link>
            </p>
          </Modal.Body>

          <Modal.Footer>
            <Link href="/user/signin">
              <Button variant="primary" className="text-white">
                已有會員登入
              </Button>
            </Link>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>
  )
}
