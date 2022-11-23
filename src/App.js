import { Routes, Route } from 'react-router-dom'
import Layout from './Layout';
import Home from './pages/Home'
import User from './pages/User'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='user' element={<User />} />
      </Route>
    </Routes>
  );
}

export default App;