const express = require('express');
const { addTodoController, getTodoDataController, deleteToDoController, isDoneTodoController, getDoneTodoController } = require('../controller/todoController');

const todoRoute = express.Router()

todoRoute.post('/addtodo', addTodoController)
todoRoute.get('/all', getTodoDataController)
todoRoute.delete('/delete_todo/:id', deleteToDoController)
todoRoute.put('/done_todo/:id', isDoneTodoController)
todoRoute.get('/is_done', getDoneTodoController)




module.exports = todoRoute;