import { useEffect, useState } from 'react';
import './../components/profile.css';
import ProfileField from './../components/ProfileField';

const DisplayProfile= ({editProfile, switchMode}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const activeUser = localStorage.getItem('activeUser');
    console.log(activeUser);
    // if (!activeUser) return <></>;
    setUser(JSON.parse(activeUser));
  },[]);

  return (
    <div>
    { user && 
      <>
        <section>
          <article>
            <img className="profileimg" src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=170667a&w=0&h=FXkT-N6vISLOCUefa9MyQg0pH-6loMX9zBZjgLK458c=" alt='#'/>
          </article>
          <article>
            <span>Namn</span>
            <span>
              <ProfileField content={user.profile.name} editProfile={editProfile} id="name" type="text"/>
            </span>
            <span>Ålder</span>
            <span>
              <ProfileField content={user.profile.age} editProfile={editProfile} id="age" type="number"/>
            </span>

            {/* test */}
            <span>Ort</span>
            <span>
              <ProfileField content={user.profile.location} editProfile={editProfile} id="location" type="text"/>
            </span>
            <span>Intressen</span>
            <span>
              <ProfileField content={user.profile.interest} editProfile={editProfile} id="interest" type="text"/>
            </span>

            {/* <span>Ort</span><span>Stockholm</span>
            <span>Intressen</span><span>Details</span> */}
          </article>
        </section>
        {editProfile ? <button onClick={switchMode}>Cancel</button> : null}
      </>}
        
        </div>
    );
  };
  
  export default DisplayProfile;