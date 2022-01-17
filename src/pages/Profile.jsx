import { useState } from 'react';
import DisplayProfile from './../components/DisplayProfile';
import './../components/profile.css';


const ProfileView = () => {

  const [editProfile, setEditProfile] = useState(0);

  function switchMode() {
    setEditProfile(!editProfile);
  }


  return (
    <div>
      <h1>Profile</h1>
      {editProfile ? null : <button onClick={switchMode}>Edit profile</button>}

      <DisplayProfile editProfile={editProfile} switchMode={switchMode}/>
    </div>
  );
};

export default ProfileView;
