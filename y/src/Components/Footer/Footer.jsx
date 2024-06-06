import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <h1>Hitesh</h1>
                <p>I am a full stack web developer  along with it i am proficient in the field of machine learning and deep learning</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <input type="email" placeholder='Enter your email' name="" id="" />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">
                copyright 2024 Hitesh Mohanty :All rights
            </p>
            <div className="footer-bottom-right">
                <p>Terms of policy</p>
                <p>Privacy policy</p>
                <p>Connect with me</p>

            </div>
        </div>
      
    </div>
  )
}

export default Footer
