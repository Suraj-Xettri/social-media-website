import { Login } from "./forms/Login"
import { Register } from "./forms/Register"
import Home from "./components/home/Home"
import Nav from "./navbar/Nav"
import { BrowserRouter as Router , Routes, Route } from "react-router-dom"

function App() {
  return (
   <div className="relative bg-black h-full w-full">
    
    <Router>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />

      </Routes>
    </Router>
   </div>
  )
}

export default App
