import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps = [
    "placed",
    "Order Confirmed",
    "Shipped",
    "Out For Deliverd",
    "Deliverd"
]
const OrderTracker = ({ activeStep }) => {
    return (
        <div>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => <Step> <StepLabel sx={{ color: "#9155FD", fontSize: "44px" }}></StepLabel></Step>)}
            </Stepper>
        </div>
    )
}

export default OrderTracker
