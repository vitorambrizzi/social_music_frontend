import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Albums from './pages/Albums'
import Artists from './pages/Artists'
import Tracks from './pages/Tracks'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='albums' element={<Albums />} />
        <Route path='artists' element={<Artists />} />
        <Route path='tracks' element={<Tracks />} />
      </Route>
    </Routes>
  );
}

export default App;