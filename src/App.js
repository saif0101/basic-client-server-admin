import Topbar from "./components/Topbar/Topbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Home from "./pages/home/Home.jsx";
import UserList from "./pages/userList/UserList.jsx";
import User from "./pages/user/User.jsx";
import NewUser from "./pages/newUser/NewUser.jsx";
import ProductList from "./pages/productList/ProductList.jsx";
import Product from "./pages/product/Product.jsx";
import NewProduct from "./pages/newProduct/NewProduct.jsx";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
<div>
      <BrowserRouter>
    
        <Topbar />
        <div className="container">
        <Sidebar />
       
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
        
        </Routes>
        
        </div>
        
      </BrowserRouter>
      </div>





  );
}

export default App;
