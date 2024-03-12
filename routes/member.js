import express from 'express'
const router = express.Router()
import sequelize from '#configs/db.js'
import { QueryTypes } from 'sequelize'
import authenticate from '##/middlewares/authenticate.js'
// const { Cart } = sequelize.models

router.get('/', authenticate, async function (req, res) {
  //Angus 加入的
  res.json({ message: "Access granted to member's area.", user: req.user })

  try {
    // findAll 是回傳所有資料
    const posts = await sequelize.query('SELECT * FROM `member` WHERE id = 1', {
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

export default router
