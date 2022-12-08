import { SPOTIFY_API } from '../config'
import {getToken} from '../helpers/spotify'

const Tracks = () => {
  const getTrack = async (id, authorizationToken) => {
    const response = await fetch(`${SPOTIFY_API}/tracks/${id}`, {
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
    const { trackId } = event.target
    const token = await getToken()
    const track = await getTrack(trackId.value, token)
    console.log(track)
  }

  return (
    <>
      <h1>Get Track</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input type='text' name='trackId' placeholder='Search for a track' />
        <button type='submit'>Send</button>
      </form>
    </>
  )
}

export default Tracks