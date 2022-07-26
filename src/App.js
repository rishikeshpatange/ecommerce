import { Route, Routes,useLocation} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';
import Payment from './Payment';
import Men from './components/Men';
import Women from './components/Women';
import ScrollToTop from './ScrollToTop';
import Shoe from './components/Shoe';
import Fotter from './components/Fotter';

function App() {
  const location = useLocation();
  return (
    <div className="App">

      <Header />
      <ScrollToTop>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/checkout" element={<Checkout/>}>
        </Route>
        <Route path="/payment" element={<Payment />}>
          </Route>
        <Route path="/mens" element={<Men/>}>
          </Route>
        <Route path="/womens" element={<Women/>}>
          </Route>
        <Route path="/shoes" element={<Shoe/>}>
          </Route>
      </Routes>
      <Fotter/>
      </ScrollToTop>

    </div>
  );
}

export default App;