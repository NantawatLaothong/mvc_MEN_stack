const Todo = require('./models/todos');

// name, desc, category=[work, personal, school]
const todos = [
    {
        name: 'hw for cs310',
        desc: 'more info in piaaza',
        category: 'school',
    },
    {
        name: 'Work at mom\'s restaurant',
        desc: 'Mon and Wed',
        category: 'work'
    },
    {
        name: 'learn css',
        desc: 'so i can finish my portfolio',
        category: 'personal'
    }, 
    {
        name: 'watch Paprika',
        desc: 'satoshi kon is the GOAT',
        category: 'personal'
    },
    {
        name: 'sign up for block chain class',
        desc: 'i need to sign up for this class',
        category: 'school'
    },
    {
        name: 'apply for internships',
        desc: 'apply for internships on linkedin',
        category: 'work'
    }
]

Todo.insertMany(todos)
    .then(data=>console.log(data))
    .catch(err=>console.log(err));