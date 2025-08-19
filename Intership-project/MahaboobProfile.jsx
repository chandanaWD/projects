import React from 'react';
import { useNavigate } from 'react-router-dom';

const MahaboobProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="profile-container">
      <h1 className="profile-heading">Profile</h1>

      <div className="profile-box">
        {/* Left Section: Image and Name */}
        <div className="profile-left">
          <img 
            src="mb.jpg" 
            alt="Sri R Mahaboob Basha" 
            className="profile-pic"
          />
          <h2>Sri R Mahaboob Basha</h2>
          <p className="designation">State Chief Information Commissioner</p>
        </div>

        {/* Right Section: Profile Details */}
        <div className="profile-right">
          <h3 className="details-heading">Biography</h3>
          
          <div className="detail-row">
            <span className="detail-label">Name:</span>
            <span className="detail-value">R Mahaboob Basha</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Designation:</span>
            <span className="detail-value">State Chief Information Commissioner</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Date of Birth:</span>
            <span className="detail-value">26th October 1960</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Education:</span>
            <span className="detail-value">BACHELOR OF ARTS IN HISTORY, ECONOMICS AND POLITICAL SCIENCE (B.A)</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Email:</span>
            <span className="detail-value">cic-apic@ap.gov.in</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Phone:</span>
            <span className="detail-value">+91-9876543210</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Address:</span>
            <span className="detail-value">1st Floor, MGM Capital, Chinnakakani (V), Mangalagiri(M), Guntur District-522503</span>
          </div>

          <div className="detail-row">
            <span className="detail-label">Experience:</span>
            <a href="cv.pdf" target="_blank" rel="noopener noreferrer" className="cv-link">View CV</a>
          </div>
        </div>
      </div>

      <button 
        onClick={() => navigate(-1)} 
        className="back-button"
      >
        Back
      </button>
    </div>
  );
};

export default MahaboobProfile;
