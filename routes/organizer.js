import express from 'express';
import multer from 'multer'; // 用于处理文件上传
import path from 'path';

const router = express.Router();

// 配置 multer 中间件
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/contain'); // 上传的图片将保存在 public/images/contain 目录下
  },
  filename: (req, file, cb) => {
    // 使用当前时间戳作为文件名，确保文件名的唯一性
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// 处理图片上传的路由
router.post('/contain-image', upload.single('upload'), (req, res) => {
  // 上传成功后返回图片的访问 URL，URL 格式应该是可以在客户端访问到图片的完整 URL
  const imageUrl = `http://localhost:3005/images/contain/${req.file.filename}`; // 假设服务器运行在本地的端口 3005
  res.status(201).json({ url: imageUrl });
});

export default router;