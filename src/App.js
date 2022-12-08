import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Albums from './pages/Albums'
import Artists from './pages/Artists'
import Tracks from './pages/Tracks'
import Search from './pages/Search'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='search/:type/:query' element={<Search />} />
        <Route path='album' element={<Albums />} />
        <Route path='artist' element={<Artists />} />
        <Route path='track' element={<Tracks />} />
      </Route>
    </Routes>
  );
}

export default App;