import express from 'express'
import multer from 'multer'
const router = express.Router()
const upload = multer()
router.post('/', upload.none(), (req, res) => {
  const data = req.body
  console.log(data)
  res.json(data)
})

export default router
