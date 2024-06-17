/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack, FormControl, FormLabel, TextField, Button } from "@mui/material"
import { useForm } from "react-hook-form"
import ArtistsService from "../services/ArtistsService"
import { usePub } from "../hooks/pubSubHook"

const NewArtist = () => {
    const { register, handleSubmit, reset } = useForm()
    const publish = usePub()

    const onSubmit = async (data: any) => { 
        const response = await new ArtistsService().create(data)
        console.log(response)
        publish('artist_created', data)
        reset()
    }

    return <div>
        <h2> New Artist </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                <FormControl sx={{ marginBottom: '10px' }}>
                    <FormLabel htmlFor='name'> Name </FormLabel>
                    <TextField margin="dense" id='name' placeholder='Name' fullWidth size="small" {...register('name')}></TextField>
                </FormControl>
                <FormControl sx={{ marginBottom: '10px' }}>
                    <FormLabel htmlFor='bio'> Bio </FormLabel>
                    <TextField margin="dense" id='bio' placeholder='Bio' fullWidth size="small" {...register('bio')}></TextField>
                </FormControl>
                <FormControl sx={{ marginBottom: '10px' }}>
                    <FormLabel htmlFor='genre'> Genre </FormLabel>
                    <TextField margin="dense" id='genre' type="genre" placeholder='Genre' 
                    fullWidth size="small" {...register('genre')}>
                    </TextField>
                </FormControl>
                <FormControl sx={{ marginBottom: '10px' }}>
                    <FormLabel htmlFor='coverImg'> Cover Img </FormLabel>
                    <TextField margin="dense" id='coverImg' type="coverImg" placeholder='coverImg' 
                    fullWidth size="small" {...register('coverImg')}>
                    </TextField>
                </FormControl>
            </Stack>
            <Button variant="contained" type='submit'> Submit </Button>
        </form>
    </div>
}

export default NewArtist;