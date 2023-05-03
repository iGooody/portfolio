import React from 'react'
import './Navbar.css'
import { BsSun } from 'react-icons/bs';

export const Navbar = () => {
  return (
    <>
        <ul className='Navbarlist'>
            <li> <button>Home</button> </li>
            <li> <button>About me</button> </li>
            <li> <button>Projects</button> </li>
            <li> <button>Skills</button> </li>
            <li> <button>Contact</button> </li>
            <li> <button>Resume</button> </li>
            <li> <button><BsSun/></button> </li>
        </ul>

    </>
    
  )
}
