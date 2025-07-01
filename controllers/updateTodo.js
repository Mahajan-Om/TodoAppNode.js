//import th model
const todo = require("../models/todo");

//define route handler

exports.updateTodo = async(req,res) => {
    try {
        const {id} = req.params;
        const {title,description} = req.body;

        const Todo = await todo.findByIdAndUpdate(
            {
                _id : id,
            },
            {
                title,
                description,
                updateAt : Date.now()
            }
        )
        res.status(200).json({
            success: true,
            data : Todo,
            message : "Update Successfully"
        })
    }
    catch(err) {
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server error",
        })
    }
}