import React from 'react'
import "/src/Components/Projects/Projects.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap-icons/font/bootstrap-icons.min.css"

const Projects = () => {

    return (
        <div style={{ marginBottom: "50px", marginTop: "50px" }}>
            <div className="container">
                <div className="projects-container d-flex flex-column align-items-center">
                    <div className='d-flex flex-column'>
                        <span className='projects-heading'>Projects</span>
                        <span className='projects-bar w-75'></span>
                    </div>

                    <div className="projects-list d-flex justify-content-center gap-4 w-100 flex-wrap" style={{ marginTop: "100px" }}>
                        <div className="project-frame p-3 rounded mt-3">
                            <figure className="project">
                                <a href="https://nitramax.vercel.app/"><img src="/img/nitramax.vercel.app_.png" alt="" className='project-img' /></a>
                            </figure>
                            <figcaption className='text-white'>Nitramax</figcaption>
                            <figcaption className='text-white'>Tailwind + React</figcaption>
                        </div>

                        <div className="project-frame p-3 rounded mt-3">
                            <figure className="project">
                                <a href="https://seedling-sm.vercel.app/"><img src="/img/seedling-sm.netlify.app_.png" alt="" className='project-img' /></a>
                            </figure>
                            <figcaption className='text-white'>Seedling</figcaption>
                            <figcaption className='text-white'>Bootstrap + React</figcaption>
                        </div>

                        <div className="project-frame p-3 rounded mt-3">
                            <figure className="project">
                                <a href="https://cineaura.vercel.app/"><img src="/img/cineaura.vercel.app_ (1).png" alt="" className='project-img' /></a>
                            </figure>
                            <figcaption className='text-white'>Cineaura</figcaption>
                            <figcaption className='text-white'>Bootstrap + React</figcaption>
                        </div>

                        <div className="project-frame p-3 rounded mt-3">
                            <figure className="project">
                                <a href="https://wasp-com.netlify.app/"><img src="/img/wasp-com.netlify.app_.png" alt="" className='project-img' /></a>
                            </figure>
                            <figcaption className='text-white'>Cineaura</figcaption>
                            <figcaption className='text-white'>Html + Css</figcaption>
                        </div>

                        <div className="project-frame p-3 rounded mt-3">
                            <figure className="project">
                                <a href="https://smookeycafe.netlify.app/"><img src="/img/smookeycafe.netlify.app_.png" alt="" className='project-img' /></a>
                            </figure>
                            <figcaption className='text-white'>Cineaura</figcaption>
                            <figcaption className='text-white'>Html + Css</figcaption>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects