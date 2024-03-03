import React, { useState } from 'react'
import styles from './member.module.scss'
import Badge from 'react-bootstrap/Badge'
import MemberleftOption from './member-left-option'

export default function Memberleft() {

  return (
    <div
      className="member-bgc"
    >
      <div className="py-2">
        <div className="py-3 d-flex justify-content-center">
          <img
            className={`${styles['avatar']} rounded-circle`}
            src="https://www.shutterstock.com/image-vector/cute-cartoon-rubber-duck-vector-600nw-2276837591.jpg"
          />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <h6 className="mb-0 me-2">王小鴨</h6>
          <Badge bg="primary">黃金會員</Badge>
        </div>
        <p className={`text-center sm-p ${styles['sm-p']} mt-2`}>
          duck.wang@gmail.com
        </p>
      </div>
      <hr />
      <div className={`py-2 member-side-bar`}>
        <div className={`${styles['sm-p']} sm-p ps-4 pb-3`}>會員資料</div>
        <MemberleftOption
          link="/member/setting"
          icon="bi-person"
          text="帳戶設定"
        />
        <MemberleftOption
          link="/member/payment"
          icon="bi-credit-card"
          text="管理付款方式"
        />
        <MemberleftOption
          link="/member/level"
          icon="bi-person-fill-up"
          text="會員等級"
        />
      </div>
      <div className={`py-2 member-side-bar`}>
        <div className={`${styles['sm-p']} sm-p ps-4 pb-3`}>網站相關</div>
        <MemberleftOption
          link="/member/order"
          icon="bi-calendar-minus"
          text="訂單管理"
        />
        <MemberleftOption
          link="/member/coupon"
          icon="bi-ticket-perforated"
          text="優惠卷管理"
        />
        <MemberleftOption
          link="/member/favorites"
          icon="bi-heart"
          text="我的收藏"
        />
      </div>
    </div>
  )
}
