import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChavaliProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="profile-container">
      {/* Heading */}
      <h1 className="profile-heading">Profile</h1>

      {/* White Box */}
      <div className="profile-box">
        {/* Left Section: Image and Name */}
        <div className="profile-left">
          <img 
            src="cs.png" 
            alt="Sri Chavali Sunnel" 
            className="profile-pic"
          />
          <h2>Sri Chavali Sunnel</h2>
          <p className="designation">State Information Commissioner</p>
        </div>

        {/* Right Section: Profile Details */}
        <div className="profile-right">
          <h3 className="details-heading">Profile Details</h3>
          <div className="details">
            <div className="detail-row">
              <span className="detail-label">Name:</span>
              <span className="detail-value">Chavali Sunnel</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Designation:</span>
              <span className="detail-value">State Information Commissioner</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Date of Birth:</span>
              <span className="detail-value">10th December 1970</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Education:</span>
              <span className="detail-value">Bachelor of Law (LLB)</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Email:</span>
              <span className="detail-value">sic-cs@ap.gov.in</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Phone:</span>
              <span className="detail-value">+91-9876543212</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Address:</span>
              <span className="detail-value">3rd Floor, MGM Capital, Chinnakakani, Mangalagiri, Guntur District - 522503</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Experience:</span>
              <a href="chavali_cv.pdf" target="_blank" rel="noopener noreferrer" className="cv-link">View CV</a>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)} 
        className="back-button"
      >
        Back
      </button>
    </div>
  );
};

export default ChavaliProfile;
