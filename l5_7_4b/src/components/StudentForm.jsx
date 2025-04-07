import React, { useContext, useRef } from 'react';
import { StudentContext } from '../context/StudentContext';

export default function StudentForm() {
  const { addStudent } = useContext(StudentContext);
  const nameRef = useRef();
  const gradeRef = useRef();

  const onSub = (e) => {
    e.preventDefault();
    const newStudent = {
      id: Date.now(),
      name: nameRef.current.value,
      grade: gradeRef.current.value
    };
    addStudent(newStudent);
    nameRef.current.value = '';
    gradeRef.current.value = '';
  };

  return (
    <div>
      <h4>טופס הוספת תלמיד</h4>
      <form onSubmit={onSub} className='col-lg-5'>
        <label>שם התלמיד:</label>
        <input ref={nameRef} type="text" className='form-control' required />
        <label>ציון:</label>
        <input ref={gradeRef} type="number" className='form-control' required />
        <button className='btn btn-info mt-3'>הוסף</button>
      </form>
    </div>
  );
}