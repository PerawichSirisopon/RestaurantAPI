const express = require("express");
const cors = require("cors");
const sql = require("./db/db");
const PORT = 5000;

//create service
const app = express();

//use middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/", (req,res)=>{
    res.send("<h1>This is a restaurants API</h1>");
})

app.listen(PORT, ()=>{
    console.log("Server is running on http://localhost:"+ PORT)
})