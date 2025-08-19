import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProfileDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data for demonstration
  const profileData = {
    mb: { name: "Sri R Mahaboob Basha", title: "State Chief Information Commissioner", details: "Detailed bio and info about Mahaboob Basha." },
    sj: { name: "Sri P. Samuel Jonathan", title: "State Chief Information Commissioner", details: "Detailed bio and info about Samuel Jonathan." },
    cs: { name: "Sri Chavali Sunnel", title: "State Chief Information Commissioner", details: "Detailed bio and info about Chavali Sunnel." }
  };

  const profile = profileData[id];

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div>
      <h2>{profile.name}</h2>
      <h4>{profile.title}</h4>
      <p>{profile.details}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default ProfileDetail;
