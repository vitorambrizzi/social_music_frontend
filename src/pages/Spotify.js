import getToken from '../helpers/spotify'

const Spotify = () => {

  return (
    <>
      <h1>Spotify</h1>
      <button onClick={() => console.log(getToken())} >Manda essa porra</button>
    </>
  )
}

export default Spotify