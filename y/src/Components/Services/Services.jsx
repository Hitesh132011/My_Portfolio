import React from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg'; // Import arrow icon here
import Services_Data from '../../assets/services_data.js';

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>Services Avail</h1>
        <img src={theme_pattern} alt="Theme pattern" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => (
         <a href={service.s_link}><div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-readmore">
              <p>Go Through</p>
              <img src={arrow_icon} alt="Arrow icon" />
            </div>
          </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Services;
