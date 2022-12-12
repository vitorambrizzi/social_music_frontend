import { BASE_PATH } from '../config'

const signIn = async (credentials) => {
  const response = await fetch(`${BASE_PATH}auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 
      'Accept': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  const result = await response.json()

  return result
}

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

export { signIn, signOut }