const Todo = require('../models/todo');

module.exports = {
    getTodoList: async(req, res) => {
        try {
            const todoList = await Todo.find({})
            return res.json({
                status: 200,
                message: "Success",
                todoList: todoList
            })
        } catch (error) {
            res.json(error.message)
        }
    },
    addTodo: async(req, res) => {
        const data = {...req.body }
        try {
            const todo = new Todo({
                content: data.content
            })
            await todo.save()

            return res.json({
                status: 200,
                message: "Add success!",
                todo: todo
            })
        } catch (error) {
            res.json(error.message)
        }
    },
    editTodo: async(req, res) => {
        const todoId = req.params.id
        const data = {...req.body }
        try {
            const todo = await Todo.findOneAndUpdate({ _id: todoId }, { content: data.content }, { new: true })

            if (!todo) {
                return res.json('You dont have this todo item or todo item not exist!')
            }

            return res.json({
                status: 200,
                message: "Edit success!",
                todo: todo
            })
        } catch (error) {
            res.json(error.message)
        }
    },
    deleteTodo: async(req, res) => {
        const todoId = req.params.id
        try {
            const todo = await Todo.findOneAndRemove({ _id: todoId })

            if (!todo) {
                return res.json('You dont have this todo item or todo item not exist!')
            }

            return res.json({
                status: 200,
                message: "Delete success!"
            })
        } catch (error) {
            res.json(error.message)
        }
    },
};