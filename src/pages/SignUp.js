import { BASE_PATH } from '../config'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()

  const createUser = async (user) => {
    const response = await fetch(`${BASE_PATH}user/sign-up`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const result = await response.json()

    if (result?.success) {
      console.log(result.success.message)
      navigate('/')
    }
    else {
      console.log(result)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const { name, email, pass } = event.target
    createUser({
      name: name.value,
      email: email.value,
      pass: pass.value
    })
  }
  
  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <p>Name: <input type='text' name='name' /></p>
        <p>Email: <input type='text' name='email' /></p>
        <p>Pass: <input type='password' name='pass' /></p>
        <button type='submit'>Send</button>
      </form>
    </>
  )
}

export default SignUp