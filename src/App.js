import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import User from './pages/User'
import Spotify from './pages/Spotify'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='user' element={<User />} />
        <Route path='spotify' element={<Spotify />} />
      </Route>
    </Routes>
  );
}

export default App;