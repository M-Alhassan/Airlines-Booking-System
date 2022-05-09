import './App.css';
import SearchFlights from './SearchFlights';
import Login from './Login';
import Signup from './Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './Home';
import Availableflights from './Availableflights';
import AvailableSeats from './AvailableSeats';
import Payment from './Payment';
import Card from './Card';
import Admin from './Admin';
import FeatureInfo from './FeatureInfo';
import AdminInfo from './AdminInfo';
import AdminFlight from './AdminFlight';
import AdminPassenger from './AdminPassenger';
function App() {
  return (
    <div>
 

<Router>
  <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/searchflights" element={<SearchFlights/>} />
    <Route path="/availableflights" element={<Availableflights/>} />
    <Route path="/availableseats" element={<AvailableSeats/>} />
    <Route path="/payment" element={<Payment/>} />
    <Route path="/card" element={<Card/>} />
    <Route path="/admin" element={<Admin/>} />

    <Route path="/admin/info" element={<AdminInfo/>} />
    <Route path="/admin/flight" element={<AdminFlight/>} />
    <Route path="/admin/passenger" element={<AdminPassenger/>} />




  </Routes>
</Router>
    </div>
  );
}

export default App;
