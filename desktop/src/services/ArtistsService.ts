import axios from 'axios';

export default class ArtistsService {
    private baseUrl: string = 'http://localhost:3000/api/artists'

    getAll(){
        return axios.get(`${this.baseUrl}/own`, {
            headers: {
                'Authorization': localStorage.getItem('codetunes_token')
            }
        })
    }

    getById(id: string){
        return axios.get(`${this.baseUrl}/${id}`, {
            headers: {
                'Authorization': localStorage.getItem('codetunes_token')
            }
        })
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    create(data: any){
        return axios.post(this.baseUrl, data, {
            headers: {
                'Authorization': localStorage.getItem('codetunes_token')
            }
        })
    }
}