import React from 'react'
import "./Courses.css"
import TitleSection from '../TitleSection/TitleSection'
import CoursesboxProps from './CoursesboxProps'

function Courses() {
  return (
    <div>

<div className="container my-5 ro-pad-section ">
    <div className='my-5'>
      <TitleSection title="Browse Top Categroy"/>
    </div>
      <div className=" ro-grid">
        
        <CoursesboxProps icon="fa-solid fa-atom fs-3" name="science" number="5.491 courses" />
        <CoursesboxProps icon="fa-solid fa-briefcase fs-3 " name="busines" number="6.461 courses" />
        <CoursesboxProps icon="fa-regular fa-calendar-days fs-3" name="finance accounting" number="7.491 courses" />
        <CoursesboxProps icon="fa-solid fa-paintbrush fs-3" name="design" number="6.421 courses" />
        <CoursesboxProps icon="fa-solid fa-music fs-3" name="music" number="6.431 courses" />
        <CoursesboxProps icon="fa-solid fa-square-poll-vertical fs-3" name="marketing" number="4.491 courses" />
        <CoursesboxProps icon="fa-solid fa-camera fs-3" name="photography" number="6.491 courses" />
        <CoursesboxProps icon="fa-solid fa-snowflake fs-3" name="animation" number="2.491 courses" />

      


      </div>

    

    </div>
    </div>
  )
}

export default Courses