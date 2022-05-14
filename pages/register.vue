<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <a href="">Have an account?</a>
          </p>

          <ul class="error-messages">
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>

          <form>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Username"
                v-model="forms.username"
                :disabled="isFetching"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Email"
                v-model="forms.email"
                :disabled="isFetching"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="forms.password"
                :disabled="isFetching"
              />
            </fieldset>
            <button
              @click.prevent="registerHandler"
              :disabled="isFetching"
              class="btn btn-lg btn-primary pull-xs-right"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  layout: 'LayoutDefault',
  data() {
    return {
      forms: {
        username: '',
        email: '',
        password: '',
      },
      errors: [],
      isFetching: false,
    }
  },
  methods: {
    async registerHandler(e) {
      this.isFetching = true
      const data = {
        user: {
          username: this.forms.username,
          email: this.forms.email,
          password: this.forms.password,
        },
      }

      const res = await this.$axios
        .$post('https://api.realworld.io/api/users', data)
        .catch((error) => {
          this.errors = []
          for (const property in error.response.data.errors) {
            this.errors.push(
              `${property} ${error.response.data.errors[property]}`
            )
          }
        })

      // If success
      if (res) {
        console.log('loggedIn', res)
        this.$store.commit('auth/LOGIN', res.user.token)
        this.$router.push('/')
      }
      this.isFetching = false
    },
  },
}
</script>
