const express = require("express");
const app = express()
const cors = require("cors")
require('dotenv').config();
const Port = process.env.port
const connection = require("./.configs/db");
app.use(express.json())
app.use(cors())



app.get("/", (req, res) => {
    res.send("Welcome to Home Page")
})

app.listen(Port, async () => {
    try {
        await connection
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
    }
    console.log(`Server is listening on port ${Port}`)
})
