let todoList = [
  {
    "id": 1,
    "content": "Lam toan"
  },
  {
    "id": 2,
    "content": "Lam van"
  }
]

module.exports = {
  getTodoList: (req, res) => {
    try {
      return res.json(todoList)
    } catch (error) {
      res.json(error.message)
    }
  },
  addTodo: (req, res) => {
    try {
      const todo = { "id": todoList.length + 1, ...req.body }
      todoList.push(todo)

      return res.json(todoList)
    } catch (error) {
      res.json(error.message)
    }
  },
  editTodo: (req, res) => {
    try {
      const todoId = Number(req.params.id)
      const todo = { ...req.body }

      todoIndex = todoList.findIndex(todo => todo.id === todoId)
      todoList[todoIndex].content = todo.content

      return res.json(todoList)
    } catch (error) {
      res.json(error.message)
    }
  },
  deleteTodo: (req, res) => {
    try {
      const todoId = Number(req.params.id)

      todoList = todoList.filter( todo => todo.id !== todoId )
      
      return res.json(todoList)
    } catch (error) {
      res.json(error.message)
    }
  },
};