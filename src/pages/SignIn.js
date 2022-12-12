import { useNavigate } from 'react-router-dom'
import { signIn } from '../helpers/authentication'
import useAuthStore from '../hooks/useAuthStore'

const SignIn = () => {
  const [, setUserLogged] = useAuthStore()
  const navigate = useNavigate()

  const handleSignIn = async (credentials) => {
    const result = await signIn(credentials)
    if (result?.success) {
      const authentication = {
        isLogged: true,
        idUser: result.data.id_user,
        token: result.data.token
      }
      setUserLogged(authentication)
      localStorage.setItem('user-authentication', JSON.stringify(authentication))
      console.log(result.success.message)
      navigate('/')
    }
    else {
      alert(result?.error?.message || 'Server error, please try again!')
    }
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const { email, pass } = event.target
    handleSignIn({
      email: email.value,
      pass: pass.value
    })
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <p>Email: <input type='text' name='email' /></p>
        <p>Pass: <input type='password' name='pass' /></p>
        <button type='submit'>Send</button>
      </form>
    </>
  )
}

export default SignIn