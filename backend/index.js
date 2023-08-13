const mongoose=require('mongoose')
const express=require('express')
const app = express()
const cors=require('cors')
const bodyparser=require('body-parser')
const dotenv=require('dotenv').config()
const responses=require('./routes/responses.js')

app.use(cors())
app.use(bodyparser.urlencoded())
app.use(express.json())

app.use('/api/responses', responses)

const start=async()=>{
    await mongoose.connect(process.env.URI).then(()=>console.log('starting mongoDB servers')).catch((err)=>console.log(err))
    await app.listen(5000,()=>{
        console.log("server is running")
    })
}
start()