import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = () => {
  const todos = []

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
