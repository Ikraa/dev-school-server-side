const express=require("express")
const app=express()

const port=process.env.PORT || 4000 



app.get("/",(req,res)=>{
    res.send("Dev school server start successfully...")
})


app.listen(port,()=>console.log("Success..."))