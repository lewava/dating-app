import { useEffect, useState } from 'react';
import './../components/profile.css';
import ProfileField from './../components/ProfileField';

const DisplayProfile= ({editProfile, switchMode}) => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [interest, setInterest] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    const LSUser = localStorage.getItem('activeUser');
    const activeUser = JSON.parse(LSUser);

    if (activeUser){
      setUser(activeUser);
      setName(activeUser.profile.name)
      setAge(activeUser.profile.age)
      setInterest(activeUser.profile.interest)
      setLocation(activeUser.profile.location)
    }
  },[]);

  function saveProfile() {
    const newProfile = {
      email: user.email,
      password: user.password,
      profile: {
        name,
        age,
        interest,
        location
      }
    }
    console.log(newProfile);
    localStorage.setItem('activeUser', JSON.stringify(newProfile));
    let allUsers = JSON.parse(localStorage.getItem('users')); 
    //gör en rad
    const index = allUsers.findIndex(user => user === newProfile);
    allUsers.slice(index, 1);
    allUsers.push(newProfile);
    setUser(JSON.parse(localStorage.getItem('activeUser')))
    switchMode();
  }

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
              <ProfileField newContent={setName} content={user.profile.name} editProfile={editProfile} id="name" type="text"/>
            </span>
            <span>Ålder</span>
            <span>
              <ProfileField newContent={setAge} content={user.profile.age} editProfile={editProfile} id="age" type="number"/>
            </span>

            {/* test */}
            <span>Ort</span>
            <span>
              <ProfileField newContent={setLocation} content={user.profile.location} editProfile={editProfile} id="location" type="text"/>
            </span>
            <span>Intressen</span>
            <span>
              <ProfileField newContent={setInterest} content={user.profile.interest} editProfile={editProfile} id="interest" type="text"/>
            </span>

            {/* <span>Ort</span><span>Stockholm</span>
            <span>Intressen</span><span>Details</span> */}
          </article>
        </section>
        {editProfile ? <button onClick={switchMode}>Avbryt</button> : null}
        {editProfile ? <button onClick={saveProfile}>Spara</button> : null}
      </>}
        
        </div>
    );
  };
  
  export default DisplayProfile;