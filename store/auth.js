export const state = () => ({
  isLoggedIn: false,
})

export const mutations = {
  LOGIN(state) {
    state.isLoggedIn = true
  },
  LOGOUT(state) {
    state.isLoggedIn = false
  },
}
