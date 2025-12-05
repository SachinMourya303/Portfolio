import React from 'react'
import "/src/Components/Projects/Projects.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import { projects } from '../../assets/assets'
import { motion } from 'framer-motion'

const Projects = () => {

    return (
        <div id='projects' style={{ marginBottom: "50px", marginTop: "50px" }}>
            <div className="container">
                <div className="projects-container d-flex flex-column align-items-center">
                    <div className='d-flex flex-column'>
                        <span className='projects-heading'>Projects</span>
                        <span className='projects-bar w-75'></span>
                    </div>

                    <div className="projects-list d-flex justify-content-center gap-4 w-100 flex-wrap" style={{ marginTop: "100px" }}>
                        {
                            projects.map((item, index) => (
                                <motion.div key={index} initial={{opacity: 0, y:50}} whileInView={{opacity:1 ,y:0}} transition={{duration : 2 , ease : "easeOut"}} viewport={{once : false , amount : 0.5}}>
                                <div className="project-frame p-3 rounded mt-3">
                                    <figure className="project">
                                        <a href={item.url}><img src={item.pic} alt="" className='project-img' /></a>
                                    </figure>
                                    <figcaption className='text-white'>{item.title}</figcaption>
                                    <figcaption className='text-white'>{item.languages}</figcaption>
                                </div>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects