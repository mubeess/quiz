const runTest=()=> new Promise((resolve,reject)=>{
console.log('loadinggggg......')
setTimeout(()=>{
resolve(1)
},2000)
})

async function tester(req,resp,next) {
// const value=await runTest()
console.log('loadinggggg......')
// console.log(value)
setTimeout(()=>{
 next()
},2000)

}

module.exports=tester