import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  )
}

export default Layout