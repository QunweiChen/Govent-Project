import express from 'express'
import sequelize from '##/configs/db.js'
import { QueryTypes } from 'sequelize'
import authenticate from '##/middlewares/authenticate.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
dotenv.config()
const corsOptions = {
  origin: 'http://localhost:3000', // Adjust according to your frontend's origin
  credentials: true, // Allows cookies to be sent across origins
}
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))

const router = express.Router()

router.get('/coupon', authenticate, async function (req, res) {
  // findAll是回傳所有資料
  //   const posts = await sequelize.query('SELECT * FROM `coupon`', {
  //     type: QueryTypes.SELECT,
  //   })

  //   // 標準回傳JSON
  //   return res.json({ status: 'success', data: { posts } })
  console.log('sadfsafsafsaf', req.user.id)
  try {
    const result = await sequelize.query(
      'SELECT * FROM `member_coupon` WHERE user_id = :?',
      {
        replacements: [req.user.id], // 使用占位符传递参数
        type: QueryTypes.SELECT,
      }
    )
    console.log(result)
    return res.json({ status: 'success link cost', data: { result } })
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).json({ status: 'error', message: 'Failed to fetch data.' })
  }
})

export default router
