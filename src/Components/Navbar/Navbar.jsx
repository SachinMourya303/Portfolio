import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "/src/Components/Navbar/Navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-md navbar-dark">
                <div className="navbar-brand fs-1">Sachin</div>

                <button className='navbar-toggler border-0'>
                    <span className='bi bi-list fs-1 text-white' data-bs-toggle="offcanvas" data-bs-target="#offcanvas"></span>
                </button>

                <div className="offcanvas offcanvas-end text-bg-dark w-75" id="offcanvas">
                    <div className="offcanvas-header p-0">
                        <button className='btn bi bi-x text-white fs-1 ms-auto' data-bs-dismiss="offcanvas"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav mx-auto gap-lg-4">
                        <li className='nav-item'>
                            <NavLink to="/" className="nav-link fs-5 d-flex flex-column">Home <span className='hover-line'></span></NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/aboutme" className="nav-link fs-5 d-flex flex-column">AboutMe <span className='hover-line'></span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/services" className="nav-link fs-5 d-flex flex-column">Services <span className='hover-line'></span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" className="nav-link fs-5 d-flex flex-column">Projects <span className='hover-line'></span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link fs-5 d-flex flex-column">Contact <span className='hover-line'></span></NavLink>
                        </li>
                    </ul>
                    </div>
                </div>

                <div className='btn d-none d-lg-block'>
                    <NavLink to="https://www.linkedin.com/in/sachin-mourya-b3ab11374/" className='connect-with-me-btn btn border-0 rounded-5 text-white fs-5'>Connect With Me</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar