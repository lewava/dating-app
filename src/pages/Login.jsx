import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link to="/profile">Logga in</Link>
      <br></br>
      <Link to="/user/create">Skapa ny användare</Link>
    </div>
  );
};

export default Login;
