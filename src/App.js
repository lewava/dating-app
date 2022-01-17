import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import User from "./pages/User";
import Profile from "./pages/Profile";
import StartPage from "./pages/StartPage";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    let currentUsers = JSON.parse(localStorage.getItem("users"));
    if (!currentUsers) {
      const guest = {
        email: "gäst",
        password: "password",
        profile: {
          name: "",
          age: 0,
          interest: "",
          location: ""
        }
      };

      const defaultUsers = [guest];
			localStorage.setItem("users", JSON.stringify(defaultUsers));
		}
	}, []);

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
