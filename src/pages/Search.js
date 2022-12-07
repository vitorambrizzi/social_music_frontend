import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { search } from '../helpers/spotify'
import CardContent from '../components/CardContent'

const Search = () => {
  const { query } = useParams()
  const [ type, setType ] = useState('album,artist')
  const [ albums, setAlbums ] = useState([])
  const [ artists, setArtists ] = useState([])

  const handleSearch = async () => {
    const result = await search(query, type)
    console.log(result)
    setAlbums(result.albums.items)
    setArtists(result.artists.items)
  }

  useEffect(() => {
    handleSearch()
  // eslint-disable-next-line
  }, [type])

  return (
    <>
      <h2>Search</h2>
      {
        albums.length === 0
        ?
          <p>No albums!</p>
        :
          albums.map((album) => {
            return (
              <CardContent key={album.id} imgUrl={album.images[2].url} name={album.name} uri={album.uri} />
            )
          })
      }
      <hr />
      {
        artists.length === 0
        ?
          <p>No artists!</p>
        :
          artists.map((artist) => {
            return (
              <CardContent key={artist.id} name={artist.name} uri={artist.uri} />
            )
          })
      }
      {/*console.log results for:<br/>
      <button onClick={() => setType('album,artist')}>All</button><br/>
      <button onClick={() => setType('album')}>Albums</button><br/>
      <button onClick={() => setType('artist')}>Artists</button><br/>
      <hr />*/}
    </>
  )
}

export default Search