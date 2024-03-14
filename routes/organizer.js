import express from 'express'
import multer from 'multer'
import path from 'path'
import sequelize from '#configs/db.js'
import { QueryTypes, DataTypes } from 'sequelize'

const router = express.Router()

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
