import React, { useState, useEffect } from 'react';
import './App.css';
import { getProductsList } from './service/productsService';


function App() {
  
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    getProductsList().then(response => setProducts(response.data.products))
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Productos en tienda.
        </h1>
        <div className='product-container'>
        {products.map(product => (
          <div className='product-card'>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.stock}</p>
          </div>
        ))}
        </div>
      </header>
    </div>
  );
}

export default App;
