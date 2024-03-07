import express from 'express'
const router = express.Router()

import sequelize from '#configs/db.js'
import { QueryTypes } from 'sequelize'
// const { Cart } = sequelize.models

router.get('/', async function (req, res) {
  // findAll是回傳所有資料
  const posts = await sequelize.query('SELECT * FROM `event`', {
    type: QueryTypes.SELECT,
  })

  // 標準回傳JSON
  return res.json({ status: 'success', data: { posts } })
  // const page = Number(req.query.page) || 1
  // const perpage = Number(req.query.perpage) || 10
  // const offset = (page - 1) * perpage
  // const limit = perpage
})

export default router
