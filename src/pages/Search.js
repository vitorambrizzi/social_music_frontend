import { useParams } from 'react-router-dom'

const Search = () => {
  const { query } = useParams()

  return (
    <>
      <h1>Search</h1>
      <p>{query}</p>
    </>
  )
}

export default Search