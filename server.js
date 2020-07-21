const express=require('express')

const app=express()

app.use(time = (req,res,next)=>{
    let dateReq=new Date()
    let requestTime=dateReq.getHours()
console.log(requestTime)
 next()

})


app.use(express.static(__dirname+'/public'))


app.listen(3000,(err)=>{
    if(err)
        console.log('server is not running')
        else 
        console.log('server is running on port 3000')
    
})