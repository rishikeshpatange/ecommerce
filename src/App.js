import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';
import Payment from './Payment';
import Men from './components/Men';

function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/checkout" element={<Checkout/>}>
        </Route>
        <Route path="/payment" element={<Payment />}>
          </Route>
        <Route path="/mens" element={<Men/>}>
          </Route>
      </Routes>

    </div>
  );
}

export default App;