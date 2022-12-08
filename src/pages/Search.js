import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { search } from '../helpers/spotify'
import CardAlbum from '../components/CardAlbum'
import CardArtist from '../components/CardArtist'

const Search = () => {
  const { query } = useParams()
  const [ type, setType ] = useState('album,artist,track')
  const [ albums, setAlbums ] = useState([])
  const [ artists, setArtists ] = useState([])
  const [ tracks, setTracks ] = useState([])
  const navigate = useNavigate()

  const handleSearch = async () => {
    setAlbums([])
    setArtists([])
    setTracks([])
    const result = await search(query, type)
    console.log(result)
    if (result?.albums) setAlbums(result.albums.items)
    if (result?.artists) setArtists(result.artists.items)
    if (result?.tracks) setTracks(result.tracks.items)
  }
  const filteredSearch = (filter) => {
    navigate(`/search/${filter}/${query}`)
    if (filter === 'all') setType('album,artist,track')
    else setType(filter)
  }
  
  useEffect(() => {
    handleSearch()
    // eslint-disable-next-line
  }, [type])
  
  return (
    <>
      <h2>Search</h2>
      Filter results for:<br/>
      <button onClick={() => filteredSearch('all')}>All</button><br/>
      <button onClick={() => filteredSearch('album')}>Albums</button><br/>
      <button onClick={() => filteredSearch('artist')}>Artists</button><br/>
      <button onClick={() => filteredSearch('track')}>Tracks</button><br/>
      <hr />
      {
        albums.length === 0
        ?
          <p>No albums!</p>
        :
          albums.map((album) => {
            return (
              <CardAlbum key={album.id} imgUrl={album.images[2].url} name={album.name} uri={album.uri} />
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
            if (artist?.images[0]?.url) {
              return (
                <CardArtist key={artist.id} imgUrl={artist.images[0].url} name={artist.name} uri={artist.uri} />
              )
            } else {
              return (
                <CardArtist key={artist.id} name={artist.name} uri={artist.uri} />
              )
            }
          })
      }
      <hr />
      {
        tracks.length === 0
        ?
          <p>No Tracks!</p>
        :
          tracks.map((track) => {
            return (
              <CardAlbum key={track.id} imgUrl={track.album.images[2].url} name={track.name} uri={track.uri} />
            )
          })
      }
    </>
  )
}

export default Search