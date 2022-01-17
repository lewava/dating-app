import { useState } from 'react'


const ProfileField= ({content, editProfile, id, type}) => {

  const [name, setName] = useState(content);

  // function saveToLocaleStorage() {
  //   const profile = {
  //     name: name,
  //     age: 'test',
  //     location: 'test',
  //     interest: 'test'
  //   }
  // }

    return (
      <>
        {editProfile ? <input type={type} id={id} name={id} value={name} onChange={e => setName(e.target.value)} 
        // onBlur={changeName}
        /> : content}
      </>
    );
  };
  
  export default ProfileField;