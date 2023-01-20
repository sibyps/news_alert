const express=require("express")
const app =express()
const bodyparser =require("body-parser")
const connectdb = require("./helpers/connection")
const dotenv=require("dotenv")
const cors = require("cors")

app.use(cors())

/* ------------------------------- BODY PARSER ------------------------------ */
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json())

/* --------------------------------- ROUTES --------------------------------- */
app.use("/",require('./routes/userRoute'))

/* ----------------------------------- ENV ---------------------------------- */
dotenv.config({path:".env"})

/* --------------------------- DATABASE CONECTION --------------------------- */
connectdb()


app.listen(3500,function(){
    console.log('server started');
})