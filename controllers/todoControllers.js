const res = require('express/lib/response');
const Todo = require('../models/todos');

const categories = ['personal', 'work', 'school'];

exports.todo_list = async function(req, res){
    const {category} = req.query;
    try{
        if(category){
            const todos = await Todo.find({category});
            res.render('todos/index', {todos, category});
        } else {
            const todos = await Todo.find({})
            res.render('todos/index', {todos, category});
        }
            }catch(err) {
        console.log(err);
        res.status(404).send('Sorry, an error occured')
    }
}

exports.todo_new = async function(req, res){
    try {
        res.render('todos/new', {categories});
    }catch(err) {
        console.log(err);
        res.status(404).send('an error occured in new');
    }
}

exports.todo_post = async function(req, res){
    try{
        const todo = await new Todo(req.body).save();
        console.log(todo);
        res.redirect(`/todos/${todo._id}`); 
    }catch(err) {
        console.log(err);
        res.status(404).send('an error occured in create');
    }
}

exports.todo_show = async function(req, res){
    try{
        const {id} = req.params;
        const todo = await Todo.findById(id);
        res.render('todos/show', {todo})
    }catch(err) {
        res.status(404).send('an error occured in show');
    }
}

exports.todo_edit = async function(req, res){
    try {
        const {id} = req.params;
        const todo = await Todo.findById(id);
        res.render('todos/edit', {todo, categories})
    }catch(err) {
        res.status(404).send('an err occured in edit');       
    }
}

exports.todo_put = async function(req, res){
    try{
        const {id} = req.params;
        const todo = await Todo.findByIdAndUpdate(id, req.body);
        res.redirect(`/todos/${todo._id}`);
    }catch(err) {
        res.status(404).send('an err occured in put');
    }
}

exports.todo_delete = async function(req, res){
    try{
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);
        res.redirect('/todos');
    } catch(err) {
        res.status(404).send('an error occured in delete');
    }
}