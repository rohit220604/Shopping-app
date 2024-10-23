import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import { ShopContext } from '../Context/ShopContext'; 
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const Product = all_product.find((e)=>e.id === Number(productId));
  return (
    <div>
      <Breadcrum Product = {Product}/>
      <ProductDisplay Product={Product}/>
    </div>
  )
}

export default Product