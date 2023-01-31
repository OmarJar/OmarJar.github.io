import React, { useRef, useState, useEffect } from 'react'
import emailjs from "@emailjs/browser"
import Toastify from "toastify-js"
import "./index.scss"
import { AnimationOnScroll } from 'react-animation-on-scroll'
const Contact = () => {
  const [visible, setVisible] = useState(false)
  const refForm = useRef()
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setVisible(true)
    }, 1500)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      "service_fqxdgbl",
      "template_xvo2zzg",
      refForm.current,
      "Z6nsiz9GNfedKizCA"
    ).then(
      () => {
        Toastify({
          text: "Message successfully sent!",
          duration: 4000,
          gravity: "top",
          position: "center",
          style: {
            background: "rgb(49, 176, 49)",
            borderRadius: "20px"
          },
        }).showToast()
      },
      () => {
        Toastify({
          text: "Failed to send the message, please try again",
          duration: 4000,
          gravity: "top",
          position: "center",
          style: {
            background: "red",
            borderRadius: "20px"
          },
        }).showToast()
      }
    )
  }
  return (
    <>
      {visible && <div className="contact-page">
        <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.5} animateOnce={true}>
          <h4>Get in Touch</h4>
          <p>Feel free to contact me about work or requesting any questions or connection, I'll be happy to get in touch with you :)</p>
          <form ref={refForm} onSubmit={sendEmail} className="contact-form" autoComplete="off">
            <div className="first">
              <div className="input-area">
                <input name="name" type="text" className="effect-1" placeholder="Name" required />
                <span className="focus-border"></span>
              </div>
              <div className="input-area">
                <input name="email" type="email" className="effect-1" placeholder="Email" required />
                <span className="focus-border"></span>
              </div>
            </div>
            <div className="input-area">
              <input name="subject" type="text" className="effect-1" placeholder="Subject" required />
              <span className="focus-border"></span>
            </div>
            <div className="input-area">
              <textarea name="message" type="text" className="effect-1" placeholder="Message" required />
              <span className="focus-border"></span>
            </div>
            <div className="btn-container">
              <button id="btn" className="contact-btn">
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path id="arrow" fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                    </svg>
                  </div>
                </div>
                <span>Send</span>
              </button>
            </div>
          </form>
        </AnimationOnScroll>
      </div>}
    </>
  )
}
export default Contact