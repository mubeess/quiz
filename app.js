const express=require('express')
const userRouter=require('./routes/userRoute')
const auth=require('./routes/auth')
const Mongoose=require('mongoose')

const app=express()
Mongoose.connect('mongodb://localhost/ulama')
.then(()=>{
    console.log('DB connected')
})
.catch(err=>{
    console.log(err)
})


app.use(express.json())
// app.use(tester)
app.use('/user',userRouter)
app.use('/auth',auth)



app.listen(3000,()=>{
    console.log('listening')
})