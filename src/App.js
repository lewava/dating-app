import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import CreateUser from "./pages/CreateUser";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/user/create" element={<CreateUser />} />
          <Route exact path="/profile" element={<Profile />} />
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
