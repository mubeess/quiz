const Joi = require("joi")
const UserModel = require("../model/UserModel")
const bcrypt=require('bcrypt')

const UserSchema=Joi.object({
name:Joi.string(),
email:Joi.string().email().required(),
password:Joi.string().required(),
image:Joi.string().default(null)
})


async function createUser(req,res) {
const result=UserSchema.validate(req.body)

if (result.error) {
res.status(400).send(result.error.message)
console.log(req.body)
return
}



try {
   const salt=await bcrypt.genSalt(10)
   const hashed=await bcrypt.hash(req.body.password,salt)
   req.body.password=hashed;
   
    const newUser=new UserModel({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        image:req.body.image
        })

const regUser= await newUser.save()
const token=newUser.generateToken()

// console.log(regUser)
res.header('x-auth-token',token).status(200).send(regUser)
} catch (error) {
    console.log(error)
}



}

module.exports=createUser