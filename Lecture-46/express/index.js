const express = require('express');
const app = express()


app.use('/',(req,res)=>{
    res.send("request done")
})

app.listen(8080,()=>{
    console.log('server is connected')
})