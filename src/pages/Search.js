import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { search } from '../helpers/spotify'

const Search = () => {
  const { query } = useParams()
  const [ type, setType ] = useState('album,artist,track')

  const handleSearch = async () => {
    const result = await search(query, type)
    console.log(result)
  }

  useEffect(() => {
    handleSearch()
  // eslint-disable-next-line
  }, [type])

  return (
    <>
      <h1>Search</h1>
      console.log results for:<br/>
      <button onClick={() => setType('album,artist,track')}>All</button><br/>
      <button onClick={() => setType('album')}>Albums</button><br/>
      <button onClick={() => setType('artist')}>Artists</button><br/>
      <button onClick={() => setType('track')}>Tracks</button><br/>
    </>
  )
}

export default Search