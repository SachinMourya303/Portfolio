import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "/src/Components/Services/Services.css"
const Services = () => {


    return (
        <div style={{ marginBottom: "50px", marginTop: "50px" }}>
            <div className="container">
                <div className="services-container d-flex flex-column align-items-center">
                    <div className='d-flex flex-column'>
                        <span className='services-heading'>Services</span>
                        <span className='services-bar w-75'></span>
                    </div>

                    <div className='services-list w-100 mt-5 d-flex justify-content-between flex-wrap'>
                        <div className="service-type d-flex flex-column justify-content-center align-items-center border p-3 rounded col-12 col-md-5">
                            <span className='bi bi-code-slash services-icon'></span>
                            <span className='service-name text-center'>Web development</span>

                            <div className="text-center">
                                <span className='text-white services-info'>As a dedicated Front-End Developer, I craft visually appealing, responsive, and user-friendly websites using modern web technologies including HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React. I specialize in building clean, efficient, and interactive user interfaces that deliver seamless digital experiences across all devices. My focus is on combining creativity with functionality to help brands and businesses bring their ideas to life on the web.</span>
                            </div>
                        </div>

                        <div className="service-type d-flex flex-column justify-content-center align-items-center border p-3 rounded col-12 col-md-5">
                            <span className='bi bi-code-slash services-icon'></span>
                            <span className='service-name text-center'>UI / UX</span>

                            <div className="text-center">
                                <span className='text-white services-info'>I design and build intuitive, visually appealing, and responsive user interfaces that deliver seamless user experiences. With expertise in HTML, CSS, JavaScript, Bootstrap, Tailwind, and React, I transform ideas into clean, interactive, and performance-optimized web applications. My approach focuses on combining modern UI trends with user-centered design principles, ensuring that every project is not only functional but also engaging and easy to navigate.</span>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services