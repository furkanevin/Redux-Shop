import './App.css';
import Header from './components/Header';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:product" element={<ProductDetails />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
