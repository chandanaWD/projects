import React from 'react'
import { Link } from 'react-router-dom'

const CitizenService = () => {
  return (
    <div>
      <div className="citizen-service-container">
      <h1 className='citizen-title'>Citizen Services</h1>
      <div className="citizen">
        <div className="citizen-box"><Link to="/cause-list">Cause List</Link></div>
        <div className="citizen-box"><Link to="/decision">Decision</Link></div>
        <div className="citizen-box"><Link to="/help1">Help</Link></div>
      </div>
    </div>
    </div>
  )
}

export default CitizenService;