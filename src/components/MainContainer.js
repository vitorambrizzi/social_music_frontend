import styled from 'styled-components'

const MainContainer = ({children}) => {
  return (
    <Background>
      <Container>
        {children}
      </Container>
    </Background>
  )
}

const Background = styled.main`
  background-color: #ffffff;
  padding: 20px 0;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 60%;
  background-color: #ffffff;
`

export default MainContainer