import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  return (
    <Background>
      <Container>
        <Link to='/'>Social Music</Link>
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