const express=require('express')
const createUser = require('../controller/createUserControler')

const router=express.Router()

router.post('/',createUser)



module.exports=router