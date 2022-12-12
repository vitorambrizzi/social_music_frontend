import create from 'zustand'

export const AuthStore = create((set) => ({
  userLogged: {
    isLogged: false,
    idUser: '',
    token: ''
  },
  setUserLogged: (user) => set({
    userLogged: {
      isLogged: user.isLogged,
      idUser: user.idUser,
      token: user.token
    }
  })
}))