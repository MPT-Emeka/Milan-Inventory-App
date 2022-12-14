const express = require("express")
const mongoose = require("mongoose")
const app = express()
const router = require("./routers/router")
require("dotenv/config");

app.use(express.json())
app.use("/", router)

const PORT = 4000

const StartServer = async () =>
{
    try {
            mongoose.connect(process.env.mongodb)
            console.log("Connected to Database")
            app.listen(PORT, ()=> {
                console.log("Our app dy hear word on port " + PORT)
            });
            
        } catch (error) {
        console.log(error)
        }
}
StartServer();



