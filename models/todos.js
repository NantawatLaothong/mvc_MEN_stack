const mongoose = require('mongoose');

async function connect(){
    mongoose.connect('mongodb://localhost:27017/todoApp');
}

connect().then((m)=>{
        console.log('DB connected');
}).catch(err=>{console.log(err)});


const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ['personal', 'work', 'school']
    }
});

// create a model 
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
