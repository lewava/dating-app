import { Link } from 'react-router-dom';
import styles from "../styles/startpage.scss";
import pic from "../assets/image/dating.jpg";
const StartPage = () => {
  return (
    <div>
		<div>
		<nav className='startpageNav'>
			<Link to='/' className="NavTitle">IDate</Link>
			<Link to='Login' className="NavItem">Login</Link>
			<Link to='user'  className="NavItem">SignUp</Link>
		</nav>
		</div>
		<div className='container'>
		
				<h1 className="datingheading">Its never late to find love...</h1>
      
			
			
             <img src={pic} className="datingImage"></img>
			
			

		</div>
   
    </div>
  )
}
export default StartPage