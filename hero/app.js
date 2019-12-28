const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')
const app = express();

app.set('view engine','ejs')
app.use('/node_modules',express.static('node_modules'))
app.use(bodyParser.urlencoded({extended:false}))
app.listen(3002,()=>{
    console.log('http://127.0.0.1:3002')
})
app.use(router)
