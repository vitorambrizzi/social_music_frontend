import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Album from './pages/Album'
import Artist from './pages/Artist'
import Track from './pages/Track'
import Search from './pages/Search'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='search/:type/:query' element={<Search />} />
        <Route path='album/:id' element={<Album />} />
        <Route path='artist/:id' element={<Artist />} />
        <Route path='track/:id' element={<Track />} />
      </Route>
    </Routes>
  );
}

export default App;