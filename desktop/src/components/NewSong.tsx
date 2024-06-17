/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, FormControl, FormLabel, Stack, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import SongsService from "../services/SongsService";
import { usePub } from "../hooks/pubSubHook";

type Props = { artistId: number }

const NewSong = ({ artistId } : Props) => {

    const { register, handleSubmit } = useForm()

    const publish = usePub()

    const onSubmit = async (data: any) => { 
        const formData = new FormData()
        formData.append('title', data.title)
        formData.append('album', data.album)
        formData.append('genre', data.genre)
        formData.append('coverImg', data.coverImg)
        formData.append('releaseDate', data.releaseDate)
        formData.append('song', data.song[0])
        formData.append('artistId', artistId.toString())

        const response = await new SongsService().create(formData)
        console.log(response)
        
        publish('song_created', data)
    }

    return <div>
    <h2> Nueva canción </h2>
    <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
            <FormControl sx={{ marginBottom: '10px' }}>
                <FormLabel htmlFor='title'> Titulo </FormLabel>
                <TextField margin="dense" id='title' type="text" placeholder='Titulo' fullWidth size="small" {...register('title')}></TextField>
            </FormControl>
            <FormControl sx={{ marginBottom: '10px' }}>
                <FormLabel htmlFor='album'> Album </FormLabel>
                <TextField margin="dense" id='album' type="text" placeholder='Album' fullWidth size="small" {...register('album')}></TextField>
            </FormControl>
            <FormControl sx={{ marginBottom: '10px' }}>
                <FormLabel htmlFor='genre'> Género </FormLabel>
                <TextField margin="dense" id='genre' type="text" placeholder='Género' fullWidth size="small" {...register('genre')}>
                </TextField>
            </FormControl>
            <FormControl sx={{ marginBottom: '10px' }}>
                <FormLabel htmlFor='coverImg'> Imágen </FormLabel>
                <TextField margin="dense" id='coverImg' type="text" placeholder='Imágen' fullWidth size="small" {...register('coverImg')}>
                </TextField>
            </FormControl>
            <FormControl sx={{ marginBottom: '10px' }}>
                <FormLabel htmlFor='releaseDate'> Fecha de publicación </FormLabel>
                <TextField margin="dense" id='releaseDate' type="date" fullWidth size="small" {...register('releaseDate')}>
                </TextField>
            </FormControl>
            <FormControl sx={{ marginBottom: '10px' }}>
                <FormLabel htmlFor='song'> Canción </FormLabel>
                <TextField margin="dense" id='song' type="file" fullWidth size="small" {...register('song')}>
                </TextField>
            </FormControl>
        </Stack>
        <Button variant="contained" type='submit'> Submit </Button>
    </form>
</div>
}

export default NewSong;