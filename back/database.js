const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Sahil2315:15302sahilnigam@cluster0.chhrqek.mongodb.net/')
.then(() => {console.log("Connected")})
.catch((error) => { console.log(error) })

const userSchema = new mongoose.Schema({
    name: String,
    password: String
}) 

module.exports = mongoose.model("User", userSchema)