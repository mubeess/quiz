const express=require('express')
const auth=require('../controller/auth')


const Router=express.Router()

Router.post('/',auth)

module.exports=Router