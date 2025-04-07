import React from 'react';

export default function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, i) => (
        <li key={i}>
          {task.text} - {task.date}
        </li>
      ))}
    </ul>
  );
}