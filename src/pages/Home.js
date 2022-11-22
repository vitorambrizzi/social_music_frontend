import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <p>This is home!</p>
      <Link to='/user'>User Page</Link>
    </>
  )
}

export default Home