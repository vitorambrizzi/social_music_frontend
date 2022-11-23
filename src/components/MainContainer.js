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
  background-color: #d405e7;
  padding: 20px 0;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  width: 60%;
  background-color: #d405e7;
`

export default MainContainer