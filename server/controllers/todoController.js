const Todo = require("../models/todoModel");

exports.getTodos = (req, res) => {
  Todo.find((err, todos) => {
    if (err) console.log(err);
    else { res.json(todos)};
  })
}

exports.addTodo = (req, res) => {
  const todo = new Todo(req.body.todo);
  todo.save()
    .then( todo => {
      res.json(todo);
    })
    .catch( err => {
        res.status(400).send('adding new todo failed');
    });
}

exports.deleteTodo = (req, res) => {
  const id = req.params.id;
  Todo.findByIdAndRemove(id, (err, todos) => {
    res.send(todos);
  })
}

exports.updateTodo = (req, res) => {
  const id = req.params.id;
  Todo.findByIdAndUpdate(id, {completed: true}, (err, todos) => {
    res.send(todos);
  })
}
