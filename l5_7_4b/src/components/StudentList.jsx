import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

export default function StudentList() {
  const { studentsList, resetStudents } = useContext(StudentContext);

  return (
    <div>
      <h3>רשימת תלמידים:</h3>
      {studentsList.length === 0 ? (
        <p>אין תלמידים כרגע.</p>
      ) : (
        <ul>
          {studentsList.map((item) => (
            <li key={item.id}>
              {item.name} - ציון: {item.grade}
            </li>
          ))}
        </ul>
      )}
      <button onClick={resetStudents} className='btn btn-danger mt-3'>איפוס</button>
    </div>
  );
}