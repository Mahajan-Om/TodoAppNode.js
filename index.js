const express = require('express');  // expreess.js jo el framework hai uska instance le liya 
const app = express();  // aur server insatiates krke usko app naam de diya 

// load config from env file

require("dotenv").config(); 

const PORT  = process.env.PORT || 4000 // ya to PORT use karo ya phir koi error aaya to 4000 use karo

// middleware to parse json request body humne  controller direct {title , description} se data parse kr liya hai withour any parser but aisa error aayega pehle usko middleware se req.body se data parse krna apdega 

app.use(express.json());

// import routes for todo apis

const todoroute = require('./routes/todos');

// mount or add or append  the todos API routes // filhaal ek hi routes hai isliye ek hi rpute hai diya agr jayada rehte to aur dete aur sbko is given url ke aage wo route add hoke complete url bn jata 
app.use("/api/V1" , todoroute);

// start server 
app.listen(PORT , () =>{
    console.log(`server started at ${PORT}`);
})

//  connection to the databse

const dbconnect = require('./config/database');
dbconnect();

// default route 

app.get('/' , (req,res)=>{
    res.send("<h1>This is Homepage </h1>");
})

