import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Header() {
  // מאפשר לשגר דרך פונקציה לכתובת אחרת
  const nav = useNavigate();

  return (
    <header className='container-fluid' style={{background:"silver"}}>
      <div className="container">
        <div className="row ">
          {/* col-auto - רוחב לפי התוכן */}
          <div className="logo col-auto">
            {/* {cursor:"pointer"} - במעבר עכבר הופך ללחץ */}
            <h3 style={{cursor:"pointer"}} onClick={() => {
              // יישגר אותנו לכתובת דרך הפונקציה ולא לינק
              nav("/")
            }}>My logo</h3>
          </div>
          <nav className='col-auto'>
            {/* h-100 - גובה 100 אחוז
            list-inline - מסתיר את הנקודות של הבולטים
             align-items-center - ממרכז באמצע בגובה*/}
            <ul className='list-inline d-flex h-100 align-items-center'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About 1</Link></li>
              <li><Link to="/games">Games</Link></li>
              <li><Link to="/localUser">Local User</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}