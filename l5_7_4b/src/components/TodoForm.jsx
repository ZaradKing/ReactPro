import React,{useContext, useRef} from 'react'
import { AppContext } from '../context/AppContext';

export default function TodoForm() {
  const {addTask,resetTask} = useContext(AppContext)

  const nameRef = useRef();
  const timeRef = useRef();


  const onSub = (e) => {
    e.preventDefault();
    const newItem = {
      name: nameRef.current.value,
      time: timeRef.current.value,
      id:Date.now()
    }
    console.log(newItem);
    addTask(newItem)
    // addStudent(newStudent)
  }

  return (
    <div>
      <h4>Todo form 22</h4>
      <form onSubmit={onSub} className='col-lg-5'>
        <label>New task Name:</label>
        <input ref={nameRef} type="text" className='form-control' />
        <label>Task time:</label>
        <input ref={timeRef} type="time" defaultValue={"08:00"} className='form-control' />
        
        
        <button className='btn btn-info mt-3'>Add</button>
        {/* type="button" - דואג שהכפתור לא ישגר את הטופס */}
        <button onClick={resetTask} type="button" className='btn btn-danger mt-3 ms-2'>Reset</button>
      </form>
    </div>
  )
}
