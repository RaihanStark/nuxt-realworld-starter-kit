export const state = () => ({
  isLoggedIn: false,
  token: '',
})

export const mutations = {
  LOGIN(state, token) {
    state.token = token
    state.isLoggedIn = true
  },
  LOGOUT(state) {
    state.token = ''
    state.isLoggedIn = false
  },
}
