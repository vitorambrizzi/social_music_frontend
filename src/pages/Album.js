import { getContent } from '../helpers/spotify'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CardTrack from '../components/CardTrack'

const Album = () => {
  const { id } = useParams()
  const [album, setAlbum] = useState({})
  const [userList, setUserList] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const getAlbum = async () => {
    if (id === 'all') {
      setUserList(true)
    } else {
      const result = await getContent(id, 'albums')
      console.log(result)
      setAlbum(result)
    }
    setIsLoading(false)
  }

  // eslint-disable-next-line
  useEffect(() => {getAlbum()}, [])

  return (
    <>
      {
        isLoading
        ?
          <h2>Loading content!</h2>
        :
          userList
          ?
            <h2>This user has no favorite albums!</h2>
          :
            <>
              <h1>{album.name}</h1>
              <p>
                <a href={album.external_urls.spotify} target='_blank' rel='noreferrer'>See in Spotify</a>
              </p>
              <img src={album.images[0].url} alt={album.name} />
              <p>
                Artist: <Link to={'/artist/' + album.artists[0].id}>{album.artists[0].name}</Link>;
              </p>
              <p>
                Label: {album.label};
              </p>
              <p>
                Popularity: {album.popularity};
              </p>
              <p>
                Release date: {album.release_date};
              </p>
              <p>
                Number of tracks: {album.total_tracks};
              </p>
              <p>
                Tracks:
              </p>
              {
                album.tracks.items.map((track) => {
                  return (
                    <CardTrack key={track.id} id={track.id} imgUrl={album.images[0].url} name={track.name} uri={track.uri} />
                  )
                })
              }
            </>
      }
    </>
  )
}

export default Album