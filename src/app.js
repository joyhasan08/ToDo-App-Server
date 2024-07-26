const express = require('express');
const todoRoute = require('./routes/todoRoutes');
const app = express();

app.use(express.json())
app.use('/todo', todoRoute)




app.all("*", (req, res) => {
    res.send('not found').status(404)
})
module.exports = app