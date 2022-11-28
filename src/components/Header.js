import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

// Buffer.from(str, 'base64')
// buf.toString('base64')

const Header = () => {
  const Buffer = require('buffer/').Buffer

  const handleSubmit = (event) => {
    event.preventDefault()
    const search = new Buffer(event.target.search.value)
    console.log(search.toString('base64'))
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
            <Spacer><NavLink to='/user'>User</NavLink></Spacer>
            <Spacer><NavLink to='/spotify'>Spotify</NavLink></Spacer>
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