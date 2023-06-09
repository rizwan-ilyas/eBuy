import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Login from "./components/Login"
import SignUp from "./components/SignUp"
import AddCustomer from './components/AddCustomer'
import AddProduct from "./components/AddProduct"
import AllProducts from "./components/AllProducts"

function App() {



  return (
    <div className="App">

<Router>
      <Routes>
        <Route path='/signin' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/addcustomer' element={<AddCustomer is_seller={"false"}/>}/>
        <Route path='/addseller' element={<AddCustomer is_seller={"true"}/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/products' element={<AllProducts/>}/>


        
      </Routes>
      </Router>
    </div>
  );
}

export default App;
