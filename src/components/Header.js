import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import slugify from '../helpers/url'

const Header = () => {
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const query = event.target.search.value
    const uri = slugify(query)
    navigate(`/search/${uri}`)
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
        <Navbar>
          <NavLink to='/albums'><Spacer>Albums</Spacer></NavLink>
          <NavLink to='/artists'><Spacer>Artists</Spacer></NavLink>
        </Navbar>
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

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`
const Spacer = styled.span`
  margin: 0 0 0 20px;
`

export default Header