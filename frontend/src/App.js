import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Login from "./components/Login"
import SignUp from "./components/SignUp"


function App() {
  return (
    <div className="App">
<Router>
      <Routes>

        <Route path='/signin' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>}/>

      </Routes>
      </Router>
    </div>
  );
}

export default App;
