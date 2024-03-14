// import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { Row, Col, Image, Button } from 'react-bootstrap'
import TicketInfoLeft from '@/components/member/m-order-left-bar'
import MemberLayout from '@/components/layout/member-layout'
import { motion } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import Link from 'next/link';


export default function MemberOrderInfo() {
  const [tabs, setTabs] = useState(1)
  const [order, setOrder] = useState([])
  const [tickets, setTickets] = useState([])

  const router = useRouter()
  const { oid } = router.query
  const [oidLoaded, setOidLoaded] = useState(false)

  const [checkUser, setCheckUser] = useState(true)
  const [checkOrderNumber, setCheckOrderNumber] = useState(true)

  const HtmlRenderer = ({ htmlContent }) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  };

  useEffect(() => {
    if (oid) {
      setOidLoaded(true);

      fetch(`http://localhost:3005/api/member/order/${oid}`,{
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
            setOrder(data.data.result[0])
          } else if(data.message == 403){
            console.warn('非用戶訂單')
            setCheckUser(false)
          } else {
            console.warn('讀取失敗!')
            setCheckOrderNumber(false)
          }
        })
        .catch((error) => {
          setCheckOrderNumber(false)
          console.log('讀取失敗:')}
          )
    }
  }, [oid])

  useEffect(() => {
    fetch(`http://localhost:3005/api/member/ticket/${oid}`)
      .then((response) => response.json())
      .then((data) => {
        // 檢查是否有資料並設定到 state 中
        if (data && data.data && data.data.result) {
          console.log('Received data:', data.data.result)
          setTickets(data.data.result)
        } else {
          console.warn('No order data received from the server.')
        }
      })
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  if (!oidLoaded) {
    return <div>Loading...</div>;
  } else

    return (
      <>
      {!checkUser && (
        <div className='text-center warming'>
          <Image src="/NothingFoundHere.png" alt="Nothing Found Here" width='400px'/>
          <h3 className='mb-4'>此非您的訂單</h3>
          <Button><Link href="/member/order" className='text-black'>返回訂單頁</Link></Button>
        </div>
      )}
      {!checkOrderNumber && (
        <div className='text-center warming'>
          <Image src="/NothingFoundHere.png" alt="Nothing Found Here" width='400px'/>
          <h3 className='mb-4'>訂單不存在</h3>
          <Button><Link href="/member/order" className='text-black'>返回訂單頁</Link></Button>
        </div>
      )}
        {checkUser && checkOrderNumber && (
          <div className="container width-1200">
          <Row data-bs-theme="dark">
            <Col sm={3}>
              <TicketInfoLeft
                banner={order.banner}
                name={order.event_name}
                organizer={order.name}
                place={order.place}
                address={order.address}
                price={order.total}
                coupon_discount={order.coupon_discount}
                points_discount={order.points_discount}
                points_rebate={order.points_rebate} />
            </Col>
            <Col sm={9}>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="member-bgc">
                <div className="p-3 px-4 bottom-line">
                  <h6 className="m-0 text-primary-light">訂購詳情</h6>
                </div>
                <div className="p-3 px-4">
                  <p className="pb-2">
                    <i className="bi bi-person-fill pe-2"></i>訂單編號：{order.order_number}
                  </p>
                  <p>
                    <i className="bi bi-person-fill pe-2"></i>訂購日期：{order && order.create_at ? order.create_at.split('T')[0] : ''}
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="member-bgc mt-3">
                <div className="px-2 bottom-line d-flex">
                  <div
                    role="button"
                    tabIndex={0}
                    className={`p-3 ${tabs === 1 ? 'text-primary' : ''}`}
                    onClick={() => {
                      setTabs(1)
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setTabs(1)
                      }
                    }}
                  >
                    <h6 className="m-0">活動資訊</h6>
                  </div>
                  <div
                    role="button"
                    tabIndex={0}
                    className={`p-3 ${tabs === 2 ? 'text-primary' : ''}`}
                    onClick={() => {
                      setTabs(2)
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setTabs(2)
                      }
                    }}
                  >
                    <h6 className="m-0">票卷資訊</h6>
                  </div>
                </div>
                <div className="p-4">
                  {tabs === 1 && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="order-content"
                    >
                      <HtmlRenderer htmlContent={order.content} />
                    </motion.div>
                  )}
                  {tabs === 2 && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      {tickets.map((ticket) => (
                        <div key={ticket.id} className="event mb-3">
                          <div className="sm-p px-3 py-2">
                            票卷編號 {ticket.ticket_code}
                          </div>
                          <hr className="my-0" />
                          <div className="p-3 d-flex">
                            <div className="me-4">
                              <QRCodeSVG value={ticket.ticket_code} bgColor='#00000000' fgColor='#ffffff'/>
                            </div>
                            <div className="d-flex flex-column justify-content-between">
                              <div>
                                <h6>
                                  {order.event_name}
                                </h6>
                                <h4 className='text-primary-light'>{ticket.option_name}</h4>
                              </div>
                              <div className="d-flex flex-column justify-content-between">

                                <div className='text-normal-gray-light'>
                                  <p className='pb-1'>{ticket ? ticket.start_time.split('T')[0] : ''}／{ticket ? ticket.start_time.split('T')[1].substring(0, 5) : ''}</p>
                                  <p>{order.place}｜{order.address}</p>
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </Col>
          </Row>
        </div>
        )}
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
            border: 1px solid var(--normal-gray-color);
            border-radius: 10px;
            .flex-1{
              flex: 1;
            }
          }
          .event-img {
            width: 150px;
            height: 100%;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .order-content{
            img{
              width: 100%;

            }
          }
        `}
        </style>
      </>
    )
}

MemberOrderInfo.getLayout = function (page) {
  return <MemberLayout>{page}</MemberLayout>
}
