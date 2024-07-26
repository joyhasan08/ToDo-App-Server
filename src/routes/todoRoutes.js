const express = require('express');
const { addTodoController, getTodoDataController } = require('../controller/todoController');

const todoRoute = express.Router()

todoRoute.post('/addtodo', addTodoController)
todoRoute.get('/all', getTodoDataController)



module.exports = todoRoute;