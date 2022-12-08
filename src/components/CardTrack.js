import styled from 'styled-components'

const CardTrack = ({imgUrl, name, uri}) => {
  return (
    <Card>
      <Avatar src={imgUrl} alt={name} />
      <Box>
        <Username>{name}</Username>
        <Text>{uri}</Text>
      </Box>
    </Card>
  )
}

const Card = styled.div`
  width: 500px;
  background-color: #eeeeee;
  display: flex;
  padding: 10px;
  border-radius: 10px;
  margin: 15px;
`

const Avatar = styled.img`
  background-color: #cccccc;
  height: 64px;
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px 0 0;
`

const Box = styled.div`
  width: 235px;
`

const Username = styled.h1`
  margin: 0;
  font-size: 0.9rem;
  color: #000000;
`

const Text = styled.p`
  margin: 0 0 10px 0;
  color: #333333;
`

export default CardTrack