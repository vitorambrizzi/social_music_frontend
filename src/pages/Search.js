import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { search } from '../helpers/spotify'

const Search = () => {
  const { query } = useParams()
  const [searchResults, setSearchResults] = useState({
    albums: '',
    artists: '',
    playlists: '',
    tracks: ''
  })

  const handleSearch = async () => {
    const result = await search(query)
    setSearchResults(result)
    console.log(searchResults)
  }

  useEffect(() => {
    handleSearch()
  // eslint-disable-next-line
  }, [])

  return (
    <>
      <h1>Search</h1>
      {query}
    </>
  )
}

export default Search