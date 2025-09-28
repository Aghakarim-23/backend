const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String
})

const EmployeeModel = mongoose.model("employees", UserSchema)

module.exports = EmployeeModel