const express = require('express');
/* const bodyParser = require('body-parser'); */
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 4000;
let Todo = require('./models/todoModel');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

// Once the connection is established, callback
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

todoRoutes.route('/getTodos').get( (req,res) => {
  Todo.find((err, todos) => {
      if(err)
          console.log(err);
      else {
          res.json(todos);
      }
  });
});

todoRoutes.route('/addTodo').post((req,res) => {
    const todo = new Todo(req.body.todo);
    todo.save()
        .then(data => {
          res.json(data);
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

todoRoutes.route('/deleteTodo/:id').delete((req, res) => {
  const id = req.params.id;
  Todo.findByIdAndDelete(id, (err, todos) => {
    res.json(todos);
  })
})

todoRoutes.route('/updateTodo/:id').put((req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    let flag = todo.completed;
    Todo.findByIdAndUpdate(id, {completed: !flag}, (err, todo) => {
      res.json(todo);
    })
  })
})

app.use('/todos', todoRoutes);

app.listen( PORT, () => {
    console.log("Server is running on port " + PORT);
});
