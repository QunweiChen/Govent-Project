import express from 'express'
import sequelize from '##/configs/db.js'
import { QueryTypes } from 'sequelize'

const router = express.Router()

router.post('/', (req, res) => {
  console.log(req.body)
  res.send({ message: 'success' })
})

router.get('/data', async (req, res) => {
  let orderID = req.query.orderID
  let result = await sequelize.query(
    `SELECT order_info FROM user_order WHERE order_id = :orderID`,
    { replacements: { orderID }, type: QueryTypes.SELECT }
  )
  console.log(result)
  res.send({ message: 'success', data: result })
})

export default router
