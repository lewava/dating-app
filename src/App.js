import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import User from "./pages/User";
import Profile from "./pages/Profile";
import StartPage from "./pages/StartPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<StartPage />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

/* ROUTES TO ADD*/
// /user/edit ( ändra KONTOT, även delete konto )
// /search (är dashboard)
// /message (chat)
