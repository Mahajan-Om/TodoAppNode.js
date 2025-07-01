// here ab .env ke ander ka url use krna hai uske liye pehle .env wali file process variable se connect krna padega uske liye install npm i dotenv

const mongoose = require('mongoose');

require('dotenv').config();  // isse jo envioment variable file me likha hoga vo process wale object me aa gya ab isko process.env.url se use kr sakte hsi 

const dbconnect = () => {

    mongoose.connect(process.env.DATABASE_URL) 
    // //{  These are depricated now 
    //     useNewUrlParser:true,
    //     useUnifiedTopology:true
    // })
    .then(()=>{console.log("DB ki connection is successfull.")})
    .catch((error)=>{
        console.log("Issue in DB Connection")
        console.error(error.message);
        process.exit(1);      // process.exit() is a built-in Node.js function that immediately stops the program and exits the process aur bracket ke ander agr xero hai to exited with success and if 1 to exited with errors.


    });
}

module.exports = dbconnect;  // dbconnect ka function banake node js ko db se connect kr diya aur us function ko export kr diya