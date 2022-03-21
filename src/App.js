import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import ProductComponent from './components/ProductComponent';
import ProductDetails from './components/ProductDetails';
import ProductListing from './components/ProductListing';
import Cart from './components/Cart';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
      <Route path='/' exact element={<ProductListing/>}/>
      <Route path='/product/:ProductId' exact element={<ProductDetails/>}/>
      <Route path='/cart' exact element={<Cart/>}/>

      <Route>404 Not found</Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
