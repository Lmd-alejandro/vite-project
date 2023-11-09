import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/register"

function App() {

    return (
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
  )
}

export default App
