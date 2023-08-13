const express=require('express')
const router=express.Router()

const {
    Readall,Create,Deleteall,Send,Update
}=require('../controllers/responses')

router.route('/read').get(Readall)
router.route('/create').post(Create)
router.route('/delete').post(Deleteall)
router.route('/send').post(Send)
router.route('/update/:id').put(Update)

module.exports=router