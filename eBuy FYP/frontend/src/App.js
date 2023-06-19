import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import Home from './Component/Home/Home';
import Login from './Component/User/Login';
import Payment from './Component/Payment/Index';
import AddProduct from './Component/Product/AddProduct';
import Cart from './Component/Product/Cart';
import Catagory from './Component/Category'

function App() {
  return (
    <div className="App">


      <Router> 
        <Routes>
          <Route path="/" index element={<Home />} exact />
          <Route path='/signin' element={<Login/>} />
          <Route path='/payment' element={<Payment/>}/>
          
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/cart' element={<Cart/>}/>
          
          

        </Routes>
      </Router>

    </div>
  );
}

export default App;
