import Topbar from "./components/Topbar/Topbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Home from "./pages/home/Home.jsx";
import"./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Topbar></Topbar>
      <div className="container">
      <Sidebar></Sidebar>
          <Route path="/" element={<Navigate to ="/home" />}/>
          <Route path="/home" element={<Home />} />
        </div>
          
       
          
       
    </Routes>
  </BrowserRouter>
      
      
      
   
  );
}

export default App;
