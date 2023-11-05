import {toast} from 'react-toastify'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm( 'service_0oggkef',
                'template_k8d09ot',
                form.current,
                'l06TSlQnqoYAHpioa')
      .then(
        ()=>{
                 toast.success("message sent")
                 },
                  ()=>{
                   toast.error("something went wrong try again")
                }
      )

      form.current.value=" "
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I am more interested in freelance opportunities,
          large projects and private tutoring. I offer a complete
          six months package that starts from beginner to advanced 
          level. I only attend to students with a reasonable GPA, that
          meets minimum requirements for a programming course. For more information,                   you can reach me using the form below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Enter your name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Enter your email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Dison Obudho,
          <br />
          DonHolm, Nairobi
          <br />
          +254702122421 <br />
          <br />
          <span>disonobudho233@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[-1.2920659, 36.8219462]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-1.2920659, 36.8219462]}>
              <Popup>Dison lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
