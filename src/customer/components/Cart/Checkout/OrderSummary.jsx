import React from 'react'
import AddressCard from '../../AddressCard/AddressCard'
import Cart from '../Cart'

const OrderSummary = () => {
    return (
        <div>
            <div className='p-5 shadow-lg rounded-s-md border'>
                <AddressCard />
            </div>
            <Cart />
        </div>
    )
}

export default OrderSummary
