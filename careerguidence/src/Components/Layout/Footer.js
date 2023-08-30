import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer '>
      <h4>Everything about your career</h4>
      <p className='text-center mt-3'>
        <Link to="/locationselection">Location</Link>
        <Link to="/collegelist" >College List</Link>
        <Link to="/careerselection">Career Selection</Link>

      </p>
    </div>
  )
}

export default Footer
