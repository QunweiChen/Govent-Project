import express from 'express'
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid'
import sequelize from '#configs/db.js'
const { user_order } = sequelize.models
const router = express.Router()
const upload = multer()

router.post('/', upload.none(), async (req, res) => {
  let body = req.body
  console.log(body)
  const orderId = uuidv4()

  const LinePayData = {
    amount: body.money,
    productName: 'govent',
    confirmUrl: 'http://localhost:3000/payment/confirm',
    orderId: orderId,
    currency: 'TWD',
  }

  //寫進去資料庫的資料
  const dbData = {
    order_id: orderId,
    user_id: '1234',
    event_id: '1234',
    payment_method: body.paymentType,
    total: body.money,
    coupon_discount: body.coupon,
    points_discount: body.discount.point,
    points_rebate: body.redeem,
    order_info: JSON.stringify(body.productData),
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
      body: JSON.stringify(LinePayData),
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
