import React from 'react'
import styles from './member.module.scss'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function TicketInfoLeft({
  banner = '',
  name = '',
  organizer = '',
  place = '',
  address = '',
  price = '',
  coupon_discount = '',
  points_discount = '',
  points_rebate = ''
}) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="member-bgc sticky"
    >
      <div className="p-3 px-4 bottom-line">
        <Link href="/member/order">
          <h6 className="m-0 text-primary">
            <i className="bi bi-arrow-left pe-2"></i>返回票卷列表
          </h6>
        </Link>
      </div>
      <div className="p-4 bottom-line">
        <div className={`${styles['info-img']}`}>
          <img src={`http://localhost:3005/images/banner/${banner}`} />
        </div>
        <div className="mt-3">
          <div className={`${styles['sm-p']} mb-2 sm-p`}>活動名稱</div>
          <h6 className="m-0">{name}</h6>
        </div>
      </div>
      <div className="p-4 bottom-line">
        <div>
          <div className={`${styles['sm-p']} mb-1 sm-p`}>主辦單位</div>
          <h6>{organizer}</h6>
        </div>
        <div className="pt-2">
          <div className={`${styles['sm-p']} mb-1 sm-p`}>活動地點</div>
          <h6>{place}</h6>
          <p>{address}</p>
        </div>
      </div>
      <div className="p-4">
        <div>
          <div className={`${styles['sm-p']} mb-2 sm-p`}>費用明細</div>
          <div className='d-flex justify-content-between align-items-center mb-2'>
            <p>優惠卷折扣</p>
            <p className="m-0">-$ {coupon_discount}</p>
          </div>
          <div className='d-flex justify-content-between align-items-center mb-2'>
            <p>點數折扣</p>
            <p className="m-0">-$ {points_discount}</p>
          </div>
          <hr/>
          <div className='d-flex justify-content-between align-items-center mb-2'>
            <h6 className='m-0'>訂單金額</h6>
            <h6 className="text-primary m-0">NT$ {price}</h6>
          </div>
          <div className='d-flex justify-content-between align-items-center mb-2'>
            <p>GOVENT 點數回饋</p>
            <p className="m-0 text-secondary-01"><i className="bi bi-coin me-1"></i>{points_rebate}</p>
          </div>
        </div>
      </div>
      <style global jsx>
        {`
        .sticky{
          position: sticky;
          top:88px;
        }
        `}
      </style>
    </motion.div>
  )
}
