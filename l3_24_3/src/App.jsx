import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import Page404 from './pages/Page404'
import About from './pages/About'
import Games from './pages/Games'
import LocalUser from './pages/LocalUser'
import ShopPage from './pages/ShopPage'
import TaskInput from './TaskInput';
import TaskList from './TaskList';



export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="p-4">
      <h1>Reminder Pro</h1>
      <TaskInput onAdd={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}
