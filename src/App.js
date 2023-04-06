import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Catagory from "./components/Catagory"
import Product from "./components/Product"

function App() {
  return (
    <div className="App">
     <Header/>
     <Catagory/>
     <Catagory/>
     <Catagory/>
    </div>
  );
}

export default App;
