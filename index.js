const express=require("express")
const data=require('./data/Courses.json')
const app=express()
const cors=require('cors')
app.use(cors())
const port=process.env.PORT || 4000 



app.get("/",(req,res)=>{
    res.send("Dev school server start successfully...")
})
app.get("/courses",(req,res)=>{
    res.send({staus:true,data:data})
})
app.get("/courses/:id",(req,res)=>{
    const id=req.params.id
    const course=data.find(item=>item.id=== +id)
    res.send(course)
    // res.send({staus:true,data:data})
})


app.listen(port,()=>console.log("Success..."))