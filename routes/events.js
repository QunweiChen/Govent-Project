import express from 'express'
const router = express.Router()

import sequelize from '#configs/db.js'
import { QueryTypes } from 'sequelize'
// const { Cart } = sequelize.models

//傳入所有活動資料到list
router.get('/', async function (req, res) {
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

//傳入單筆資料至pid詳細頁
router.get('/:id', async (req, res) => {
  const id = req.params.id
  console.log('123', id)

  const posts = await sequelize.query(
    `
    SELECT event.*,
    activity_category.*,
    event_type.*,
    activity_category.id AS category_id,
    activity_category.activity_name AS category_name,
    event_type.event_id AS event_type_id,
    event_type.price
    FROM \`event\`
    INNER JOIN \`activity_category\`
    ON event.event_type_id = activity_category.id
    LEFT JOIN \`event_type\` ON event.id = event_type.event_id
    WHERE event.id = :eventId
    GROUP BY event.id;
    `,
    {
      replacements: { eventId: id },
      type: QueryTypes.SELECT,
    }
  )

  // 標準回傳JSON
  return res.json({ status: 'success', data: { posts } })
})
export default router
