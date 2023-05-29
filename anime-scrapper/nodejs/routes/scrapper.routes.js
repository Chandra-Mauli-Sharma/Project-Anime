const express = require('express')
const scrapperController=require("../controller/scrapper.controller")
const router=express.Router()

router.get("/trending",scrapperController.scrapTrendingAnime)

module.exports=router