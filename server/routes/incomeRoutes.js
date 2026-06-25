const express=require('express');

const router=express.Router();

const protect=require('../middlewares/authMiddleware');

const{

addIncome,

getIncome

}=require('../controllers/incomeController');



router.post(

'/',

protect,

addIncome

);



router.get(

'/',

protect,

getIncome

);



module.exports=router;