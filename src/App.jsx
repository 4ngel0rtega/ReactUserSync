import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/login.jsx';
import Register from './pages/Register.jsx'
import DashBoard from './pages/DashBoard.jsx'
import RootWeb from './rootWeb.jsx';
import Reset from './pages/Reset.jsx';


function App() {

  return (
    <>
      <Router>
        <Routes >

          <Route path="/" element={<RootWeb />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/DashBoard" element={<DashBoard />} />
          <Route path="/Reset" element={<Reset />} />

        </Routes>

      </Router>
    </>
  )
}

export default App
