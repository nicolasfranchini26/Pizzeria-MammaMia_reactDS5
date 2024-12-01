import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import RegisterPage from "./pages/RegisterPage/Register";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import Pizza from "./pages/Pizza/Pizza";
import Profile from "./pages/Profile/Profile";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";


const App = () => {
  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/> } />
    <Route path="/register" element={<RegisterPage/> } />
    <Route path="/login" element={<Login/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/pizza/p001" element={<Pizza/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="*" element={<NotFound/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}
export default App