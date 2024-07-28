const Todo = require("./todoSchema");


const addTodoModel = async (todoData) => {

    const newTodoData = await Todo.create(todoData)
    console.log(newTodoData);
    return newTodoData;

}

const getAllTodoModel = async () => {
    const data = await Todo.find({})
    console.log(data);
    return data;
}

const deleteTodoByIdModel = async (id) => {
    await Todo.findOneAndDelete({ _id: id })
    return ("deleted")
}

module.exports = { addTodoModel, getAllTodoModel, deleteTodoByIdModel }

