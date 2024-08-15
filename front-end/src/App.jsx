import { Login } from "./forms/Login";
import { Register } from "./forms/Register";
import Home from "./components/home/Home";
import Nav from "./navbar/Nav";
import Post from "./components/posts/Post";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notification from "./components/notification/Notification";
import Sidebar from './components/Sidebar/Sidebar'
import { useState } from "react";
import CreatePost from "./components/CreatePost/CreatePost";
function App() {

  const[create, setCreate] = useState(false)

  const handleCreate = () =>{
    setCreate((p)=>!p)
  }
  return (
    <div className="relative bg-white">
      <Router>
        <Nav />
        <Sidebar handleCreate={handleCreate}/>
        {create? <CreatePost handleCreate={handleCreate}/>: ""}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Post />} />
        </Routes>
        <Notification/>
      </Router>
    </div>
  );
}

export default App;
