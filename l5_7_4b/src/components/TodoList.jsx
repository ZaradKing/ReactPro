import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export default function TodoList() {
  const { todoList,delItemTask } = useContext(AppContext)

  return (
    <div className='my-4'>
      <h3>Added tasks:</h3>
      <div className='row'>
        {todoList.map(item => {
          return (
            <div key={item.id} className='col-lg-7 border p-1 my-1'>
              <button onClick={() => {
                delItemTask(item.id);
              }} className='bg-danger float-lg-end ms-2 my-1'>X</button>
              <h4>{item.name} - {item.time}</h4>
            </div>
          )
        })}
        {/**/}
      </div>
    </div>
  )
}
