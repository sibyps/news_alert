const mongoose =require("mongoose")

const connectdb=async()=>{
    try{
        
        const connect= await mongoose.connect(process.env.URL,{
            useNewUrlParser:true
        })


        console.log(`mongo conected:${connect.connection.host}`);
    }catch(err){
       console.log(err)
       process.exit(1)
    }
 }



 module.exports=connectdb