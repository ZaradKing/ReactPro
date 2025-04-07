import { createContext, useState, useEffect } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [studentsList, setStudentsList] = useState(() => {
    const saved = localStorage.getItem("students");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(studentsList));
  }, [studentsList]);

  const addStudent = (student) => {
    setStudentsList([...studentsList, student]);
  };

  const resetStudents = () => {
    setStudentsList([]);
  };

  return (
    <StudentContext.Provider value={{ studentsList, addStudent, resetStudents }}>
      {children}
    </StudentContext.Provider>
  );
};
