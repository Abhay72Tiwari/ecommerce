// import { Route } from '@mui/icons-material'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails';
import Checkout from '../customer/components/Cart/Checkout/Checkout';
import OrderDetails from '../customer/components/Order/OrderDetails';
import Order from '../customer/components/Order/Order';
import LoginForm from '../customer/Auth/LoginForm';
// import Product from "./customer/components/Product/Product";
const CustomerRoute = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/order' element={<Product />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/checkout' element={<Checkout />}></Route>
                <Route path='/:lavelOne/>lavelTwo/:lavelThree' element={<Product />}></Route>
                <Route path='/product/:productId' element={<ProductDetails />}></Route>
                <Route path='/account/order' element={<Order />}></Route>
                <Route path='/account/order/:orderId' element={<OrderDetails />}></Route>

                {/* <Product /> */}
                {/* <ProductDetails /> */}
                {/* <Cart/> */}
                {/* <Checkout /> */}
                {/* <Order /> */}
                {/* <OrderDetails /> */}
            </Routes>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default CustomerRoute
