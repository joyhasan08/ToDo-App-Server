const asyncHandler = require("express-async-handler")
const { addTodoModel, getAllTodoModel } = require("../models/todoModel")


const addTodoController = asyncHandler(async (req, res) => {
    const todoData = req.body
    const todoAdded = await addTodoModel(todoData);
    console.log('hit');
    res.send(todoAdded);
})

const getTodoDataController = asyncHandler(async (req, res) => {
    const data = await getAllTodoModel();
    console.log("get data ");
    res.json(data)
})

module.exports = { addTodoController, getTodoDataController };



