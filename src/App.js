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
      const guests = [
        {
          email: "gäst",
          password: "password",
          profile: {
            name: "gästen",
            age: 47,
            interest: "Jag tycker om innebandy och fotboll.",
            location: "Stockholm"
          }
        },
        {
          email: "pär",
          password: "password",
          profile: {
            name: "Pär",
            age: 31,
            interest: "Jag tycker om ishockey och fotboll.",
            location: "Göteborg"
          }
        },
        {
          email: "edvard",
          password: "password",
          profile: {
            name: "edvard",
            age: 18,
            interest: "Jag tycker om slagsmålssporter och huliganer.",
            location: "Jokkmokk"
          }
        }
      ];
			localStorage.setItem("users", JSON.stringify(guests));
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
