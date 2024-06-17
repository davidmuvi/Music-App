import { Stack, FormControl, FormLabel, TextField, Button } from "@mui/material"
import { useForm } from "react-hook-form"
import UsersService from "../services/UsersService"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = async (data: any) => { 
        try {
            const response = await new UsersService().login(data)
            localStorage.setItem('codetunes_token', response.data.token)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
        
    }

    return <div>
        <h2> Login </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                <FormControl sx={{ marginBottom: '10px' }}>
                    <FormLabel htmlFor='email'> Email </FormLabel>
                    <TextField margin="dense" id='email' placeholder='Email' fullWidth size="small" {...register('email')}></TextField>
                </FormControl>
                <FormControl sx={{ marginBottom: '10px' }}>
                    <FormLabel htmlFor='password'> Password </FormLabel>
                    <TextField margin="dense" id='password' type="password" placeholder='Password' 
                    fullWidth size="small" {...register('password')}>
                    </TextField>
                </FormControl>
            </Stack>
            <Button variant="contained" type='submit'> Login </Button>
        </form>
    </div>
}

export default Login