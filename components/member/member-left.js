import React from 'react'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'

export default function Memberleft() {
  return (
    <div className="member-bgc ">
      <div className="py-2">
        <div className="py-3 d-flex justify-content-center">
          <img
            className="avatar rounded-circle"
            src="https://www.shutterstock.com/image-vector/cute-cartoon-rubber-duck-vector-600nw-2276837591.jpg"
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <h6 className="mb-0 me-2">王小鴨</h6>
          <Button variant="primary" size="sm">
            黃金會員
          </Button>
        </div>
        <p className="text-center sm-p mt-2">duck.wang@gmail.com</p>
      </div>
      <hr />
      <div className="py-2 member-side-bar">
        <div className="sm-p ps-4 pb-3">會員資料</div>
        <h6>
          <Link href="/admin">
            <i className="bi bi-person text-primary pe-3"></i>
            <span>帳戶設定</span>
          </Link>
        </h6>
        <h6>
          <Link href="/admin">
            <i className="bi bi-credit-card text-primary pe-3"></i>
            <span>管理付款方式</span>
          </Link>
        </h6>
      </div>
      <div className="py-2 member-side-bar">
        <div className="sm-p ps-4 pb-3">會員資料</div>
        <h6>
          <Link href="/admin">
            <i className="bi bi-calendar-minus text-primary pe-3"></i>
            <span>訂單管理</span>
          </Link>
        </h6>
        <h6>
          <Link href="/admin">
            <i className="bi bi-person-fill-up text-primary pe-3"></i>
            <span>會員等級</span>
          </Link>
        </h6>
        <h6>
          <Link href="/admin">
            <i className="bi bi-ticket-perforated text-primary pe-3"></i>
            <span>優惠卷管理</span>
          </Link>
        </h6>
        <h6>
          <Link href="/admin">
            <i className="bi bi-heart text-primary pe-3"></i>
            <span>我的收藏</span>
          </Link>
        </h6>
      </div>
      <style global jsx>
      {`
          .avatar {
            width: 100px;
            height: 100px;
          }
          .sm-p {
            color: var(--normal-gray-light-color);
          }
          .member-side-bar {
            a {
              color: #fff;
              text-decoration: none;
            }
            h6 {
              padding: 0 20px;
              margin-bottom: 20px;
            }
            h6:hover {
              border-left: 4px solid var(--primary-color);
              transition: 0.1s;
            }
          }
        `}
      </style>
    </div>
  )
}
