import React, { useEffect, useRef, useState } from 'react'
import {useSearchParams, useNavigate} from "react-router-dom"

export default function Games() {
  const [list,setList] = useState([]);
  const [query] = useSearchParams()
  const inputRef = useRef();
  const nav = useNavigate();

  const testDestructing = {
    name:"koko", age:50
  }
  // [] - פועל פעם אחת שהקומפונינטה נטענת
  useEffect(() => {
    doApi();
    destructing(testDestructing)
    spread();
  },[query])

  // הסבר על דיסטרקטינג וספריד אופריטורס
  // const destructing = (item) => {
  const destructing = ({age,name}) => {
    // דיסטרקטינג - פירוק מאפיינים של פריט אובייקט
    // const {name,age} = item
    console.log(age,name);
    // console.log(item.age,item.name);
    
  }

  const spread = () => {
    const def_ar = ["d","e","f"];
    // חיבור מידע בין מערכים
    const abc_ar = ["a","b","c",...def_ar,"g","h"];

    const car1 = {name:"mazda",color:"red"};
    // משכפל את האובייקט בלי רפרנס , ככה שאובייקט 1 לא ישפיע על אובייקט 2
    const car2 = {...car1,color:"blue",year:2024};
    car1.name = "ferrari"
    console.log(car1,car2)

    console.log(abc_ar);
    
  }

  const doApi = async() => {
    const url = "http://fs1.co.il/bus/xbox1.php"
    try{

      const resp = await fetch(url);
      const data = await resp.json()
      console.log(data);
      //?year = 
      const year = query.get("year") || 2005;
      console.log(year);
      // מסנן את המשחקים שהשנה שלהם לפי המשתנה קווארי
      const filter_ar = data.filter(item => item.Year == year)
      
      setList(filter_ar);
    }
    catch(err){
      console.log(err);
    }
    
  }

  const onSearchClick = () => {
    const input_val = inputRef.current.value;
    nav("/games?year="+input_val)
    // שיטה ישנה שעושה רפרש לדפדפן ולזכרון של האפליקציה
    // window.location.href = "/games?year="+input_val
  }

  return (
    <div className='container'>
      <h1>List of games:</h1>
      <div>
        <h2>Choose year:</h2>
        <input ref={inputRef} type="number" defaultValue={2004} />
        <button onClick={onSearchClick}>Search</button>
      </div>
      <ul>
        {list.map(item => {
          return (
            <li key={item.Game}>{item.Game} - {item.Year}</li>
          )
        })}
      </ul>
    </div>
  )
}
