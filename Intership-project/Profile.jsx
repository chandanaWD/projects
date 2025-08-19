import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className='profile'>
      <h2>Chief IC/State IC's Profile</h2>

      <div className='sic1'>
        <img className='mb' src="mb.jpg" alt="Mahaboob Basha" />
        <h3>Sri R Mahaboob Basha</h3>
        <p><i>State Chief Information Commissioner</i></p>
        <button className='mb' onClick={() => navigate('/mahaboob-profile')}>
          View Profile
        </button>
      </div>

      <div className="sic-container">
        <div className="sic-card">
          <img className="sj" src="sj.jpg" alt="Sri P. Samuel Jonathan" />
          <h5>Sri P. Samuel Jonathan</h5>
          <p><i>State Chief Information Commissioner</i></p>
          <button onClick={() => navigate('/samuel-profile')}>
            View Profile
          </button>

        </div>

        <div className="sic-card">
          <img className="cs" src="cs.png" alt="Sri Chavali Sunnel" />
          <h5>Sri Chavali Sunnel</h5>
          <p><i>State Chief Information Commissioner</i></p>
          <button onClick={() => navigate('/chavali-profile')}>
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
