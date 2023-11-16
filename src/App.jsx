import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/register"
import  Home  from "./pages/home"

function App() {

    return (
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
  )
}

export default App
