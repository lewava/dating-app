import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login-user.scss'

export function logOut() {localStorage.removeItem("activeUser");}

const LoginUser = () => {
  const [loginFail, setLoginFail] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let currentUsers = JSON.parse(localStorage.getItem("users"));

    if (!currentUsers) {
      const guest = {
        email: "gäst",
        password: "password"
      };

      const defaultUsers = [
        guest
      ];

      localStorage.setItem("users", JSON.stringify(defaultUsers));
    }
  }, []);

  function checkUser(e) {
    e.preventDefault();
    const userEmail = e.target[0].value;
    const password = e.target[1].value;
    const users = JSON.parse(localStorage.getItem("users"));
    users.forEach(user => {
      if (user.email === userEmail && user.password === password) {
        localStorage.setItem('activeUser', JSON.stringify(user));

        //NAVIGATE.. utan "/" blir det subdomän, med tillbaka till roten!
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