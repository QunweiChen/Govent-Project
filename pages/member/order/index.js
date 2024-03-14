// import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Memberleft from '@/components/member/member-left-bar'
import Link from 'next/link'
import Image from 'next/image'
import MemberLayout from '@/components/layout/member-layout'
import { motion } from 'framer-motion'

export default function MemberOrder() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetch('http://localhost:3005/api/member/order',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        // 檢查是否有資料並設定到 state 中
        if (data && data.data && data.data.result) {
          console.log('Received data:', data.data.result)
          setOrders(data.data.result)
        } else {
          console.warn('No favorites data received from the server.')
        }
      })
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  return (
    <>
      <div className="container width-1200">
        <Row data-bs-theme="dark">
          <Col sm={3}>
            <Memberleft />
          </Col>
          <Col sm={9}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="member-bgc contain"
            >
              <h4>我的訂單</h4>
              <hr className="my-4" />
              {orders.map((data) => (
                <div key={data.id} className="event mt-2">
                  <div className="ticket-number sm-p">
                    訂單編號 {data.order_number}
                  </div>
                  <div className="p-3 d-flex">
                    <div className="event-img me-3">
                      <img
                        src={`http://localhost:3005/images/banner/${data.banner}`}
                        alt=""
                      />
                    </div>
                    <div className="me-2 content d-flex flex-column justify-content-between">
                      <div>
                      <h6>{data.event_name}</h6>
                      <p>建立時間 {data.create_at.split('T')[0]}</p>
                      </div>
                      <div className="d-flex justify-content-between align-items-end">
                        <h6 className="text-primary-deep m-0">總金額 ${data.total}</h6>
                        <Link href={`order/${data.order_number}`}>
                          <button className="btn btn-primary text-white">
                            查看詳情
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </Col>
        </Row>
      </div>
      <style global jsx>
        {`
          body {
            background-color: #1e1e1e;
            color: #fff;
            padding: 90px 0 0 0;
          }
          .dark-input {
            background-color: #232323;
            color: #fff;
            border: 1px solid #404040;
          }
          .member-bgc {
            background-color: #282828;
            border-radius: 10px;
          }
          .contain {
            padding: 30px 40px;
          }
          .card {
            background-color: var(--bg-gray-light-color);
            border-radius: 10px;
          }
          .ticket-number {
            border-bottom: 1px solid var(--normal-gray-color);
            padding: 10px 20px;
          }
          .event {
            background-color: var(--bg-gray-light-color);
            border-radius: 10px;
            .content{
              flex: 1;
            }
          }
          .event-img {
            width: 160px;
            height: 100px;
            border-radius: 5px;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        `}
      </style>
    </>
  )
}

MemberOrder.getLayout = function (page) {
  return <MemberLayout title="訂單管理">{page}</MemberLayout>
}
