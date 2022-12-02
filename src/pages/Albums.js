import { SPOTIFY_API } from '../config'
import {getToken} from '../helpers/spotify'

const Albums = () => {
    const getAlbum = async (id, authorizationToken) => {
        const response = await fetch(`${SPOTIFY_API}/albums/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + authorizationToken,
                'Accept': 'application/json'
            }
        })
        const result = await response.json()

        return result
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const { albumId } = event.target
        const token = await getToken()
        const album = await getAlbum(albumId.value, token)
        console.log(album)
    }

    return (
        <>
            <h1>Get Album</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type='text' name='albumId' placeholder='Search for an album' />
                <button type='submit'>Send</button>
            </form>
        </>
    )
}

export default Albums