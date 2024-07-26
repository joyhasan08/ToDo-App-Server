const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    task: {
        type: String,
        require: true
    }
});

const Todo = mongoose.models.Todo || mongoose.model('Todo', todoSchema);
module.exports = Todo;