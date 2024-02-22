import React from 'react'
import styles from './member.module.scss'
import Link from 'next/link'

export default function TicketInfoLeft() {
  return (
    <div className="member-bgc ">
      <div className="p-3 px-4 bottom-line">
        <Link href="/member/order">
          <h6 className="m-0 text-primary">
            <i className="bi bi-arrow-left pe-2"></i>返回票卷列表
          </h6></Link>
      </div>
      <div className="p-4 bottom-line">
        <div className={`${styles['info-img']}`}>
          <img src="https://www.shutterstock.com/image-vector/cute-cartoon-rubber-duck-vector-600nw-2276837591.jpg" />
        </div>
        <div className="mt-3">
          <div className={`${styles['sm-p']} mb-2`}>活動名稱</div>
          <h6 className="m-0">
            YOASOBI演唱會2024台北站｜YOASOBI ASIA TOUR 2023-2024 Solo Concert in
            Taipei
          </h6>
        </div>
      </div>
      <div className="p-4 bottom-line">
        <div>
          <div className="sm-p mb-1">使用日期</div>
          <h6>2024/01/22</h6>
        </div>
        <div className='pt-2'>
          <div className={`${styles['sm-p']} mb-1`}>活動地點</div>
          <h6>Zepp New Taipei</h6>
          <p>新北市新莊區新北大道3號8樓</p>
        </div>
      </div>
      <div className="p-4">
        <div>
          <div className={`${styles['sm-p']} mb-1`}>訂單金額</div>
          <h6 className='text-primary'>NT$ 4600</h6>
        </div>
      </div>
    </div>
  )
}