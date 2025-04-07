import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Page404 from './pages/Page404';
import About from './pages/About';
import TodoPage from './pages/TodoPage';
import AppContextProvider from './context/AppContext';

import NewStudentFormPage from './pages/NewStudentFormPage';
import StudentListPage from './pages/StudentListPage';
import { StudentProvider } from './context/StudentContext';

function App() {
  return (
    <AppContextProvider>
      <StudentProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/new-student" element={<NewStudentFormPage />} />
            <Route path="/students" element={<StudentListPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </StudentProvider>
    </AppContextProvider>
  );
}

export default App;