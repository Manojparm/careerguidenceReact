import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
   function openmenu(e){
    let sidemenu=document.getElementById("sidemenu");
    e=sidemenu;
     e.style.right="0";
   }
   function closemenu(e){
    let sidemenu=document.getElementById("sidemenu");
     e=sidemenu;
    e.style.right="-600px";
   }
  return (
    <div className='nav-container'>
    <nav>
     <h4>Career-<span>Guidence</span></h4>
     <ul id="sidemenu">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/signup">Signup</NavLink></li>
      <li><NavLink to="/studentlogin">Login</NavLink></li>
     <i className="fas fa-times" onClick={(e)=>closemenu(e)}></i>
     </ul>
     <i className="fas fa-bars" onClick={(e)=>openmenu(e)}></i>
    </nav>
    </div>
  )
}

export default Header
