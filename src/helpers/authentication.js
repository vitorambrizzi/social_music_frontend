import { BASE_PATH } from '../config'

const signOut = async (idUser, token) => {
  const response = await fetch(`${BASE_PATH}auth/logout`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json', 
      'Accept': 'application/json'
    },
    body: JSON.stringify({id_user: idUser, token: token})
  })
  const result = await response.json()

  return result
}

export { signOut }