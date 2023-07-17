const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()
const cookieParser = require('cookie-parser')
const cors = require('cors')
const user = require('./database')

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname)))
app.use(cookieParser())

app.get('/hello', (req, res) => {
    res.send({'statement': "Server Se toh Connect Hogya ab Ghrwalo se bhi hoja."})
})

app.post('/ask', (req, res) => {
    user.find({name: req.body.name, age: req.body.age})
    .then((result) => {
        if(result.length == 0){ throw error }
        res.send({'result': result})
    })
    .catch((error) => {
        res.status(500).send({'message': 'Internal Server Error'})
    })
})

app.listen(5000, () => {
    console.log("Server Running on Port 5000")
})