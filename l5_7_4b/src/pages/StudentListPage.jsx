import React from "react";
import StudentList from "../components/StudentList";

export default function StudentListPage() {
  return (
    <div className="container">
      <h2>עמוד רשימת תלמידים</h2>
      <StudentList />
    </div>
  );
}