
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop'; // Import Shop component
import ShopCategory from './Pages/ShopCategory'; // Import ShopCategory component
import product from './Pages/product'; // Import Product component
import cart from './Pages/cart'; // Import Cart component
import LoginSignup from './Pages/LoginSignup'; // Import Login component
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='mens' element={<ShopCategory banner= {men_banner} category="men"/>}/>
        <Route path='womens' element={<ShopCategory banner= {women_banner} category="women"/>}/>
        <Route path='kids' element={<ShopCategory banner= {kid_banner} category="kid"/>}/>
        <Route path="product" element={<product/>}>
          <Route path='productId' element={<product/>}/>
        </Route>
        <Route path='/cart' element={<cart/>}/>
        <Route path='/LoginSignup' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
