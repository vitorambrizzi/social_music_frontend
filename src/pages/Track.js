import { getContent } from '../helpers/spotify'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Track = () => {
  const { id } = useParams()
  const [track, setTrack] = useState({})
  const [userList, setUserList] = useState(false)

  const getTrack = async () => {
    if (id === 'all') {
      setUserList(true)
    } else {
      const result = await getContent(id, 'tracks')
      console.log(result)
      setTrack(result)
    }
  }

  // eslint-disable-next-line
  useEffect(() => {getTrack()}, [])

  return (
    <>
      {
        userList
        ?
          <h2>This user has no favorite tracks!</h2>
        :
          <>
            <h1>{track.name}</h1>
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