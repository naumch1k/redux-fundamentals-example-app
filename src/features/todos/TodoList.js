import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'

const TodoList = () => {
  const todos = useSelector(state => state.todos)

  return (
    <ul className='todo-list'>
      {todos.map((todo, i) => (
        <TodoListItem
          key={i}
          todo={todo}
        />
      ))}
    </ul>
  )
}

export default TodoList
