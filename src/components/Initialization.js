import { useEffect, useState } from 'react'
import useAuthStore from '../hooks/useAuthStore'

const Initialization = ({children}) => {
  const [, setUserLogged] = useAuthStore()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('user-authentication'))
    if (auth?.isLogged) setUserLogged(auth)
    setIsLoading(false)
  // eslint-disable-next-line
  }, [])

  return (
    <>
      {
        isLoading
        ?
          <h1>Carregando...</h1>
        :
          children
      }
    </>
  )
}

export default Initialization