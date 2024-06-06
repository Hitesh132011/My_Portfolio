import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return (
                <a href={work.w_link}><img key={index} src={work.w_img} alt=''/><h5>{work.w_name}</h5></a>
            )

            })}
        </div>
       <a href="https://github.com/Hitesh132011"> <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
        </a>
      
    </div>
  )
}

export default MyWork
