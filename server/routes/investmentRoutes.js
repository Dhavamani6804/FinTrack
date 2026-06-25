const express = require('express');

const router = express.Router();

const protect = require('../middlewares/authMiddleware');


const {

addInvestment,
getInvestments,
deleteInvestment

} = require('../controllers/investmentController');



router.post(

'/',

protect,

addInvestment

);


router.get(

'/',

protect,

getInvestments

);



router.delete(

'/:id',

protect,

deleteInvestment

);



module.exports = router;