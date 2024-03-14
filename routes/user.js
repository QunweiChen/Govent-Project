import express from 'express'
import sequelize from '#configs/db.js'
import { QueryTypes } from 'sequelize'
import jwt from 'jsonwebtoken'
import multer from 'multer'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authenticate from '##/middlewares/authenticate.js'
dotenv.config()

// Create an express application
const app = express()

const router = express.Router()
const upload = multer()
app.use(express.json())

const corsOptions = {
  origin: 'http://localhost:3000', // Adjust according to your frontend's origin
  credentials: true, // Allows cookies to be sent across origins
}

app.use(cors(corsOptions))

// Use cookieParser middleware
app.use(cookieParser())

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

  try {
    const user = await sequelize.query(
      'SELECT * FROM member WHERE username = :username AND password = :password',
      {
        replacements: { username, password },
        type: QueryTypes.SELECT,
      }
    )

    if (user.length > 0) {
      const token = jwt.sign(
        {
          id: user[0].id,
          username: user[0].username,
          name: user[0].name,
          gender: user[0].gender,
          birthday: user[0].birthday,
          phone: user[0].phone,
          address: user[0].address,
          avatar: user[0].avatar,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '120m' }
      )

      res.cookie('auth_token', token, {
        httpOnly: true,
        secure: true, // use true in production with HTTPS
        sameSite: 'none',
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
      })

      return res.status(200).json({ message: 'Login successful' })
    } else {
      return res.status(401).json({ message: 'Authentication failed' })
    }
  } catch (error) {
    console.error('Authentication error:', error)
    return res
      .status(500)
      .json({ message: 'An error occurred during authentication' })
  }
})

router.get('/forgetPassword', authenticate, (req, res) => {
  res.json({ message: 'User is authenticated', user: req.user }) // `req.user` is populated by the `authenticate` middleware
})

router.get('/verifyToken', authenticate, (req, res) => {
  // If this point is reached, the `authenticate` middleware has already verified the token
  res.json({ message: 'User is authenticated', user: req.user })
})

router.get('/signout', (req, res) => {
  res.clearCookie('auth_token', {
    httpOnly: true,
    secure: true, // use true in production with HTTPS
    sameSite: 'none',
  })
  res.json({ message: 'User has signed out', user: null })
})

export default router
