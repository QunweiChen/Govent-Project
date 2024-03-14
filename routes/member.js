import express from 'express'
import sequelize from '#configs/db.js'
import { QueryTypes, DataTypes } from 'sequelize'
import authenticate from '##/middlewares/authenticate.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
dotenv.config()

const app = express()

const router = express.Router()
app.use(express.json())

const corsOptions = {
  origin: 'http://localhost:3000', // Adjust according to your frontend's origin
  credentials: true, // Allows cookies to be sent across origins
}

app.use(cors(corsOptions))

// Use cookieParser middleware
app.use(cookieParser())

router.get('/', authenticate, async function (req, res) {
  // const { Cart } = sequelize.models
  try {
    // findAll 是回傳所有資料
    const posts = await sequelize.query('SELECT * FROM `member` WHERE id = ?', {
      replacements: [req.user.id], // 使用占位符传递参数
      type: QueryTypes.SELECT,
    })

    // 標準回傳 JSON
    return res.json({ status: 'success', data: { posts } })
  } catch (error) {
    console.error('Error fetching user data:', error)
    res
      .status(500)
      .json({ status: 'error', message: 'Failed to fetch user data.' })
  }
})

// 處理 POST 請求，更新用戶資料
router.post('/update', async (req, res) => {
  const { id, name, gender, birthday, phone, username } = req.body

  try {
    // 使用 Sequelize 或其他方式更新用戶資料
    const updatedUser = await sequelize.query(
      'UPDATE `member` SET name = :name, gender = :gender, birthday = :birthday, phone = :phone, username = :username WHERE id = :id',
      {
        replacements: { id, name, gender, birthday, phone, username },
        type: QueryTypes.UPDATE,
      }
    )

    res.json({ status: 'success', data: { updatedUser } })
  } catch (error) {
    console.error('Error updating user:', error)
    res.status(500).json({ status: 'error', message: 'Failed to update user.' })
  }
})

router.get('/favorites', async function (req, res) {
  try {
    const result = await sequelize.query(
      'SELECT collection.id, collection.collection_user_id, collection.collection_activity_id, event.event_name, event.banner, event.start_date, MIN(event_options.price) AS min_price ' +
        'FROM `collection` ' +
        'JOIN `event` ON collection.collection_activity_id = event.event_id ' +
        'JOIN `event_options` ON collection.collection_activity_id = event_options.event_id ' +
        'WHERE collection.collection_user_id = 1 ' +
        'GROUP BY collection.id, collection.collection_user_id, collection.collection_activity_id, event.event_name, event.banner, event.start_date',
      {
        type: QueryTypes.SELECT,
      }
    )

    return res.json({ status: 'success link favorites', data: { result } })
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).json({ status: 'error', message: 'Failed to fetch data.' })
  }
})

router.get('/cost', authenticate, async function (req, res) {
  try {
    const result = await sequelize.query(
      'SELECT SUM(total) AS total_sum FROM `user_order` WHERE user_id = ?',
      {
        replacements: [req.user.id], // 使用占位符传递参数
        type: QueryTypes.SELECT,
      }
    )

    return res.json({ status: 'success link cost', data: { result } })
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).json({ status: 'error', message: 'Failed to fetch data.' })
  }
})

router.get('/coupon', async function (req, res) {
  try {
    const result = await sequelize.query(
      'SELECT member_coupon.*, coupon.* ' +
        'FROM `member_coupon` ' +
        'JOIN `coupon` ON member_coupon.coupon_id = coupon.id ' +
        'WHERE member_coupon.user_id = 1',
      {
        type: QueryTypes.SELECT,
      }
    )

    return res.json({ status: 'success link coupon', data: { result } })
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).json({ status: 'error', message: 'Failed to fetch data.' })
  }
})

