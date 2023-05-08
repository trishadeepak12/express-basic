const express=require('express')
const app=express()
const aboutPage=require('./about')
const loginPage=require('./login')
const contactPage=require('./contact')
const servicePage=require('./Service')
app.get('/',(req,res)=>{
    res.send("Home Page")
})

app.use("/about",aboutPage)
app.use('/Service',servicePage)
app.use('/login',loginPage)
app.use('/contact',contactPage)
app.listen(4000)