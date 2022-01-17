import './../components/profile.css';
import ProfileField from './../components/ProfileField';

const DisplayProfile= ({editProfile, switchMode}) => {

    return (
      <div>

        <section>
            <article><img className="profileimg" src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=20&m=476085198&s=170667a&w=0&h=FXkT-N6vISLOCUefa9MyQg0pH-6loMX9zBZjgLK458c=" alt='#'/></article>
            <article>
                <span>Name</span><span><ProfileField content="John Doe" editProfile={editProfile} id="name" type="text"/></span>
                <span>Age</span><span><ProfileField content="33" editProfile={editProfile} id="age" type="number"/></span>
                <span>Location</span><span>Stockholm</span>
                <span>Thing</span><span>Details</span>
                <span>Thing</span><span>Details</span>
            </article>
        </section>

        {editProfile ? <button onClick={switchMode}>Cancel</button> : null}
      </div>
    );
  };
  
  export default DisplayProfile;