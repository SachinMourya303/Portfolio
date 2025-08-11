import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "/src/Components/Contact/Contact.css"

const Contact = () => {
  return (
    <div>
      <div className="contact-container d-flex flex-column align-items-center">
        <div className='d-flex flex-column'>
          <span className='contact-heading'>Get In Touch</span>
          <span className='contact-bar w-75'></span>
        </div>

        <div className="d-flex justify-content-around col-8 mt-5 flex-wrap">
          <div className="left-content col-12 col-lg-4">
            <div className='d-flex flex-column'>
              <span className='lets-talk-text'>Let's talk</span>
              <span className='text-white mt-3'><i className='bi bi-envelope-fill  fs-5 me-3'></i> sachinmourya303@gmail.com</span>
              <span className='text-white mt-3'><i className='bi bi-telephone-fill fs-5  me-3'></i> 9359489354</span>
              <div className='media-contact d-flex justify-content-between col-4  mt-3'>
                <a href='https://www.instagram.com/sachinmourya_14/' className='media-icon bi bi-instagram'></a>
                <a href='https://www.threads.com/@sachinmourya_14?xmt=AQF08L6L6fSQsAnl6T0ljKd1FuPObTXx68Hw09ptjKFKg_g' className='media-iocn bi bi-threads'></a>
                <a href='https://github.com/SachinMourya303' className='media-iocn bi bi-github'></a>
                <a href='https://www.linkedin.com/in/sachin-mourya-b3ab11374/' className='media-iocn fw-bold'>in</a>
              </div>
            </div>
          </div>

          <div className="right-content col-12 col-lg-6">
            <form action="https://api.web3forms.com/submit" method="POST" className='d-flex flex-column'>
              <input type="hidden" name="access_key" value="bb770dec-7702-4229-a48f-1fd79d148cb2" />
              <input type="text" name='name' placeholder='Enter Name' />
              <input type="email" name='email' placeholder='Enter Email' />
              <textarea name="messgae" placeholder='Enter Message'></textarea>
              <input type="checkbox" name="botcheck" class="hidden" style={{ display: " none" }} />

              <button className='btn col-4 border-0 mt-5'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact