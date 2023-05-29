const express = require('express')
const logger=require('morgan')
const scrapperRoutes=require("./routes/scrapper.routes")
var app=express()

app.use(logger('dev'))

app.use('/scrap',scrapperRoutes)

app.listen(3000, function(){
    console.log("SERVER STARTED ON localhost:3000");     
})

module.exports=app