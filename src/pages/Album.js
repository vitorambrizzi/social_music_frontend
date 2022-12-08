import { getContent } from '../helpers/spotify'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Album = () => {
  const { id } = useParams()
  const [album, setAlbum] = useState({})

  const getAlbum = async () => {
    const result = await getContent(id, 'albums')
    console.log(result)
    setAlbum(result)
  }

  // eslint-disable-next-line
  useEffect(() => {getAlbum()}, [])

  return (
    <>
      <h1>{album.name}</h1>
      <img alt={album.name} />
      <p>
        Artist: ;
      </p>
      <p>
        Label: {album.label};
      </p>
      <p>
        Release date: {album.release_date};
      </p>
      <p>
        Number of tracks: {album.total_tracks}.
      </p>
    </>
  )
}

export default Album