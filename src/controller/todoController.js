const asyncHandler = require("express-async-handler")
const { addTodoModel } = require("../models/todoModel")

const addTodoController = asyncHandler((req, res) => {
    const TodoAdded = addTodoModel();
    const data = req.params.id
    // console.log(data);
    console.log('hit');
    res.send("add");
})

module.exports = { addTodoController };



