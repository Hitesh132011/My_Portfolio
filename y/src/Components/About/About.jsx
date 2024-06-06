import React from 'react';
import './About.css';
import themePattern from '../../assets/theme_pattern.svg';
import profileImg from '../../assets/myimage.jpg'; // Corrected file extension

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={themePattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profileImg} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I'm Hitesh Mohanty, specializing in Electronics and Telecommunication. My journey encompasses competitive programming, where I thrive on intricate problem-solving.</p>
            <p> I've harnessed the power of Machine Learning and Deep Learning, unleashing their potential in diverse applications. Complementing my expertise, I'm also adept in Frontend development, ensuring a holistic skill set for innovation and effective problem-solving.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>Web Development</p><hr style={{width:"65%"}}></hr></div>
            <div className="about-skill"><p>Ml</p><hr style={{width:"70%"}}></hr></div> {/* Example skill */}
            <div className="about-skill"><p>Dl</p><hr style={{width:"60%"}}></hr></div> {/* Example skill */}
            <div className="about-skill"><p>Coding</p><hr style={{width:"80%"}}></hr></div> {/* Example skill */}
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h3>700+</h3>
          <p> Solved Coding problems</p> 
        </div>
        <hr/>
        <div className="about-achievement">
          <h3>Knight</h3>
          <p>In Leetcode</p> 
        </div>
        <hr/>
        <div className="about-achievement">
          <h3>14+</h3>
          <p>Workings Project</p> 
        </div>
        
        
      </div>
    </div>
  );
}

export default About;
