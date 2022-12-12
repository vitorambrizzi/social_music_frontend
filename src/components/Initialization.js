import { useEffect } from 'react'
import useAuthStore from '../hooks/useAuthStore'

const Initialization = ({children}) => {
  const [, setUserLogged] = useAuthStore()

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('user-authentication'))
    if (auth?.isLogged) setUserLogged(auth)
  // eslint-disable-next-line
  }, [])

  return (
    <>
      {children}
    </>
  )
}

export default Initialization