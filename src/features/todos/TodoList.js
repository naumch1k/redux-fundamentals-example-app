import React from 'react'
import { useSelector } from 'react-redux'
import { selectFilteredTodoIds } from './todosSlice'
import TodoListItem from './TodoListItem'

const TodoList = () => {
  const todoIds = useSelector(selectFilteredTodoIds)
  const loadingStatus = useSelector(state => state.todos.status)

  if (loadingStatus === 'loading') {
    return (
      <div className="todo-list">
        <div className="loader" />
      </div>
    )
  }

  return (
    <ul className='todo-list'>
      {todoIds.map(todoId => (
        <TodoListItem
          key={todoId}
          id={todoId}
        />
      ))}
    </ul>
  )
}

export default TodoList
