const Todo = require('../models/todo');

module.exports = {
    index,
    addTodo
}

function index(req, res) {
    res.render('index', {title: "Unit 2 Assessment", todos: Todo.todos})
}

function addTodo(req, res) {
    let todos = Todo.todos;
    todos.push( { todo: req.body.name, done: false } );
    console.log(todos);
    res.redirect(`/`);
}