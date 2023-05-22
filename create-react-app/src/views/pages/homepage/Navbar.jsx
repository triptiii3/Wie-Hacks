import { useState } from 'react'
// import{Link} from 'react-router-dom'
import {GoThreeBars} from 'react-icons/go'

import React from 'react'
import { links } from './data'
// import Logo from '../images/Gymgenix.png'
import { NavLink } from 'react-router-dom'
import{MdOutlineClose} from 'react-icons/md'
import './Navbar.css'
const Navbar = () => {
    const[isNavShowing , setIsNavShowing]=useState(false);
  return (
    <>
  
    <nav>
        <div className="container nav__container">
            
           <ul className={`nav__links ${isNavShowing ?  'show__nav': 'hide__nav'}`}>
            {
                links.map(({name,path}, index)=>{
                    return(
                        <li key={index}>
                            <NavLink to={path} className={({isActive})=> isActive ? 'active-nav':' '}onClick={()=>setIsNavShowing(prev=>!prev)
                }>{name} 
                            </NavLink></li>
                    )
                })
            }
           </ul>
            <button className="nav__toggle-btn" onClick={()=>setIsNavShowing(prev=>!prev)}>{ isNavShowing?<MdOutlineClose/>:<GoThreeBars/>
}</button>
        </div>
    </nav>
    </>
  )
}

export default Navbar
