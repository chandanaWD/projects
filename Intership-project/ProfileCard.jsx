import React from 'react';

const ProfileCard = ({ profile, onViewProfile }) => {
  return (
    <div className="profile-card">
      <img src={profile.image} alt={profile.name} className="profile-pic" />
      <h3>{profile.name}</h3>
      <p><i>{profile.title}</i></p>
      <button onClick={() => onViewProfile(profile.id)}>View Profile</button>
    </div>
  );
};

export default ProfileCard;
