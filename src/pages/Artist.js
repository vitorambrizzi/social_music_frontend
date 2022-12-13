import { getContent } from '../helpers/spotify'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Artist = () => {
  const { id } = useParams()
  const [artist, setArtist] = useState({})
  const [userList, setUserList] = useState(false)

  const getArtist = async () => {
    if (id === 'all') {
      setUserList(true)
    } else {
      const result = await getContent(id, 'artists')
      console.log(result)
      setArtist(result)
    }
  }

  // eslint-disable-next-line
  useEffect(() => {getArtist()}, [])

  return (
    <>
      {
        userList
        ?
          <h2>This user has no favorite artists!</h2>
        :
          <>
            <h1>{artist.name}</h1>
            <img alt={artist.name} />
            <p>
              Popularity: {artist.popularity}.
            </p>
          </>
      }
    </>
  )
}

export default Artist