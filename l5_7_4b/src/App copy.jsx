import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import Page404 from './pages/Page404'
import About from './pages/About'
import Students from './pages/Students'
import { StudentContext } from './context/StudentContext'

function App() {
  const [studentsList,setStudentsList] = useState([
    {name:"koko",id:1},
    {name:"momo",id:2},
  ])

  const addStudent = (_newItem) => {
    setStudentsList([...studentsList, _newItem]);
  }

  const resetStudents = () => {
    setStudentsList([]);
  }

  return (
    <StudentContext.Provider value={{studentsList,addStudent,resetStudents}}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/students" element={<Students />} />
          <Route path="*" element={<Page404 />} />
        </Routes>

      </BrowserRouter>
    </StudentContext.Provider>
  )
}
export default App