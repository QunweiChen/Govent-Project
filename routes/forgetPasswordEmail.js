import express from 'express'
import transporter from '#configs/mail.js'
import 'dotenv/config.js'
import sequelize from '#configs/db.js'
import { QueryTypes } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router()

//寄送email的路由
router.post('/forgetPasswordEmail', function (req, res, next) {
  const { email } = req.body

  // 檢查是否有此 email
  const user = sequelize.query(
    'SELECT * FROM member WHERE username = :username',
    {
      replacements: { username: email },
      type: QueryTypes.SELECT,
    }
  )
  if (user.length === 0) {
    return res
      .status(404)
      .json({ status: 'error', message: '此 email 尚未註冊成為會員' })
  }

  // 設定信件驗證碼格式
  const verificationCode = Math.floor(100000 + Math.random() * 900000)

  //將驗證碼存入資料庫
  const insertCode = sequelize.query(
    'INSERT INTO ResetPassword (username, resetPasswordCode) VALUES (?, ?)',
    {
      replacements: { email, verificationCode },
      type: QueryTypes.INSERT,
    }
  )

  const mailOptions = {
    from: `<${process.env.SMTP_TO_EMAIL}>`,
    to: email,
    subject: 'Govent 忘記密碼驗證信',
    text: `你的重設密碼驗證碼是 ${verificationCode}`,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" />
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
      <head>
        <title></title>
        <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta name="x-apple-disable-message-reformatting" />
        <!--[if !mso]><!-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!--<![endif]--><!--[if gte mso 9]>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
        <style> * { text-size-adjust: 100%; -ms-text-size-adjust: 100%; -moz-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; } html { height: 100%; width: 100%; } body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; mso-line-height-rule: exactly; } div[style*="margin: 16px 0"] { margin: 0 !important; } table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; } img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; } </style>
        <!--[if gte mso 9]>
        <style type="text/css"> li { text-indent: -1em; } table td { border-collapse: collapse; } </style>
        <![endif]-->
        <style> @media only screen and (max-width:600px) { .cBlock--spacingLR { padding-left: 16px !important; padding-right: 16px !important; } .img_block { width: 100% !important; } } </style>
      </head>
      <body class="body cLayout--bgColor" style="background-color:#121212; margin:0;width:100%;">
        <table class="layout__wrapper" align="center" width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr class="layout__row">
            <td class="layout__column cLayout--bgColor" align="center" width="100%" style="padding-left:10px;padding-right:10px;padding-top:40px;padding-bottom:40px" bgcolor="#ffffff">
              <!--[if !mso]><!---->
              <div style="margin:0 auto;width:100%;max-width:640px;">
                <!-- <![endif]--><!--[if mso | IE]>
                <table role="presentation" border="0" cellspacing="0" cellpadding="0" align="center" width="640" style="margin:0 auto;width:100%;max-width:640px;">
                  <tr>
                    <td>
                      <![endif]-->
                      <!-- Block: Start Text -->
                      <table class="block-inner" align="center" width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td class="block-inner__content cBlock--spacingLR " align="left" valign="top" width="100%" bgcolor="#121212" style="padding-left:32px;padding-right:32px;padding-top:48px;padding-bottom:16px">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td align="left" >
                                  <h1 style="color:#ffffff;font-size:18px;font-weight:bold;font-family:'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif;padding:0;margin:0;line-height:1.4">
                                    Govent 重設密碼驗證信
                                  </h1>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!-- Block: End Text -->
                      <!-- Block: Start Text -->
                      <table class="block-inner" align="center" width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td class="block-inner__content cBlock--spacingLR " align="left" valign="top" width="100%" bgcolor="#121212" style="padding-left:32px;padding-right:32px;padding-top:16px;padding-bottom:16px">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td align="center" >
                                  <h3 style="color:#ffffff;font-size:18px;font-weight:bold;font-family:'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif;padding:0;margin:0;line-height:1.4">
                                  你的重設密碼驗證碼是 ${verificationCode}
                                  </h3>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!-- Block: End Text -->
                      <!-- Block: Start Button -->
                      <table class="block-inner" align="center" width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td class="block-inner__content cBlock--spacingLR " align="left" valign="top" width="100%" bgcolor="#121212" style="padding-left:32px;padding-right:32px;padding-top:0px;padding-bottom:48px">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tbody>
                                <tr>
                                  <td align="center">
                                    <table border="0" cellspacing="0" cellpadding="0">
                                      <tbody>
                                        <tr>
                                          <!--[if mso | IE]>
                                          <td align="center" bgcolor="#005da0" style="color:#ffffff;padding-top:7px;padding-bottom:7px;padding-left:60px;padding-right:60px">
                                            <![endif]--><!--[if !mso]><!---->
                                          <td align="center" bgcolor="#F16E0F" style="border-radius:4px">
                                            <!-- <![endif]--><a class="dnd-button" href="http://localhost:3000/" target="_blank" style="color:#ffffff;border-radius:4px;display:inline-block;text-decoration:none;font-size:16px;font-weight:bold;letter-spacing:1px;padding-top:7px;padding-bottom:7px;padding-left:60px;padding-right:60px"><span class="a__text" style="color:#ffffff;text-decoration:none;font-family:'PingFang TC','微軟正黑體','Microsoft JhengHei','Helvetica Neue',Helvetica,Arial,sans-serif">逛商品</span></a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!-- Block: End Button -->
                      <!--[if mso | IE]>
                    </td>
                  </tr>
                </table>
                <![endif]--><!--[if !mso]><!---->
              </div>
              <!-- <![endif]-->
            </td>
          </tr>
        </table>
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
