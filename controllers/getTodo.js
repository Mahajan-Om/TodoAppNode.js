// import the model

const todo = require('../models/todo');

// har ek route ek controller se map hai i.r route pe click krne se kya hoga uska logic controller me hai to har ek rout eke liye route handler likhna padega ki kya krne se logic execute hoga 

exports.getTodo = async(req,res)=>{  // asyn kra taki main thread pe koi affect na pde jese api call krte the 
    try{
        // fetch all todo items form database
        const todos = await todo.find({});
        
        //response
        res.status(200).json({
            success:true,
            data:todos,
            messege:"Entire Todo is fetched "
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Error in fetched",
            messege:err.messege
        });
    }
}

exports.getTodobyID = async(req,res)=>{
    try{
        // extract todo items based on ids for that we first nedd to know the id  iske liye humne routes ke ander /getTodo/:id aisa likh diya iska mtlb jb bhi hum api ek perticukar id se call karenge tb usme id ki jgh given id aa jayegu aur isko hum api ki body se nikal lenge.
        const id = req.params.id;
        const Todo = await todo.findById({_id:id}); // jb bhi hum api postman me call krte hai tb bydefault _Id bnke usme ID aa jati hai
        
        // somehow data for given id is not found
        if(!Todo){
            return res.status(404).json({
                success:false,
                messege:"Data is not found for given id"
            })
        }

        // data is successfully found
        res.status(200).json({
            success : true,
            data:Todo,
            messege:`Data for ${id} is found`
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Error in fetched",
            messege:err.messege
        });
    }
}