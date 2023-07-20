const initialState = [
  { id: 0, text: 'LearnReact', completed: true },
  { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
  { id: 2, text: 'Build something fun!', completed: false, color: 'blue' },
]

const getNextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
  return maxId + 1
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todos/todoAdded': {
      return [
        ...state,
        {
          id: getNextTodoId(state),
          text: action.payload,
          completed: false,
        }
      ]
    }
    case 'todos/todoToggled': {
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    }
    case 'todos/colorSelected': {
      const { color, todoId } = action.payload

      return state.map(todo => {
        if (todo.id !== todoId) {
          return todo
        }

        return {
          ...todo,
          color,
        }
      })
    }
    case 'todos/todoDeleted': {
      return state.filter(todo => todo.id !== action.payload)
    }
    case 'todos/allCompleted': {
      return state.map(todo => {
        return { ...todo, completed: true }
      })
    }
    case 'todos/completedCleared': {
      return state.filter(todo => !todo.completed)
    }
    default:
      return state
  }
}

export default todosReducer
