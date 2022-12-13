import { useEffect, useState } from 'react'
import useAuthStore from '../hooks/useAuthStore'
import styled from 'styled-components'

const Initialization = ({children}) => {
  const [, setUserLogged] = useAuthStore()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem('user-authentication'))
    if (auth?.isLogged) setUserLogged(auth)
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  // eslint-disable-next-line
  }, [])

  return (
    <>
      {
        isLoading
        ?
          <Loading><p>Loading... please wait</p></Loading>
        :
          children
      }
    </>
  )
}

const Loading = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #cccccc;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`

export default Initialization