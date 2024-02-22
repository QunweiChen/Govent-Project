import React from 'react'
import styles from './member.module.scss'
import Link from 'next/link'
import Badge from 'react-bootstrap/Badge';

export default function Memberleft() {
  return (
    <div className="member-bgc ">
      <div className="py-2">
        <div className="py-3 d-flex justify-content-center">
          <img
            className={`${styles['avatar']} rounded-circle`}
            src="https://www.shutterstock.com/image-vector/cute-cartoon-rubber-duck-vector-600nw-2276837591.jpg"
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <h6 className="mb-0 me-2">王小鴨</h6>
          <Badge bg="primary">
            黃金會員
          </Badge>
        </div>
        <p className={`text-center sm-p ${styles['sm-p']} mt-2`}>duck.wang@gmail.com</p>
      </div>
      <hr />
      <div className={`py-2 ${styles['member-side-bar']}`}>
        <div className={`${styles['sm-p']}sm-p ps-4 pb-3`}>會員資料</div>
        <h6>
          <Link href="/member/setting">
            <i className="bi bi-person text-primary pe-3"></i>
            <span>帳戶設定</span>
          </Link>
        </h6>
        <h6>
          <Link href="/member/payment">
            <i className="bi bi-credit-card text-primary pe-3"></i>
            <span>管理付款方式</span>
          </Link>
        </h6>
        <h6>
          <Link href="/member/level">
            <i className="bi bi-person-fill-up text-primary pe-3"></i>
            <span>會員等級</span>
          </Link>
        </h6>
      </div>
      <div className={`py-2 ${styles['member-side-bar']}`}>
        <div className={`${styles['sm-p']}sm-p ps-4 pb-3`}>網站相關</div>
        <h6>
          <Link href="/member/order">
            <i className="bi bi-calendar-minus text-primary pe-3"></i>
            <span>訂單管理</span>
          </Link>
        </h6>
        <h6>
          <Link href="/member/coupon">
            <i className="bi bi-ticket-perforated text-primary pe-3"></i>
            <span>優惠卷管理</span>
          </Link>
        </h6>
        <h6>
          <Link href="/member/favorites">
            <i className="bi bi-heart text-primary pe-3"></i>
            <span>我的收藏</span>
          </Link>
        </h6>
      </div>
    </div>
  )
}
