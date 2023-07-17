const mongoose = require('mongoose')

mongoose.connect(process.env.Mongo_Con_String)
.then(() => {console.log("connected")})
.catch((error) => { console.log(error) })

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
}) 

module.exports = mongoose.model("User", userSchema)