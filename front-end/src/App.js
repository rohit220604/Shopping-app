
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop'; // Import Shop component
import ShopCategory from './Pages/ShopCategory'; // Import ShopCategory component
import product from './Pages/product'; // Import Product component
import cart from './Pages/cart'; // Import Cart component
import login from './Pages/login'; // Import Login component
import Hero from './Components/Hero/Hero';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='mens' element={<ShopCategory category="men"/>}/>
        <Route path='womens' element={<ShopCategory category="women"/>}/>
        <Route path='kids' element={<ShopCategory category="kid"/>}/>
        <Route path="product" element={<product/>}>
          <Route path='productId' element={<product/>}/>
        </Route>
        <Route pth='/cart' element={<cart/>}/>
        <Route path='/login' element={<login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
