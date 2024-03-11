import express from 'express'
const router = express.Router()

import sequelize from '#configs/db.js'
import { QueryTypes } from 'sequelize'
// const { Cart } = sequelize.models

router.get('/', async function (req, res) {
  // findAll是回傳所有資料
  // const posts = await sequelize.query('SELECT * FROM `event`', {
  //   type: QueryTypes.SELECT,
  // })

  // const posts = await sequelize.query(
  //   `
  //   SELECT *
  //   FROM \`event\`
  //   INNER JOIN \`activity_category\` ON event.event_type_id = activity_category.id
  //   LEFT JOIN \`event_type\` ON event.id = event_type.event_id`,
  //   {
  //     type: QueryTypes.SELECT,
  //   }
  // )

  const posts = await sequelize.query(
    `
    SELECT event.*, 
    activity_category.id AS category_id,
    activity_category.activity_name AS category_name,
    event_type.event_id AS event_type_id,
    event_type.price 
    FROM \`event\` 
    INNER JOIN \`activity_category\` 
    ON event.event_type_id = activity_category.id 
    LEFT JOIN \`event_type\` ON event.id = event_type.event_id 
    GROUP BY event.id;`,
    {
      type: QueryTypes.SELECT,
    }
  )

  // 標準回傳JSON
  return res.json({ status: 'success', data: { posts } })
  // const page = Number(req.query.page) || 1
  // const perpage = Number(req.query.perpage) || 10
  // const offset = (page - 1) * perpage
  // const limit = perpage
})

export default router
