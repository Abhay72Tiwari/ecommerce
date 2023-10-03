import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../../AddressCard/AddressCard'

const DeliveryAddress = () => {
    const handlesumbmit = (e) => {
        console.log('hello');
        e.preventDefault();
        const data = new FormData(e.currentTarget);

        const address = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            streetAdress: data.get("addressName"),
            city: data.get("state"),
            state: data.get('zip'),
            mobile: data.get('phoneNumber')
        }
        console.log('data', address);
    }
    return (
        <div>
            <Grid container spacing={4}>
                <Grid xs={12} lg={5} className='norder roounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
                    <div className='p-5 py-7 border-b cursor-pointer'>
                        <AddressCard />
                        <Button sx={{ mt: 2, bgcolor: 'RGB(145 85 253)' }} size='large' variant='contained'>
                            Deliver Here
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box className='border rounded-s-md shadow-md p-5'>
                        <form onSubmit={handlesumbmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='firstName'
                                        name='firstName'
                                        label="firstName"
                                        fullWidth
                                        autoComplete='given-name' />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='lastName'
                                        name='lastName'
                                        label="lastName"
                                        fullWidth
                                        autoComplete='given-name' />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id='addressName'
                                        name='addressName'
                                        label="addressName"
                                        fullWidth
                                        autoComplete='given-name'
                                        multiline
                                        rows={3} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='city'
                                        name='city'
                                        label="city"
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='state'
                                        name='state'
                                        label="state/province/region"
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='zip'
                                        name='zip'
                                        label="zip/Postsl Code"
                                        fullWidth
                                        autoComplete='shipping postal-code'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='phoneNumber'
                                        name='phoneNumber'
                                        label="phone Number"
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button sx={{ mt: 2, bgcolor: 'RGB(145 85 253)' }} size='large' variant='contained' type='submit'>
                                        Deliver Here
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeliveryAddress
