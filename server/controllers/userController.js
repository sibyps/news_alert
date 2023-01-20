const News = require("../model/news");

const post_news = async (req, res) => {
  let news_document = await News.findOne();
  if (!news_document) {
    let new_document = News.create(req.body);
    res.json({ status: "success" });
  } else {
    let new_document = News.create(req.body);
    res.json({ status: "success" });
  }
};

const get_news = async (req, res) => {
  let get_doument = await News.find();
  if (!get_doument) {
    res.json({ status: "no data" });
  } else {
    res.json({ status: "success", get_doument });
  }
};

const delete_news=async(req,res)=>{
 let id = req.params.id
 News.deleteOne({_id:id}).then((result)=>{
if(result){

    res.json({status:"success"})
}else{
    res.json({status:"error"})
}
 })
}


module.exports = {
  post_news,
  get_news,
  delete_news
};
