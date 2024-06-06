import React from 'react'
import './Contact.css'
import themePattern from '../../assets/theme_pattern.svg'
import mailIcon from '../../assets/mail_icon.svg'
import locationIcon from '../../assets/location_icon.svg'
import callIcon from '../../assets/call_icon.svg'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d2a6712b-61e2-49e0-ad8b-a0b33dca624d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
     // console.log("Success", res);
     alert(res.message);
    }
  };
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={themePattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects, so feel free to contact</p>
          <div className="contact-details">
          <div className="contact-detail">
            <img src={mailIcon} alt="" /><p>hiteshmohanty33@gmail.com</p>
          </div>
          <div className="contact-detail">
            <img src={callIcon} alt="" /><p>+918984712639</p>
          </div>
          <div className="contact-detail">
            <img src={locationIcon} alt="" /><p>Keonjhar,Odisha,India</p>
          </div>
        </div>
        </div>
      
      <form onSubmit={onSubmit} className="contact-right">
        <label htmlFor="name">Your Name</label>
        <input type="text" placeholder="Enter Your name" name="name" />
        <label htmlFor="email">Your Email</label>
        <input type="email" placeholder="Enter Your email" name="email" />
        <label htmlFor="message">Write Your Message</label>
        <textarea name="message" rows="8" placeholder="Enter Your message"></textarea>
        <button type="submit" className="contact-submit">Submit Now</button>
      </form>
      </div>
    </div>
  )
}

export default Contact
