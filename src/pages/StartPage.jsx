import { Link } from "react-router-dom";
import pic from "../assets/image/dating.jpg";
import "../styles/startpage.scss";

const StartPage = () => {
  return (
    <div>
      <div>
        <nav className="startpageNav">
          <Link to="/" className="NavTitle">
            iDate
          </Link>
          <Link to="Login" className="NavItem">
            Logga in
          </Link>
          <Link to="user" className="NavItem">
            Skapa konto
          </Link>
        </nav>
      </div>
      <div className="container">
        <h1 className="datingheading">Its never late to find love...</h1>
        <img src={pic} className="datingImage" alt="#"></img>
      </div>
    </div>
  );
};
export default StartPage;
