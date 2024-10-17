
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<shop/>}/>
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/womens' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kid"/>}/>
        <Route path="/product" element={<product/>}>
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
