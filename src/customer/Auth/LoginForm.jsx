import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget);
        const userData = {
            firstName: data.get("firstName"),
            lastName: data.get("lastName"),
            email: data.get("email"),
            password: data.get("password"),
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                        <TextField required id="email" name='email' label="Email Name" fullWidth
                            autoComplete='email' />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField required id="password" name='password' label="Password" fullWidth
                            autoComplete='password' />
                    </Grid>
                    <Grid item xs={12} >
                        <Button className='bg-[#9155fd] w-full' type='submit' variant='contained'
                            size='large' sx={{ padding: ".8rem ,0", bgcolor: "#9155fd" }}>Login</Button>
                    </Grid>
                </Grid>

            </form>
            <div className='flex-justify-center flex-col item-center'>
                <div className='py-3 flex item-center'>
                    <p>if you have already account ?</p>
                    <Button onClick={() => navigate("/register")} className='ml-5' size='small'>Register</Button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
