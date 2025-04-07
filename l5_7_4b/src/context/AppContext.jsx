import { createContext, useLayoutEffect, useState } from "react";

// createContext -> כל מה שנעביר באובייקט של הארגיומנט כמאפיין
// ייתן לנו השלמה אוטומטית כאשר נשתמש בקונטקסט
// בדרך כלל נעביר את כל מה שנמצא במשתנה VAL
export const AppContext = createContext({
  todoList:[],
  addTask:(_newItem) => {},
  resetTask:(_newItem) => {},
  delItemTask:(_del_id) => {}
});


export default function AppContextProvider({children}){
  const [todoList,setTodoList] = useState([
    {name:"wake up",time:"06:30",id:1},
    {name:"go to work",time:"09:00",id:2},
  ])

  useLayoutEffect(() => {
    if(localStorage.getItem("todos")){
      setTodoList(JSON.parse(localStorage.getItem("todos")))
    }
  },[])

  
  const addTask = (_newItem) => {
    setTodoList([...todoList, _newItem])
    localStorage.setItem("todos",JSON.stringify([...todoList, _newItem]))
  }

  const resetTask = () => {
    if(window.confirm("Del all tasks?")){
      setTodoList([])
    }
  }

  const delItemTask = (_del_id) =>{
    // window.confirm - דומה לאלרט רק מאפשר למשתמש
    // ללחוץ על אישור או ביטול ואז הבדיקה אם הוא לחץ אישור
    if(window.confirm("Del item?")){
      const filter_ar = todoList.filter(item => item.id != _del_id);
      setTodoList(filter_ar)
      localStorage.setItem("todos",JSON.stringify(filter_ar))
    }
  }

  const val = {
    todoList,addTask,resetTask,delItemTask
  }

  return (
    <AppContext.Provider value={val}>
      {children}
    </AppContext.Provider>
  )
}