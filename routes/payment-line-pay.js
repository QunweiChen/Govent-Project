import express from 'express'
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid'
import sequelize from '#configs/db.js'
const { user_order } = sequelize.models
const router = express.Router()
const upload = multer()

router.post('/', upload.none(), async (req, res) => {
  // console.log(req.body)
  let body = req.body
  console.log(body)
  const orderId = uuidv4()
  const data = {
    amount: body.money,
    productName: 'govent',
    confirmUrl: 'http://localhost:3000/payment/confirm',
    orderId: orderId,
    currency: 'TWD',
  }
  //測試用的資料
  let json = [
    {
      id: 1,
      merchantId: 1,
      eventTypeId: 2,
      eventName: 'YOASOBI 台北演唱會111',
      startDate: '2024-04-01 8:00:00',
      endDate: '2024-04-01 11:00:00',
      holdingTime: '2023-06-15 14:23:45',
      images: '4-03.jpg',
      str: '台北市',
      vaild: '上架中',
      ticketName: '優惠票',
      price: '3400',
      qty: 4,
      checked: true,
    },
    {
      id: 2,
      merchantId: 1,
      eventTypeId: 2,
      eventName: 'YOASOBI 台北演唱會222',
      startDate: '2024-04-01 8:00:00',
      endDate: '2024-04-01 11:00:00',
      holdingTime: '2022-10-28 09:45:30',
      images: '4-03.jpg',
      str: '台北市',
      vaild: '上架中',
      ticketName: '學生票',
      price: '3200',
      qty: 2,
      checked: true,
    },
  ]
  //寫進去資料庫的資料
  const dbData = {
    order_number: 'test123',
    user_id: '1234',
    event_id: '1234',
    payment_method: 'linepay',
    total: '1234',
    coupon_discount: '1234',
    points_discount: '1234',
    points_rebate: '1234',
    order_info: JSON.stringify(json),
  }
  let payment = await fetch(
    'https://sandbox-api-pay.line.me/v2/payments/request',
    {
      method: 'POST',
      headers: {
        'X-LINE-ChannelId': '2004033741',
        'X-LINE-ChannelSecret': '5e0916dc170d253ee6ea785054bfefa0',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      // console.log(response.info.paymentUrl.web)
      //將資料寫進去資料庫
      user_order.create(dbData)
      return response
    })
    .catch((err) => {
      console.log(err)
      return err
    })
  let url = payment.info.paymentUrl.web
  console.log(url)
  res.send({ status: 'success', url })
})

router.get('/confirm', (req, res) => {
  const transactionId = req.query.transactionId
  console.log(transactionId)
  res.send('1234')
})

export default router
