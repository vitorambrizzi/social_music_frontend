const Spotify = () => {
  const client_id = 'b5a62d946c224d10a031a1f783f45ac6'
  const client_secret = 'f695026608684e2d9ee07a0063e0f1b5'
  const Buffer = require('buffer/').Buffer
  
  const options = {
    method: 'POST',
    body: new URLSearchParams('grant_type=client_credentials'),
    headers: {
      'Authorization': 'Basic ' + new Buffer(client_id + ':' + client_secret).toString('base64'),
      'Content-type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  }

  const request = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', options)
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