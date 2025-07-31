import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-secondary p-4">
            <div className="container-fluid">
                <h1 className='me-4'>Task manager</h1>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item me-4">
                            <NavLink to="/">Home Page</NavLink>
                        </li>
                        <li className="nav-item me-4">
                            <NavLink to="/addtasks">Aggiungi Task </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
