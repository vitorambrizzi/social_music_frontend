import { getContent } from '../helpers/spotify'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Artist = () => {
  const { id } = useParams()
  const [artist, setArtist] = useState({})
  const [userList, setUserList] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const getArtist = async () => {
    if (id === 'all') {
      setUserList(true)
    } else {
      const result = await getContent(id, 'artists')
      console.log(result)
      setArtist(result)
    }
    setIsLoading(false)
  }

  // eslint-disable-next-line
  useEffect(() => {getArtist()}, [])

  return (
    <>
      {
        isLoading
        ?
          <h2>Loading content!</h2>
        :
          userList
          ?
            <h2>This user has no favorite artists!</h2>
          :
            <>
              <h1>{artist.name}</h1>
              <p>
                <a href={artist.external_urls.spotify} target='_blank' rel='noreferrer'>See in Spotify</a>
              </p>
              <img src={artist.images[0].url} alt={artist.name} />
              <p>
                Spotify followers: {artist.followers.total};
              </p>
              <p>
                Popularity: {artist.popularity};
              </p>
              <p>
                Genres: {artist.genres.map((genre) => genre + ', ')}
              </p>
            </>
      }
    </>
  )
}

export default Artist