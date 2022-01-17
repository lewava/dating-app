import { useState } from 'react'
import { useEffect } from "react";


const ProfileField= ({content, editProfile, id, type}) => {

  const [name, setName] = useState(content);


    return (
      <>
        {editProfile ? <input type={type} id={id} name={id} value={name} onChange={e => e.target.value}/> : content}
      </>
    );
  };
  
  export default ProfileField;