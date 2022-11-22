import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
      <Header />
      <p>This is home!</p>
      <Link to='/user'>User Page</Link>
    </>
  )
}

export default Home