import express from 'express'
import transporter from '#configs/mail.js'
import 'dotenv/config.js'

const router = express.Router()

/* 寄送email的路由 */
router.post('/send', function (req, res, next) {
  // console.log(req.body)
  // email內容
  const mailOptions = {
    from: `<${process.env.SMTP_TO_EMAIL}>`,
    to: 'goventmfee44@gmail.com',
    subject: 'Govent訂單完成',
    text: `你好， \r\n通知你有關第一封郵件的事。\r\n\r\n敬上\r\n開發團隊`,
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
      <h1>這是你的訂單編號</h1>
      <p>${req.body.orderID}</p>
    </body>
    </html>`,
  }
  // 寄送
  transporter.sendMail(mailOptions, (err, response) => {
    if (err) {
      // 失敗處理
      return res.status(400).json({ status: 'error', message: err })
    } else {
      // 成功回覆的json
      return res.json({ status: 'success', data: response })
    }
  })
})

export default router
