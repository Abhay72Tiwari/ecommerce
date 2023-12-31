// import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Cart/Checkout/Checkout";
import Footer from "./customer/components/Footer/Footer";
import Navigation from "./customer/components/Navigation/Navigation";
import Order from "./customer/components/Order/Order";
import OrderDetails from "./customer/components/Order/OrderDetails";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import HomePage from "./customer/pages/HomePage/HomePage";
import CustomerRoute from "./Routters/CustomerRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/*" element={<CustomerRoute />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
