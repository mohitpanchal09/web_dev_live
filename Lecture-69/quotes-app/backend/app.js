const express = require('express')
const app = express()
const mongoose = require('mongoose')
const seedDb = require('./seed')

mongoose.connect('mongodb://127.0.0.1:27017/quotes').then(()=>{
    console.log('db connected ..')
})

// seedDb() // seed db
app.get('/',(req,res)=>{
    res.status(200).send({msg:'hello'})
})

app.listen(8080,()=>{
    console.log('server started..')
})

