import { getContent } from '../helpers/spotify'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Track = () => {
  const { id } = useParams()
  const [track, setTrack] = useState({})
  const [userList, setUserList] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const getTrack = async () => {
    if (id === 'all') {
      setUserList(true)
    } else {
      const result = await getContent(id, 'tracks')
      console.log(result)
      setTrack(result)
    }
    setIsLoading(false)
  }

  // eslint-disable-next-line
  useEffect(() => {getTrack()}, [])

  return (
    <>
      {
        isLoading
        ?
          <h2>Loading content!</h2>
        :
          userList
          ?
            <h2>This user has no favorite tracks!</h2>
          :
            <>
              <h1>{track.name}</h1>
              <p>
                <a href={track.external_urls.spotify} target='_blank' rel='noreferrer'>See in Spotify</a>
              </p>
              <h3>Album: <Link to={'/album/' + track.album.id}>{track.album.name}</Link></h3>
              <Link to={'/album/' + track.album.id}>
                <img src={track.album.images[1].url} alt={track.album.name}/>
              </Link>
              <p>
                Artist: <Link to={'/artist/' + track.artists[0].id}>{track.artists[0].name}</Link>
              </p>
              <p>
                Popularity: {track.popularity};
              </p>
              <p>
                Number: {track.track_number}.
              </p>
            </>
      }
    </>
  )
}

export default Track