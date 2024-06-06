import React from 'react';
import './Hero.css';
import profileImg from '../../assets/myimage.jpg'; // Assuming profile_img.svg is the image file
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  const handleButtonClick = () => {
    window.location.href = 'https://www.google.com';
  };
  return (
    <div  id='home' className='hero'>
      <img src={profileImg} alt="Profile" style={{ maxWidth: '70%', height: 'auto' }} />
      <h1><span>Meet Me, Hitesh Mohanty:</span> Web Developer and Data Scientist Extraordinaire!</h1>
      <p>Passionate web developer and data scientist, creating innovative digital solutions.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
        <div className="hero-resume"><a href="https://drive.google.com/file/d/18Pm3_XYdkI0OJdoepCudtaM_N7zf-oqm/view?usp=sharing" target="_blank" rel="noopener noreferrer">My Resume</a></div>
      </div>
    </div>
  );
}
export default Hero;
