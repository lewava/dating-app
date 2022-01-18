import { useState } from "react";


const ProfileField= ({newContent, content, editProfile, id, type}) => {

  const [currentContent, setCurrentContent] = useState(content);

  function updateContent(value) {
    setCurrentContent(value);
    newContent(value);
  }
    return (
      <>
        {editProfile ? <input type={type} id={id} name={id} value={currentContent} onChange={(e) => updateContent(e.target.value)} 
        /> : content}
      </>
    );
  };
  
  export default ProfileField;