const express =require("express")
const route=express.Router()
const controller =require("../controllers/userController")

route.post('/post_news',controller.post_news)
route.get('/get_news',controller.get_news)
route.delete('/delete_news/:id',controller.delete_news)
module.exports=route