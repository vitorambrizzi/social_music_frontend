import { SPOTIFY_API } from '../config'
import getToken from '../helpers/spotify'

const Artist = () => {
  const getArtist = async (id, authorizationToken) => {
    const response = await fetch(`${SPOTIFY_API}/artists/${id}`, {
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
    const { artistId } = event.target
    const token = await getToken()
    const artist = await getArtist(artistId.value, token)
    console.log(artist)
  }


  return (
    <>
      <h1>Get Artist</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input type='text' name='artistId' placeholder='Search for an artist' />
        <button type='submit'>Send</button>
      </form>
    </>
  )
}

export default Artist