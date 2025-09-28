const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config();
const EmployeeModel = require("./models/Employee")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/employee")

app.get("/users", async (req,res) => {
    try {
        const users = await EmployeeModel.find({})
        res.status(200).json(users)
    } catch (error) {
        console.error(error)
    }
})

app.post('/register', async (req,res) => {
    try {
      const employee = await EmployeeModel.create(req.body)

      res.status(201).json(employee);
    } catch (error) {
      res.status(400).json({ error: err.message });
    }
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})
