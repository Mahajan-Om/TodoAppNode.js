// import the model

const todo = require('../models/todo');

// har ek route ek controller se map hai i.r route pe click krne se kya hoga uska logic controller me hai to har ek rout eke liye route handler likhna padega ki kya krne se logic execute hoga 

exports.createtodo = async(req,res)=>{  // asyn kra taki main thread pe koi affect na pde jese api call krte the 
    try{
        // extract title and decription of request body
        const {title,description} = req.body;
        // create a new todo object and insert in DB body

        const response = await todo.create({title,description});

        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message : "Entry created Successfully "
            }
        )

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"Internal server error",
                message:err.message
            }
        )
    }
}