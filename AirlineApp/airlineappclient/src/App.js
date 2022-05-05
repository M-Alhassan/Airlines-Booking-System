import './App.css';
import SearchFlights from './SearchFlights';
import Login from './Login';
import Signup from './Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './Home';
function App() {
  return (
    <div>
 

<Router>
  <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/home" element={<Home/>} />
  </Routes>
</Router>
    </div>
  );
}

export default App;
