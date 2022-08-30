const express = require("express")
const mongoose = require("mongoose")
const app = express()
const storeOwner = require("./model")
const dotenv = require("dotenv");

const Database = "mongodb+srv://milan:milan@cluster0.vytpmly.mongodb.net/milanDB?retryWrites=true&w=majority"

const PORT = 4000 // can be any 4 digit number. 

app.use(express.json());

app.post("/signup", async (req, res) =>
{
    const {name, email, password} = req.body;
    const storeOwnerSignup = storeOwner({name, email, password})

    console.log(storeOwnerSignup);
    await storeOwnerSignup.save();
    return res.status(200).send(storeOwnerSignup);
})


const StartServer = async () =>
{
    try {

            mongoose.connect(Database)
            console.log("Connected to Database")
            app.listen(PORT, ()=> {
                console.log("Our app dy hear word on port " + PORT)
            });
            
        } catch (error) {
        console.log(error)
        }
}
StartServer();



