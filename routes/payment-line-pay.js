import express from 'express'
import multer from 'multer'
import { v4 as uuidv4 } from 'uuid'
const router = express.Router()
const upload = multer()

router.post('/', upload.none(), async (req, res) => {
  // console.log(req.body)
  let body = req.body
  const orderId = uuidv4()
  const data = {
    amount: body.money,
    productName: 'govent',
    confirmUrl: 'http://localhost:3000/',
    orderId: orderId,
    currency: 'TWD',
  }
  console.log(data)
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
      return response
    })
    .catch((err) => {
      console.log(err)
    })
  let url = payment.info.paymentUrl.web
  console.log(url)
  res.send({ status: 'success', url })
})

export default router
