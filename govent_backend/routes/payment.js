import express, { response } from 'express'
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid'
import sequelize from '#configs/db.js'
import { QueryTypes } from 'sequelize'

const { user_order } = sequelize.models
const router = express.Router()
const upload = multer()
//將資料寫入資料庫
function writeData(body, orderId) {
  //寫進去資料庫的資料
  const dbData = {
    order_id: orderId,
    user_id: body.userID,
    payment_method: body.paymentType,
    total: body.money,
    coupon_discount: body.discount.coupon.value,
    points_discount: body.discount.point,
    points_rebate: body.redeem,
    order_info: JSON.stringify(body.productData),
    LinePay_returnData: '',
  }
  //將資料寫進去資料庫
  user_order.create(dbData)
}
//檢查LinePay訂單是否成立
async function LinePayCheck(transactionId, orderID, money) {
  //使用訂單編號拿取資料庫的金額
  let json = { amount: money, currency: 'TWD' }
  let result = await fetch(
    `https://sandbox-api-pay.line.me/v2/payments/${transactionId}/confirm`,
    {
      method: 'POST',
      headers: {
        'X-LINE-ChannelId': '2004033741',
        'X-LINE-ChannelSecret': '5e0916dc170d253ee6ea785054bfefa0',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(json),
    }
  )
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      //訂單成功付款的話就將line pay回傳的資料更新到資料庫
      let json = JSON.stringify(response)
      sequelize.query(
        'UPDATE `user_order` SET line_pay_return_data = :json WHERE order_id = :orderID',
        {
          replacements: { orderID, json },
          type: QueryTypes.UPDATE,
        }
      )
      return response
    })
    .catch((err) => {
      console.log(err)
    })
  return result
}
//檢查信用卡訂單
async function creditCard(orderID, money) {
  return {
    returnCode: '0000',
    returnMessage: 'Success.',
    info: {
      orderId: orderID,
      payInfo: [
        {
          method: 'CREDIT_CARD',
          amount: money,
          maskedCreditCardNumber: '************1111',
        },
      ],
    },
  }
}
//選擇信用卡付款
router.post('/creditCard', upload.none(), async (req, res) => {
  const body = req.body
  const orderId = uuidv4()
  try {
    writeData(body, orderId)
  } catch (err) {
    console.log('資料庫寫入失敗')
    res.send({ status: 'failed' })
  }
  const url = `http://localhost:3000/payment/confirm?orderID=${orderId}&point=${body.newPoint}&couponID=${body.discount.coupon.id}`
  res.send({ status: 'success', url })
})
//選擇LinePay付款
router.post('/line-pay', upload.none(), async (req, res) => {
  const body = req.body
  const orderId = uuidv4()
  console.log(body)
  //傳送給linePay API的資料，必須按照LinePay的規則
  const LinePayData = {
    amount: body.money,
    productName: 'govent',
    confirmUrl: `http://localhost:3000/payment/confirm?orderID=${orderId}&point=${body.newPoint}&couponID=${body.discount.coupon.id}`,
    orderId: orderId,
    currency: 'TWD',
  }
  //fetch到line pay的測試網址
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
      writeData(body, orderId)
      return response
    })
    .catch((err) => {
      console.log(err)
      return err
    })
  //將得到的網址回傳給前端，前端進行轉址
  let url = payment.info.paymentUrl.web
  res.send({ status: 'success', url })
})
//檢查訂單是否成立
router.get('/confirm', async (req, res) => {
  //拿到訂單編號以及LinePay的transactionId
  const orderID = req.query.orderID
  let transactionId, result
  //拿取訂單總金額
  const dbData = await sequelize.query(
    `SELECT * FROM user_order WHERE order_id = '${orderID}'`,
    {
      type: QueryTypes.SELECT,
    }
  )
  let money = dbData[0].total
  //選擇LinePay付款，驗證訂單是否成立
  if (req.query.transactionId) {
    transactionId = req.query.transactionId
    //驗證訂單是否有付款成功
    result = await LinePayCheck(transactionId, orderID, money)
    res.send({ result })
    return
  }
  result = await creditCard(orderID, money)
  res.send({ result })
})

export default router
