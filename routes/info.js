import express from 'express';
const router = express.Router();

import sequelize from '#configs/db.js'
// const { Product } = sequelize.models
import { QueryTypes } from 'sequelize'

router.get('/', async function(req, res){
    const posts = await sequelize.query('SELECT * FROM `event` WHERE id = 1 ',{type: QueryTypes.SELECT,
    })
    return res.json({status:'success',data:[posts]})
    });
    
export default router;

// import express from 'express';
// const router = express.Router();

// // 導入前端的 getDatas 函數
// import { getDatas } from '';

// router.get('/', async (req, res) => {
//   try {
//     const datas = await getDatas([]);
//     res.json(datas);
//   } catch (error) {
//     // 如果出現錯誤，將錯誤訊息發送回客戶端
//     res.status(500).json({ error: error.message });
//   }
// });

// export default router;

