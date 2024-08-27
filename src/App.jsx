import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from './Components/User/Login';
import { Signup } from './Components/User/Signup';
import { AdminLogin } from './Components/Admin/AdminLogin';
import { AdminSignup } from './Components/Admin/AdminSignup';
import { MainPage } from "./Components/MainpageContent/MainPage";
import { AdminPage } from "./Components/Admin/AdminPage";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/adminlogin" element={<AdminLogin/>}/>
          <Route path="/adminsignup" element={<AdminSignup/>}/>
          <Route path="/adminpage" element={<AdminPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
