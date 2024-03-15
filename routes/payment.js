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
  try {
    let userID = req.user.id
    console.log(userID)
    const result = await sequelize.query(
      'SELECT * FROM `member_coupon` JOIN `coupon` ON coupon.id = member_coupon.coupon_id WHERE user_id = :userID ',
      {
        replacements: { userID },
        type: QueryTypes.SELECT,
      }
    )
    console.log(result)
    return res.send({ status: 'success link cost', data: { result } })
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).json({ status: 'error', message: 'Failed to fetch data.' })
  }
})

router.put('/delete', (req, res) => {})

export default router
