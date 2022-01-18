const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const methodOverride = require('method-override');
const todoRouter = require('./routes/todos')


app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use('/todos', todoRouter);

app.listen(PORT, ()=>{
    console.log(`app is running on port: ${PORT}`);
})