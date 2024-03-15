import express from 'express'
import multer from 'multer'
import path from 'path'
import sequelize from '#configs/db.js'
import { QueryTypes, DataTypes } from 'sequelize'
import authenticate from '##/middlewares/authenticate.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import bodyParser from 'body-parser'
dotenv.config()

const app = express()

app.use(express.json())

const router = express.Router()

const corsOptions = {
  origin: 'http://localhost:3000', // Adjust according to your frontend's origin
  credentials: true, // Allows cookies to be sent across origins
}

app.use(cors(corsOptions))

// Use cookieParser middleware
app.use(cookieParser())

// 处理 quill 编辑器上传的图片
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/contain') // 上传的图片将保存在 public/images 目录下
  },
  filename: (req, file, cb) => {
    cb(null, 'ct_' + Date.now() + path.extname(file.originalname))
  },
})
const upload = multer({ storage })

// 处理 banner 图片上传
const bannerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/banner') // 上传的 banner 图片将保存在 public/images/banner 目录下
  },
  filename: (req, file, cb) => {
    cb(null, 'bn_' + Date.now() + path.extname(file.originalname))
  },
})
const bannerUpload = multer({ storage: bannerStorage })

router.get('/', authenticate, async function (req, res) {
  // const { Cart } = sequelize.models
  try {
    // findAll 是回傳所有資料
    const result = await sequelize.query(
      'SELECT event.*, organizer.user_id ' +
    'FROM `event` ' +
    'JOIN `organizer` ON organizer.id = event.merchat_id ' +
    'WHERE organizer.user_id = ? ',
    {
      replacements: [req.user.id], // 使用占位符传递参数
      type: QueryTypes.SELECT,
    })

    // 標準回傳 JSON
    return res.json({ status: 'success', data: { result } })
  } catch (error) {
    console.error('Error fetching user data:', error)
    res
      .status(500)
      .json({ status: 'error', message: 'Failed to fetch user data.' })
  }
})

// 处理 quill 编辑器上传的图片的路由
router.post('/contain-image', upload.single('upload'), (req, res) => {
  const imageUrl = `http://localhost:3005/images/contain/${req.file.filename}`
  res.status(201).json({ url: imageUrl })
})

// 处理新增活动，包括处理 banner 文件
router.post('/add-event', bannerUpload.single('banner'), async (req, res) => {
  const {
    merchat_id,
    event_name,
    event_type_id,
    place,
    str,
    address,
    ticket_ins,
    start_date,
    end_date,
    sell_start_date,
    sell_end_date,
    content,
  } = req.body

  try {
    // 处理上传的 banner 图片并保存
    const bannerFileName = req.file ? req.file.filename : null

    // 使用 Sequelize 或其他方式新增活动数据
    const randomNumber = Math.floor(10000000 + Math.random() * 90000000)
    await sequelize.query(
      'INSERT INTO `event` (event_id, merchat_id, event_name, event_type_id, place, banner, str, address, ticket_ins, start_date, end_date, sell_start_date, sell_end_date, content, vaild) VALUES (:event_id, :merchat_id, :event_name, :event_type_id, :place, :banner, :str, :address, :ticket_ins, :start_date, :end_date, :sell_start_date, :sell_end_date, :content, 0)',
      {
        replacements: {
          event_id: randomNumber,
          merchat_id,
          event_name,
          event_type_id,
          place,
          banner: bannerFileName,
          str,
          address,
          ticket_ins,
          start_date,
          end_date,
          sell_start_date,
          sell_end_date,
          content,
        },
        type: QueryTypes.INSERT,
      }
    )

    res.json({ status: 'success', data: { event_id: randomNumber } })
  } catch (error) {
    console.error('Error creating event:', error)
    res
      .status(500)
      .json({ status: 'error', message: 'Failed to create event.' })
  }
})

router.post('/contain-image', upload.single('upload'), (req, res) => {
  const imageUrl = `http://localhost:3005/images/contain/${req.file.filename}`
  res.status(201).json({ url: imageUrl })
})

router.post('/add-options', async (req, res) => {
  const EventOption = sequelize.define(
    'EventOption',
    {
      // 模型定義
      event_id: DataTypes.INTEGER,
      option_name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      max_quantity: DataTypes.INTEGER,
      contain: DataTypes.STRING,
      start_time: DataTypes.DATE,
    },
    {
      // 指定表格名稱
      tableName: 'event_options',
      timestamps: false,
    }
  )

  const { data1, data2, data3 } = req.body

  try {
    // 使用 Sequelize 或其他方式新增活动数据
    const optionsToCreate = []

    if (data1) optionsToCreate.push(data1)
    if (data2) optionsToCreate.push(data2)
    if (data3) optionsToCreate.push(data3)

    if (optionsToCreate.length > 0) {
      await EventOption.bulkCreate(optionsToCreate)
      res.json({ status: 'success' })
    } else {
      res.json({ status: 'success', message: 'No valid data to create.' })
    }
  } catch (error) {
    console.error('Error creating event:', error)
    res
      .status(500)
      .json({ status: 'error', message: 'Failed to create option.' })
  }
})

export default router
