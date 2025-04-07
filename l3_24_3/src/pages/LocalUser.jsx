import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export default function LocalUser() {
  const nameRef = useRef();
  const ageRef = useRef();
  const [userData,setUserData] = useState({name:"unknown",age:"unknown"})

  // useLayoutEffect -> כמו יוז אפקט רגיל רק עובד לפני הרנדור
  useLayoutEffect(() => {
    checkLocal()
  },[])

  const checkLocal = () => {
    // בודק אם בכלל יש לוקאל שהקיי שלו יוזר
    if(localStorage.getItem("user")){
      // parse - ההפך מסטרינגפיי שהופך לסטרינג, פארס מחזיר לג'ייסון
      setUserData(JSON.parse(localStorage.getItem("user")))
    }
  }

  const onSaveClick = () => {
    // const name = nameRef.current.value;
    const user = {
      name:nameRef.current.value,
      age:ageRef.current.value
    }
    console.log(user);
    setUserData(user)
    // בלוקאל חייבים לשמור את המידע כסטרינג
    // JSON.stringify - הופך אובייקט לסטרינג
    localStorage.setItem("user",JSON.stringify(user))
    // לשמור את המידע בלוקאל
    // localStorage.setItem("user",name);
  }

  return (
    <div className='container'>
      <h1>Your data:</h1>
      <h2>Your name:{userData.name}</h2>
      <h2>Your age:{userData.age}</h2>
      <h4>Enter your name:</h4>
      <input ref={nameRef} type="text" />
      <h4>Enter your age:</h4>
      <input ref={ageRef} type="text" />
      <button onClick={onSaveClick}>Save</button>
    </div>
  )
}
