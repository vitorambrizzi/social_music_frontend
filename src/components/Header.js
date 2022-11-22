import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {

  const Search = async (value) => {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${value}&type=album`)
    const result = await response.json()
    console.log(result)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const search = event.target.search.value
    Search(search)
  }

  return (
    <Background>
      <Container>
        <Link to='/'>Social Music</Link>
        <div>
          <form onSubmit={(event) => handleSubmit(event)}>
            <input type='text' name='search' placeholder='Search'></input>
            <button type='submit'>Send</button>
          </form>
        </div>  
        <nav>
          <ul>
            <li><NavLink to='/user'>User</NavLink></li>
          </ul>
        </nav>
      </Container>
    </Background>
  )
}

const Background = styled.header`
  background-color: #000000;
  height: 50px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;
`

export default Header