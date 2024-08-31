import { Login } from "./forms/Login";
import { Register } from "./forms/Register";
import Home from "./components/home/Home";
import Nav from "./navbar/Nav";
import Post from "./components/posts/Post";
import Profile from "./components/Profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notification from "./components/notification/Notification";
function App() {
  
  return (
    <div className="relative w-screen bg-white">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Post />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
        <Notification />
      </Router>
    </div>
  );
}

export default App;
