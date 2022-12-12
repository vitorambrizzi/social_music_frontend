import { AuthStore } from '../stores/AuthStore'

const useAuthStore = () => {
  const userLogged = AuthStore((state) => state.userLogged)
  const setUserLogged = AuthStore((state) => state.setUserLogged)

  return [userLogged, setUserLogged]
}

export default useAuthStore