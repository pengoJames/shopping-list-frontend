import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {

  return (
    <nav className='navbar'>
        <div className='links'>
            <NavLink
                to ="/itemlist"
                className="navlink"
            >
                HOME
            </NavLink>
        </div>

        <div>
            <NavLink
                to ="/selectitem"
                className="navlink"
            >
                SELECT ITEM 
            </NavLink>
        </div>
    </nav>

  )
}

export default Navbar