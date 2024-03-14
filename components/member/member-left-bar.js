import React, { useState, useEffect } from 'react'
import styles from './member.module.scss'
import Badge from 'react-bootstrap/Badge'
import MemberleftOption from './member-left-option'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { motion } from 'framer-motion'


export default function Memberleft() {
  const [userData, setUserData] = useState([])
  const [userCostTotal, setUserCostTotal] = useState(0)

  useEffect(() => {
    fetch('http://localhost:3005/api/member', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        // 檢查是否有資料並設定到 state 中
        if (
          data &&
          data.data &&
          data.data.posts &&
          data.data.posts.length > 0
        ) {
          setUserData(data.data.posts[0])
        } else {
          console.warn('No data received from the server.')
        }
      })
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3005/api/member/cost', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        // 檢查是否有資料並設定到 state 中
        if (
          data &&
          data.data &&
          data.data.result
        ) {
          setUserCostTotal(data.data.result[0].total_sum)
        } else {
          console.warn('No data received from the server.')
        }
      })
      .catch((error) => console.error('Error fetching data:', error))
  }, [])


  return (
    <div className="member-bgc">
      <motion.div 
      initial={{ y: 5, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="py-2">
        <div className="py-3 d-flex justify-content-center">
          <img className={`${styles['avatar']} rounded-circle`} src={`http://localhost:3005/avatar/${userData.avatar}`} />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <h6 className="mb-0 me-2">{userData.name || <Skeleton baseColor='#00000000'/>}</h6>
          {userCostTotal <= 10000 && (<Badge bg="normal-gray-light" className='text-dark'>銀級會員</Badge>)}
          {10000 < userCostTotal && userCostTotal <= 20000 && (<Badge bg="secondary-01" className='text-dark'>黃金會員</Badge>)}
          {20000 < userCostTotal && (<Badge bg="info" className='text-dark'>鑽石會員</Badge>)}
        </div>
        <p className={`text-center sm-p ${styles['sm-p']} mt-2`}>{userData.username || <Skeleton baseColor='#00000000'/>}</p>
      </motion.div>
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
      <style golbal jsx>
        {`
          .member-side-bar {
            overflow: hidden;
          }
        `}
      </style>
    </div>
  )
}
