const todoController = require('../controllers/todo');
const router = require('express').Router()

// get todo list
router.get('/', todoController.getTodoList);

// add todo item
router.post('/', todoController.addTodo);

// edit todo item
router.put('/:id', todoController.editTodo);

// delete todo item
router.delete('/:id', todoController.deleteTodo);

module.exports = router