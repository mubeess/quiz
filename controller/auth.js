const UserModel = require("../model/UserModel")
const bcrypt=require('bcrypt')


async function auth(req,res) {
const user=await UserModel.findOne({email:req.body.email})
if(!user) return res.status(400).send({success:false,message:'Email Or Password Not Correct!!'})

const decoded=await bcrypt.compare(req.body.password,user.password)
if(!decoded) return res.status(400).send({success:false,message:'Email Or Password Not Correct!!'})

const token=user.generateToken()

res.send({success:true,message:token})
}

module.exports=auth