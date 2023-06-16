import './App.css';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import Home from './Component/Home/Home';
import Login from './Component/User/Login';

function App() {
  return (
    <div className="App">
      
      <Router>  
        <Routes>
          <Route path="/" index element={<Home />} exact />
          <Route path='/signin' element={<Login/>} exact/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
