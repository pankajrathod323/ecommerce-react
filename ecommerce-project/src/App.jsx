import './App.css'
import axios from 'axios';
import { useEffect, useState } from 'react';  
import { HomePage } from './pages/Homepage'
import { CheckoutPage } from './pages/CheckoutPage';
import {Routes, Route} from 'react-router';
import { OrdersPage } from './pages/OrdersPage';

function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
      axios.get("/api/cart-items?expand=product").then((response) => {
        setCart(response.data);
    });
  },[])

  return (
    <Routes>
      <Route index element={<HomePage cart={cart}/>}/>
      <Route path='checkout' element = {<CheckoutPage cart={cart}/>} />
      <Route path='orders' element = {<OrdersPage cart={cart}/>} />
    </Routes>
  )
}

export default App
