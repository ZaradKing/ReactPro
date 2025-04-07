import React from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

export default function TodoPage() {
  return (
    <div className='container'>
      <TodoForm />
      <TodoList />
    </div>
  )
}
