const express = require('express');
const router = express.Router();
const todoController = require("../controllers/todoController");

router.get("/getTodos", todoController.getTodos);
router.post("/addTodo", todoController.addTodo);
router.delete("/deleteTodo/:id", todoController.deleteTodo);
router.put('/updateTodo/:id', todoController.updateTodo);

module.exports = router;