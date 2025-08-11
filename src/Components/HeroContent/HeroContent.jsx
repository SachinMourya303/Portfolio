import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "/src/Components/HeroContent/HeroContent.css"
import { NavLink } from 'react-router-dom'

const HeroContent = () => {
  return (
    <div>
        <div className="conatiner d-flex justify-content-center">
            <div className="d-flex flex-column align-items-center">
              <div className="herocontent mt-5">
                <img src="/img/IMG_20250727_191836.jpg" alt="" className='w-100'/>
            </div>
            <div className='herocontent-label d-flex flex-wrap justify-content-center mt-3'>
                <div className='w-75 text-center'><span className='name-brand'>I'm Sachin Mourya,</span> <span className='field'>frontend developer</span></div>
            </div>

            <div className="herocontent-introduction d-flex justify-content-center w-100 text-center">
              <p className='w-75 text-white'>Hi , I'm Sachin Mourya, a frontend developer who enjoys bulding clean and responsive website. I love turning designs into real, user friendly interface.</p>
            </div>

            <div className="media-icons d-flex justify-content-between col-6 col-md-2">
              <a href='https://www.instagram.com/sachinmourya_14/' className='media-icon bi bi-instagram'></a>
              <a href='https://www.threads.com/@sachinmourya_14?xmt=AQF08L6L6fSQsAnl6T0ljKd1FuPObTXx68Hw09ptjKFKg_g' className='media-iocn bi bi-threads'></a>
              <a href='https://github.com/SachinMourya303' className='media-iocn bi bi-github'></a>
              <a href='https://www.linkedin.com/in/sachin-mourya-b3ab11374/' className='media-iocn fw-bold'>in</a>
            </div>

            <div className='herocontent-btns d-flex justify-content-center w-100 mt-5'>
              <div className='w-75 d-flex justify-content-center flex-wrap'>
                <div className='btn'>
                    <NavLink to="https://www.linkedin.com/in/sachin-mourya-b3ab11374/" className='connect-with-me-btn btn border-0 rounded-5 text-white fs-5' style={{width:"200px"}}>Connect With Me</NavLink>
                </div>
                <div className='btn'>
                    <a href='/img/SachinMourya.pdf' download className='resume-btn btn border border-white rounded-5 text-white fs-5' style={{width:"200px"}}>My Resume</a>
                </div>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HeroContent