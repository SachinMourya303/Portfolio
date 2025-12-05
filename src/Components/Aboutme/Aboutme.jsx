import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "/src/Components/Aboutme/Aboutme.css"
import { motion } from 'framer-motion'

const Aboutme = () => {
    return (
        <div id='aboutme' style={{marginBottom:"50px" , marginTop:"50px"}}>
            <div className="container d-flex justify-content-center">
                <div className="aboutme-container w-100 d-flex flex-column align-items-center">
                    <div className='d-flex flex-column'>
                        <span className='aboutme-heading'>About Me</span>
                        <span className='aboutme-bar w-75'></span>
                    </div>

                    <div className="aboutme-modal-section w-100 d-flex justify-content-around flex-wrap">

                        <div className='aboutme-details w-100'>
                            <p className='aboutme-paragraph text-white mt-3 mt-lg-0'>I’m Sachin Mourya, a MERN stack developer skilled in building fast, responsive, and user-friendly web applications. I work with HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React.js, Next.js, Node.js, and MongoDB. I also use Redux, TanStack Query, and Shadcn UI to create efficient front-end workflows. With experience in Git, GitHub, CI/CD pipelines, and deployments on Vercel, Netlify, and Render, I focus on delivering reliable and scalable solutions.</p>

                            <div className="skills-percentage-section mt-5">
                                <motion.div initial={{opacity: 0, y:50}} whileInView={{opacity:1 ,y:0}} transition={{duration : 0.6 , ease : "easeOut"}} viewport={{once : false , amount : 0.5}}>
                                <div className='w-100 d-flex align-items-center justify-content-between mt-3'>
                                    <span className='text-white col-1'>HTML</span>
                                    <div className='col-7 col-md-10 d-flex rounded' style={{ background: '#d3d3d336' }}><span className='skill-percentage col-9'></span></div>
                                </div>
                                </motion.div>

                                <motion.div initial={{opacity: 0, y:50}} whileInView={{opacity:1 ,y:0}} transition={{duration : 1 , ease : "easeOut"}} viewport={{once : false , amount : 0.5}}>
                                    <div className='w-100 d-flex align-items-center justify-content-between mt-3'>
                                    <span className='text-white col-1'>CSS</span>
                                    <div className='col-7 col-md-10 d-flex rounded' style={{ background: '#d3d3d336' }}><span className='skill-percentage col-9'></span></div>
                                </div>
                                </motion.div>
                                <motion.div initial={{opacity: 0, y:50}} whileInView={{opacity:1 ,y:0}} transition={{duration : 2 , ease : "easeOut"}} viewport={{once : false , amount : 0.5}}>
                                    <div className='w-100 d-flex align-items-center justify-content-between mt-3'>
                                    <span className='text-white col-1'>JavaScript</span>
                                    <div className='col-7 col-md-10 d-flex rounded' style={{ background: '#d3d3d336' }}><span className='skill-percentage col-7'></span></div>
                                </div>
                                </motion.div>
                                <motion.div initial={{opacity: 0, y:50}} whileInView={{opacity:1 ,y:0}} transition={{duration : 3 , ease : "easeOut"}} viewport={{once : false , amount : 0.5}}>
                                    <div className='w-100 d-flex align-items-center justify-content-between mt-3'>
                                    <span className='text-white col-1'>Bootstrap</span>
                                    <div className='col-7 col-md-10 d-flex rounded' style={{ background: '#d3d3d336' }}><span className='skill-percentage col-9'></span></div>
                                </div>
                                </motion.div>
                                <motion.div initial={{opacity: 0, y:50}} whileInView={{opacity:1 ,y:0}} transition={{duration : 4 , ease : "easeOut"}} viewport={{once : false , amount : 0.5}}>
                                    <div className='w-100 d-flex align-items-center justify-content-between mt-3'>
                                    <span className='text-white col-1'>Tailwindcss</span>
                                    <div className='col-7 col-md-10 d-flex rounded' style={{ background: '#d3d3d336' }}><span className='skill-percentage col-7'></span></div>
                                </div>
                                </motion.div>
                                <motion.div initial={{opacity: 0, y:50}} whileInView={{opacity:1 ,y:0}} transition={{duration : 4 , ease : "easeOut"}} viewport={{once : false , amount : 0.5}}>
                                    <div className='w-100 d-flex align-items-center justify-content-between mt-3'>
                                    <span className='text-white col-1'>React.js</span>
                                    <div className='col-7 col-md-10 d-flex rounded' style={{ background: '#d3d3d336' }}><span className='skill-percentage col-10'></span></div>
                                </div>
                                </motion.div>
                                <motion.div initial={{opacity: 0, y:50}} whileInView={{opacity:1 ,y:0}} transition={{duration : 4 , ease : "easeOut"}} viewport={{once : false , amount : 0.5}}>
                                    <div className='w-100 d-flex align-items-center justify-content-between mt-3'>
                                    <span className='text-white col-1'>Next.js</span>
                                    <div className='col-7 col-md-10 d-flex rounded' style={{ background: '#d3d3d336' }}><span className='skill-percentage col-9'></span></div>
                                </div>
                                </motion.div>
                                 <motion.div initial={{opacity: 0, y:50}} whileInView={{opacity:1 ,y:0}} transition={{duration : 4 , ease : "easeOut"}} viewport={{once : false , amount : 0.5}}>
                                    <div className='w-100 d-flex align-items-center justify-content-between mt-3'>
                                    <span className='text-white col-1'>Node.js</span>
                                    <div className='col-7 col-md-10 d-flex rounded' style={{ background: '#d3d3d336' }}><span className='skill-percentage col-7'></span></div>
                                </div>
                                </motion.div>
                                <motion.div initial={{opacity: 0, y:50}} whileInView={{opacity:1 ,y:0}} transition={{duration : 4 , ease : "easeOut"}} viewport={{once : false , amount : 0.5}}>
                                    <div className='w-100 d-flex align-items-center justify-content-between mt-3'>
                                    <span className='text-white col-1'>MongoDB</span>
                                    <div className='col-7 col-md-10 d-flex rounded' style={{ background: '#d3d3d336' }}><span className='skill-percentage col-8'></span></div>
                                </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme