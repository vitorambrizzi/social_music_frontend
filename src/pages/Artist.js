import { getContent } from '../helpers/spotify'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Artist = () => {
  const { id } = useParams()
  const [artist, setArtist] = useState({})

  const getArtist = async () => {
    const result = await getContent(id, 'artists')
    console.log(result)
    setArtist(result)
  }

  // eslint-disable-next-line
  useEffect(() => {getArtist()}, [])

  return (
    <>
      <h1>{artist.name}</h1>
      <img alt={artist.name} />
      <p>
        Popularity: {artist.popularity}.
      </p>
    </>
  )
}

export default Artist