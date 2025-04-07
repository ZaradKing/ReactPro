import React from "react";
import StudentForm from "../components/StudentForm";

export default function NewStudentFormPage() {
  return (
    <div className="container">
      <h2>עמוד הוספת תלמיד</h2>
      <StudentForm />
    </div>
  );
}