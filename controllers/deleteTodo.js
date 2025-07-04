//import th model
const todo = require("../models/todo");

//define route handler

exports.deleteTodo = async (req, res) => {
    try {
        const {id} = req.params;
        await todo.findByIdAndDelete(id);

        res.json({
            success: true,
            message : "Todo deleted successfully"
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server error",
          });
    }
}