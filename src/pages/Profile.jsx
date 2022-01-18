import { useState } from "react";
import DisplayProfile from "./../components/DisplayProfile";
import Nav from "../components/nav/Nav";
import "./../components/profile.css";

const ProfileView = () => {
  const [editProfile, setEditProfile] = useState(0);

  function switchMode() {
    setEditProfile(!editProfile);
  }

  return (
    <>
      <Nav />
      <div className="div-wrapper">
        <h2>Profil</h2>
        {editProfile ? null : (
          <button onClick={switchMode}>Edit profile</button>
        )}

        <DisplayProfile editProfile={editProfile} switchMode={switchMode} />
      </div>
    </>
  );
};

export default ProfileView;
