const express = require('express');
const { addTodoController } = require('../controller/todoController');

const todoRoute = express.Router()

todoRoute.post('/addtodo', addTodoController)



module.exports = todoRoute;