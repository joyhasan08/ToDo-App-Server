const asyncHandler = require("express-async-handler")
const { addTodoModel, getAllTodoModel, deleteTodoByIdModel } = require("../models/todoModel")


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

const deleteToDoController = asyncHandler(async (req, res) => {
    const id = req.params.id
    const data = await deleteTodoByIdModel(id)
    console.log(data);
    res.send(data)
})

module.exports = { addTodoController, getTodoDataController, deleteToDoController };



