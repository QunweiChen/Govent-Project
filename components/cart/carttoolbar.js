import { useState } from 'react'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useCart } from '@/hooks/use-cart'
import { useAuth } from '@/hooks/use-auth'

export default function Carttoolbar() {
  const { NavbaralcTotalItemstotal } = useCart()
  const { auth } = useAuth()
  const [show, setShow] = useState(false)
  // console.log(auth)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      {auth.isAuthenticated ? (
        <div>
          <Link className="nav-link" href="/cart" role="button" title="購物車">
            <div className="d-flex justify-content-center align-items-center">
              <i className="bi bi-cart-fill"></i>
              <div className=" cart-total bg-white text-center rounded-circle ms-2 text-secondary p">
                {NavbaralcTotalItemstotal}
              </div>
            </div>
            <p className="d-none d-md-inline d-lg-none"> 購物車</p>
          </Link>
        </div>
      ) : (
        <div>
          <Link
            className="nav-link"
            href=""
            role="button"
            title="購物車"
            onClick={handleShow}
          >
            <div className="d-flex justify-content-center align-items-center w-100 ">
              <i className="bi bi-cart-fill "></i>
              <div className="cart-total bg-white text-center rounded-circle ms-2 text-secondary p">
                {NavbaralcTotalItemstotal}
              </div>
            </div>
            <p className="d-none d-md-inline d-lg-none"> 購物車</p>
          </Link>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className="text-black">
              <Modal.Title>請先登入會員才可使用購物車</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-black">
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
          </Modal>
        </div>
      )}
      <style global jsx>
        {`
          .cart-total {
            padding: 0px;
          }
        `}
      </style>
    </>
  )
}
