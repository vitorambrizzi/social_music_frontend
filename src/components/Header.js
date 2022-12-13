import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { signOut } from '../helpers/authentication'
import useAuthStore from '../hooks/useAuthStore'
import styled from 'styled-components'
import slugify from '../helpers/url'

const Header = () => {
  const [userLogged, setUserLogged] = useAuthStore()
  const navigate = useNavigate()

  const handleSearch = async (event) => {
    event.preventDefault()
    const query = event.target.search.value
    const uri = slugify(query)
    navigate(`/search/all/${uri}`)
  }

  const handleSignOut = async () => {
    const result = await signOut(userLogged.idUser, userLogged.token)
    if (result?.success) {
      console.log(result.success.message)
      localStorage.removeItem('user-authentication')
      setUserLogged({
        isLogged: false,
        idUser: '',
        token: ''
      })
      navigate('/')
    } else {
      console.log(result)
    }
  }

  return (
    <Background>
      <Container>
        <Link to='/'>Social Music</Link>
        <div>
          <form onSubmit={(event) => handleSearch(event)}>
            <input type='text' name='search' placeholder='Search'></input>
            <button type='submit'>Send</button>
          </form>
        </div>  
        <Navbar>
          {
            userLogged.isLogged ? (
              <>
                <NavLink to='/album/all'><Spacer>Albums</Spacer></NavLink>
                <NavLink to='/artist/all'><Spacer>Artists</Spacer></NavLink>
                <NavLink to='/track/all'><Spacer>Tracks</Spacer></NavLink>
                <NavLink onClick={() => handleSignOut()}><Spacer>Sign Out</Spacer></NavLink>
              </>
            ) : (
              <>
                <NavLink to='/sign-in'><Spacer>Sign In</Spacer></NavLink>
                <NavLink to='/sign-up'><Spacer>Sign Up</Spacer></NavLink>
              </>
            )
          }
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