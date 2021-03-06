import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login-user.scss'

//Logout function
export function logOut() {localStorage.removeItem("activeUser");}

const LoginUser = () => {
  const [loginFail, setLoginFail] = useState(false);

  const navigate = useNavigate();

  function checkUser(e) {
    e.preventDefault();
    const userEmail = e.target[0].value;
    const password = e.target[1].value;
    const users = JSON.parse(localStorage.getItem("users"));
    users.forEach(user => {
      if (user.email === userEmail && user.password === password) {
        localStorage.setItem('activeUser', JSON.stringify(user));
        navigate('/profile');
      } else {
        setLoginFail(true);
      }
    })
  }


  return (
    <section className="login-user-wrapper">
      <h2>Logga in</h2>
      <form onSubmit={checkUser}>
        <label htmlFor="user-email">E-mail</label>
        <input type="text" name="user-email" />
        <label htmlFor="password">Lösenord</label>
        <input type="password" name="password" />
        <input type="submit" name="create" value={"Logga in"} />
      </form>
      {loginFail && <p>Fel inloggningsuppgifter</p>}
    </section>
  );
}

export default LoginUser;