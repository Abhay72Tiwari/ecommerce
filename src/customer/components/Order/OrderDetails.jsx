import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';
const OrderDetails = () => {
    return (
        <div className='px:5 lg:px-20'>
            <div>
                <h1 className='font-bold py-10 text-lg'>Dilvery Address</h1>
                <AddressCard />
            </div>
            <div className='py-20'>
                <OrderTracker activeStep={3} />
            </div>
            <Grid className='space-y-5' container>
                {[1, 1, 1, 1, 1, 1].map((i) =>
                    <Grid item container className='shadow-xl rounded-md p-5 border' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                        <Grid item xs={6}>
                            <div className='flex item-center space-x-4'> <img
                                className="w-[5rem] h-[5rem] object-cover object-top"
                                src="https://media.istockphoto.com/id/1152823479/photo/confident-trendy-boy-with-skateboard.webp?b=1&s=170667a&w=0&k=20&c=BN7mrOFp0Z-V130kLwPB2G0qCjvo_0F0zXcbTJONGBI="
                                alt=""
                            />
                                <div className='space-y-2 ml-5'>
                                    <p className='font-semibold'>Men Slim Mid Rise Black</p>
                                    <p className='space-x-5 opacity-50 text-xs font-semibold'> <span>Color: Black</span> <span>Size: L</span></p>
                                    <p>Seller: Abhay</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item>
                            <Box sx={{ color: deepPurple[500] }}>
                                <StarBorderIcon sx={{ fontSize: "2rem" }} className='px-2'></StarBorderIcon>
                                <span>Rate & Review Product</span>
                            </Box>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </div>

    )
}

export default OrderDetails
