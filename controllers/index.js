const Todo = require('../models/todo');

module.exports = {
    index
}

function index(req, res) {
    res.render('index', {title: "Unit 2 Assessment", todos: Todo.todos})
}
