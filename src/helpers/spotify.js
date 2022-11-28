import {CLIENT_ID, CLIENT_SECRET, SPOTIFY_ACCOUNTS} from '../config'

const getToken = async () => {
  const Buffer = require('buffer/').Buffer

  const requestOptions = {
    method: 'POST',
    body: new URLSearchParams('grant_type=client_credentials'),
    headers: {
      'Authorization': 'Basic ' + new Buffer(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'),
      'Content-type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    }
  }

  const response = await fetch(SPOTIFY_ACCOUNTS, requestOptions)
  const result = await response.json()

  return result.access_token
}

export default getToken