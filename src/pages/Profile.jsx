import { useState } from 'react';
import DisplayProfile from '../components/DisplayProfile';
import '../components/profile.scss';

const ProfileView = () => {

  const [editProfile, setEditProfile] = useState(0);

  function switchMode() {
    setEditProfile(!editProfile);
  }

  return (
    <div className='div-wrapper'>
      <h2>Profil</h2>
      {editProfile ? null : <button onClick={switchMode}>Ändra</button>}

      <DisplayProfile editProfile={editProfile} switchMode={switchMode}/>
    </div>
  );
};

export default ProfileView;
