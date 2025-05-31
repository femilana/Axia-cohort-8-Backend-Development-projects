require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json())
const user_routes = require("./routes/user_routes");
app.use("/user",user_routes);

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connected to MongoDB");
    app.listen(3000, ()=> console.log("Server online on port 3000"))
}).catch(error => console.error("Database connection error:",error));
