import React from 'react'
import StudentForm from '../components/StudentForm'
import StudentList from '../components/StudentList'

export default function Students() {
  return (
    <div className='container'>
      <h2>Students list app</h2>
      <StudentForm />
      <StudentList />
    </div>
  )
}
