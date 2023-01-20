const mongoose= require('mongoose');  

var newsschema =mongoose.Schema({
   news_title:String,
   news_time:String,
   news_date:String,
   news_type:String
   
});  
let news =mongoose.model("news",newsschema)
module.exports=news  