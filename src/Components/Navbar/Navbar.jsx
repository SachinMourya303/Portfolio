import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "/src/Components/Navbar/Navbar.css"
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const links = [
        { title: "Home", href: "/" },
        { title: "About", href: "/#aboutme" },
        { title: "Services", href: "/#services" },
        { title: "Projects", href: "/#projects" },
        { title: "Contact", href: "/#contact" },
    ]
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
                        <ul className="navbar-nav ms-auto mx-lg-auto gap-lg-4">
                            {
                                links.map((link, index) => (
                                    <li key={index} className='nav-item'>
                                        <HashLink to={link.href} className="nav-link fs-5 d-flex flex-column">{link.title} <span className='hover-line'></span></HashLink>
                                    </li>
                                ))
                            }
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