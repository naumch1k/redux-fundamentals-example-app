import { createSelector } from 'reselect'
import { client } from '../../api/client'
import { StatusFilters } from '../filters/filtersSlice'

const initialState = []

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todos/todoAdded': {
      return [...state, action.payload ]
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
    case 'todos/todosLoaded': {
      return action.payload
    }
    default:
      return state
  }
}

export default todosReducer

// Action creators
export const todosLoaded = todos => ({
  type: 'todos/todosLoaded',
  payload: todos,
})

export const todoAdded = todo => ({ type: 'todos/todoAdded', payload: todo })

export const todoToggled = todoId => ({
  type: 'todos/todoToggled',
  payload: todoId,
})

export const todoColorSelected = (todoId, color) => ({
  type: 'todos/colorSelected',
  payload: { todoId, color },
})

export const todoDeleted = todoId => ({
  type: 'todos/todoDeleted',
  payload: todoId,
})

export const allTodosCompleted = () => ({ type: 'todos/allCompleted' })

export const completedTodosCleared = () => ({ type: 'todos/completedCleared' })

// Thunk functions
export const getTodos = () =>  async dispatch =>  {
  const response = await client.get('/fakeApi/todos')
  dispatch(todosLoaded(response.todos))
}

export const saveNewTodo = text => {
  return async function saveNewTodoThunk(dispatch, getState) {
    const initialTodo = { text }

    const response = await client.post('/fakeApi/todos', { todo: initialTodo })
    dispatch(todoAdded(response.todo))
  }
}

// Selector functions
export const selectTodoIds = createSelector(
  state => state.todos,
  todos => todos.map(todo => todo.id)
)

export const selectFilteredTodos = createSelector(
  state => state.todos,
  state => state.filters.status,
  (todos, status) => {
    if (status === StatusFilters.All) {
      return todos
    }

    const completedStatus = status === StatusFilters.Completed
    return todos.filter(todo => todo.completed === completedStatus)
  }
)

export const selectFilteredTodoIds = createSelector(
  selectFilteredTodos,
  filteredTodos => filteredTodos.map(todo => todo.id)
)
