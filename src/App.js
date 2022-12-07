import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Albums from './pages/Albums'
import Artists from './pages/Artists'
import Search from './pages/Search'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='search/:query' element={<Search />} />
        <Route path='albums' element={<Albums />} />
        <Route path='artists' element={<Artists />} />
      </Route>
    </Routes>
  );
}

export default App;