import styled from 'styled-components'

const Footer = () => {
  return (
    <Background>
      <Copyright>© 2022 Vítor Ambrizzi</Copyright>
    </Background>
  )
}

const Background = styled.footer`
  background-color: #000000;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Copyright = styled.span`
  color: #ffffff;
  font-size: 1rem;
`

export default Footer