import styled from 'styled-components'

const Header = () => {
  return (
    <Background>Here is the Header</Background>
  )
}

const Background = styled.header`
  background-color: #000000;
  height: 50px;
  color: #ffffff;
`

export default Header