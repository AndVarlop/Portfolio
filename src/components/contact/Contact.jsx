import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const contact = () => {
  return (
    <section id='contact'>
      <h3 className='text-light'>Get In Touch</h3>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h6>developer.andvarlop@gmail.com</h6>
            <a href="mailto:developer.andvarlop@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h6>AndVarShooter</h6>
            <a href="https://m.me/AndVarShooter"  target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h6>+57 3022594069</h6>
            <a href="https://api.whatsapp.com/send?phone=573022594069" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPCIONS*/}
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name="email" placeholder='Your Email' required/>
          <textarea name="message" cols="30" rows="8" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact