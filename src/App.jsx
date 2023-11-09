import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import Login from "./pages/login"

function App() {

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
  )
}

export default App