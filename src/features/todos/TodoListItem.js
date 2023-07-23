import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ReactComponent as TimesSolid } from './times-solid.svg'
import { availableColors, capitalize } from '../filters/colors'
import {
  todoToggled,
  todoColorSelected,
  todoDeleted,
} from './todosSlice'

const selectTodoById = (state, todoId) => {
  return state.todos.find(todo => todo.id === todoId)
}

const TodoListItem = ({ id }) => {
  const todo = useSelector(state => selectTodoById(state, id))
  const {text, completed, color } = todo

  const dispatch = useDispatch()

  const handleCompletedChange = () => dispatch(todoToggled(todo.id))

  const handleColorChange = e => {
    const color = e.target.value
    dispatch(todoColorSelected(todo.id, color))
  }

  const onDelete = () => dispatch(todoDeleted(todo.id))

  const colorOptions = availableColors.map(color => (
    <option key={color} value={color}>
      {capitalize(color)}
    </option>
  ))

  return (
    <li>
      <div className='view'>
        <div className='segment label'>
          <input
            className='toggle'
            type='checkbox'
            checked={completed}
            onChange={handleCompletedChange}
          />
          <div className='todo-text'>{text}</div>
        </div>
        <div className='segment buttons'>
          <select
            className='colorPicker'
            value={color}
            style={{ color }}
            onChange={handleColorChange}
          >
            <option value=''></option>
            {colorOptions}
          </select>
          <button
            className='destroy'
            onClick={onDelete}
          >
            <TimesSolid/>
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoListItem
