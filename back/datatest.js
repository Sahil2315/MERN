const user = require('./database')
let createUser = async(username, password) => {
    const newobject = await user.create({
        name: username,
        password: password
    })
    console.log(newobject)
}

createUser("Manu123", "123Manu")
