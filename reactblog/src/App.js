import Home from "./pages/home/Home"
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Route, Routes, Link, BrowserRouter } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Link to="/Home"></Link>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          
          
       

       </Routes>
       
       
       </BrowserRouter>




    </div>
  )
}
