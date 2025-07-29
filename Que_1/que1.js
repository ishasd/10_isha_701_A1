const express=require('express')
const app=express()
app.use(express.static("./public"))


app.get("/gethello",(req,res)=>{
    res.send("Hello NodeJS")
})

app.get("/display",(req,res)=>{
    res.redirect('/display.html')
})

app.get("/ajaxCall",(req,res)=>{
    res.redirect('/demo.html')
})
app.listen(8000)
console.log("Server running on port 8000")