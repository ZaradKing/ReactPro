import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className='container-fluid' style={{background:"silver"}}>
      <div className="container">
        <div className="row ">
          {/* col-auto - רוחב לפי התוכן */}
          <div className="logo col-auto">
            <h3>My logo</h3>
          </div>
          <nav className='col-auto'>
            {/* h-100 - גובה 100 אחוז
            list-inline - מסתיר את הנקודות של הבולטים
             align-items-center - ממרכז באמצע בגובה*/}
            <ul className='list-inline d-flex h-100 align-items-center'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/todo">Todo</Link></li>
              {/* <li><Link to="/students">Students</Link></li> */}
              
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}