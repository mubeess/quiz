const Mongoose=require('mongoose')
const jwt=require('jsonwebtoken')
const config=require('config')
const userSchema=Mongoose.Schema({
    name:String,
    email:{type:String},
    password:String,
    image:{type:String,default:null}
})
userSchema.methods.generateToken=function() {
    const token=jwt.sign({_id:this._id},process.env.ULAMA_JSON_WEB_TOKEN)
    return token


}
const UserModel=Mongoose.model('user',userSchema)

module.exports=UserModel