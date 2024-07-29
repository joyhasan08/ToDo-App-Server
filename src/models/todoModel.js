const Todo = require("./todoSchema");


const addTodoModel = async (todoData) => {

    const newTodoData = await Todo.create(todoData)
    console.log(newTodoData);
    return newTodoData;

}

const getAllTodoModel = async () => {
    const data = await Todo.find({ isDone: false })
    console.log(data);
    return data;
}

const deleteTodoByIdModel = async (id) => {
    await Todo.findOneAndDelete({ _id: id })
    return ("deleted")
}

const isDoneTodoListModel = async (id) => {
    const doneData = await Todo.findOneAndUpdate({ _id: id }, { isDone: true })
    return ('is done')
}

const getDoneTodoListModel = async () => {
    const doneData = await Todo.find({ isDone: true })
    console.log(doneData);
    return doneData
}

module.exports = { addTodoModel, getAllTodoModel, deleteTodoByIdModel, isDoneTodoListModel, getDoneTodoListModel }

