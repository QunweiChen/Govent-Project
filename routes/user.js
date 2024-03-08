import express from 'express'
import sequelize from '#configs/db.js'
import { QueryTypes } from 'sequelize'
import jwt from 'jsonwebtoken'
import multer from 'multer'
import dotenv from 'dotenv'
dotenv.config()

const router = express.Router()
const upload = multer()

//註冊路由
router.post('/signup', async function (req, res, next) {
  const {
    username,
    password,
    name,
    gender,
    birthday,
    cellphone,
    county,
    township,
    address,
  } = req.body
  const userData = req.body
  console.log(userData)

  try {
    //檢查 email 是否被註冊過
    const emailExists = await sequelize.query(
      'SELECT * FROM member WHERE username = :username',
      {
        replacements: { username: username },
        type: QueryTypes.SELECT,
      }
    )

    if (emailExists.length > 0) {
      return res
        .status(409)
        .json({ status: 'error', message: 'Email 已經被註冊' })
    }

    //調整地址跟時間到資料庫想要的格式
    const fullAddress = `${county}${township}${address}`
    const createTime = new Date().toISOString().slice(0, 19).replace('T', ' ')

    //新增註冊者資料
    const newUser = await sequelize.query(
      'INSERT INTO member (username, password, name, gender, birthday, phone, address, create_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      {
        replacements: [
          username,
          password,
          name,
          gender,
          birthday,
          cellphone,
          fullAddress,
          createTime,
        ],
        type: QueryTypes.INSERT,
      }
    )

    return res
      .status(201)
      .json({ status: 'success', message: '已成功註冊', data: newUser })
  } catch (error) {
    console.log('註冊失敗', error)
    return res.status(500).json({ status: 'error', message: '註冊發生錯誤' })
  }
})

//登入路由
router.post('/signin', upload.none(), async (req, res) => {
  const { username, password } = req.body

  //確認 username 跟 password 是否存在於資料庫
  try {
    const user = await sequelize.query(
      'SELECT * FROM member WHERE username = :username AND password = :password',
      {
        replacements: { username, password },
        type: QueryTypes.SELECT,
      }
    )

    if (user.length > 0) {
      const secretKey = process.env.JWT_SECRET_KEY
      if (!secretKey) {
        throw new Error('JWT_SECRET_KEY is not defined')
      }
      const token = jwt.sign(
        { id: user[0].id, username: user[0].username },
        secretKey,
        { expiresIn: '60m' }
      )
      res.status(200).json({ status: 'success', message: '登入成功', token })
    } else {
      res.status(400).json({ status: 'error', message: '帳號或密碼錯誤' })
    }
  } catch (error) {
    console.error('登入失敗', error)
    res.status(500).json({
      status: 'error',
      message: '登入過程中發生錯誤',
      error: error.message,
    })
  }

  function checkToken(req, res, next) {
    console.log(req.get('authorization'))
    let token = req.get('authorization')
    let secretKey = process.env.JWT_SECRET_KEY

    if (token) {
      jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
          return res
            .status(401)
            .json({ status: 'error', message: '登入驗證失效' })
        } else {
          req.decoded = decoded
          next()
        }
      })
    } else {
      return res
        .status(401)
        .json({ status: 'error', message: '無登入驗證資料，請重新登入' })
    }
  }
})

//檢查路由
// router.post()

export default router
