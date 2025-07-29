const express=require('express')
const app=express()

app.get("/",(req,res)=>{
    res.send("This is from server.js")
})

app.listen(8000)
console.log("Server running on port 8000")