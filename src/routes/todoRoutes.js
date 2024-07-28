const express = require('express');
const { addTodoController, getTodoDataController, deleteToDoController } = require('../controller/todoController');

const todoRoute = express.Router()

todoRoute.post('/addtodo', addTodoController)
todoRoute.get('/all', getTodoDataController)
todoRoute.delete('/delete_todo/:id', deleteToDoController)



module.exports = todoRoute;