router.post('/add-coupon', async (req, res) => {
  const CouponModel = sequelize.define(
    'Coupon',
    {
      coupon_code: DataTypes.STRING,
      // 只定义需要的字段，可以根据实际需求添加其他字段
    },
    {
      // 指定表格名稱
      tableName: 'coupon',
      timestamps: false,
    }
  )
  const MemberCouponModel = sequelize.define(
    'MemberCoupon',
    {
      coupon_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      // 只定义需要的字段，可以根据实际需求添加其他字段
    },
    {
      // 指定表格名稱
      tableName: 'member_coupon',
      timestamps: false,
    }
  )

  try {
    const coupon = req.body.coupon

    if (!coupon) {
      return res.status(400).json({ status: 'error', message: '請輸入優惠碼' })
    }

    const existingCoupon = await CouponModel.findOne({
      where: {
        coupon_code: coupon,
      },
    })

    if (existingCoupon) {
      // 找到匹配的记录
      const memberId = 1 // 你的用户ID

      const existingMemberCoupon = await MemberCouponModel.findOne({
        where: {
          coupon_id: existingCoupon.id,
          user_id: memberId,
        },
      })

      if (existingMemberCoupon) {
        return res.status(500).json({
          status: 'error',
          message: '已經擁有此優惠卷',
        })
      }

      await MemberCouponModel.create({
        coupon_id: existingCoupon.id,
        user_id: memberId,
      })
      console.log(
        '新增成功, 用戶編號:',
        memberId,
        '新增一筆優惠卷編號:',
        existingCoupon.id
      )
      res.json({ status: 'success', message: '新增優惠卷成功' })
    } else {
      // 未找到匹配的记录
      console.log(
        'Coupon code does not exist. Proceed with adding to member_coupon.'
      )
      res.json.status(500)({
        status: 'error',
        message: '編號輸入錯誤',
      })
      // 进行其他处理
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).json({ status: 'error', message: '編號輸入錯誤' })
  }
})

router.get('/order', async function (req, res) {
  try {
    const result = await sequelize.query(
      'SELECT user_order.*, event.event_name, event.banner ' +
        'FROM `user_order` ' +
        'JOIN `event` ON event.event_id = user_order.event_id ' +
        'WHERE user_order.user_id = 1',
      {
        type: QueryTypes.SELECT,
      }
    )

    return res.json({ status: 'success link order', data: { result } })
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).json({ status: 'error', message: 'Failed to fetch data.' })
  }
})

router.get('/order/:orderId', async (req, res) => {
  const orderId = req.params.orderId

  try {
    const result = await sequelize.query(
      'SELECT user_order.*, event.event_name, event.banner, event.place, event.address, event.content ,event.merchat_id, organizer.name ' +
        'FROM `user_order` ' +
        'JOIN `event` ON event.event_id = user_order.event_id ' +
        'JOIN `organizer` ON organizer.id = event.merchat_id ' +
        'WHERE user_order.order_number = :orderId',
      {
        type: QueryTypes.SELECT,
        replacements: { orderId: orderId },
      }
    )

    // 将订单数据发送给前端
    res.json({ status: 'success', data: { result } })
  } catch (error) {
    console.error('Error fetching order data:', error)
    res
      .status(500)
      .json({ status: 'error', message: 'Failed to fetch order data.' })
  }
})

router.get('/ticket/:orderId', async (req, res) => {
  const orderId = req.params.orderId

  try {
    const result = await sequelize.query(
      'SELECT ticket.*, event_options.option_name, event_options.start_time ' +
        'FROM `ticket` ' +
        'JOIN `event_options` ON ticket.event_option_id = event_options.id ' +
        'WHERE ticket.order_number = :orderId',
      {
        type: QueryTypes.SELECT,
        replacements: { orderId: orderId },
      }
    )

    // 将订单数据发送给前端
    res.json({ status: 'success', data: { result } })
  } catch (error) {
    console.error('Error fetching order data:', error)
    res
      .status(500)
      .json({ status: 'error', message: 'Failed to fetch order data.' })
  }
})

export default router
