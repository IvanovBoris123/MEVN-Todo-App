const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Todo = new Schema({
  title: {
    type: String
  },
  completed: {
      type: Boolean
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Todo', Todo);