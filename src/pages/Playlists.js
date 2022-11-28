import { SPOTIFY_API } from '../config'
import getToken from '../helpers/spotify'

const Playlists = () => {
  const getPlaylist = async (id, authorizationToken) => {
    const response = await fetch(`${SPOTIFY_API}/playlists/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + authorizationToken,
        'Accept': 'application/json'
      }
    })
    const result = await response.json()

    return result
  }

  const getPlaylistTracks = async (id, authorizationToken) => {
    const response = await fetch(`${SPOTIFY_API}/playlists/${id}/tracks`, {
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
    const { playlistId } = event.target
    const token = await getToken()
    const playlist = await getPlaylist(playlistId.value, token)
    console.log(playlist)
    const playlistTracks = await getPlaylistTracks(playlistId.value, token)
    console.log(playlistTracks)
  }

  return (
    <>
      <h1>Get Playlist</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input type='text' name='playlistId' placeholder='Search for a Playlist' />
        <button type='submit'>Send</button>
      </form>
    </>    
  )
}

export default Playlists