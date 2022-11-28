import {CLIENT_ID, CLIENT_SECRET, SPOTIFY_ACCOUNTS} from '../config'

const Spotify = () => {
  const Buffer = require('buffer/').Buffer
  
  const options = {
    method: 'POST',
    body: new URLSearchParams('grant_type=client_credentials'),
    headers: {
      'Authorization': 'Basic ' + new Buffer(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'),
      'Content-type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  }

  const request = async () => {
    const response = await fetch(SPOTIFY_ACCOUNTS, options)
    const result = await response.json()
    console.log(result)
  }

  return (
    <>
      <h1>Spotify</h1>
      <button onClick={() => request()} >Manda essa porra</button>
    </>
  )
}

export default Spotify