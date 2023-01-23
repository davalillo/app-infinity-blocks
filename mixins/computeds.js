export default {
  // under testing
  data() {
    return {
      rules: {
        required: [(v) => !!v || "Field required"],
        username: [
          (v) => !!v || "Field required",
          (v) => v >= 6 || "Must be at least 6 characters, lowercase and alphanumeric",
        ],
        email: [
          (v) => !!v || "Field required",
          (v) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid',
        ],
        password: [
          (v) => !!v || "Field required",
          (v) => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(v) || 'Must have uppercase, lowercase, numbers, and a minimum number of 8 characters',
        ],
        phone: [
          (v) => !!v || "Field required",
          (v) => /^[0-9]{5,15}$/.test(v) || 'Incorrect Format',
        ],
        walletAddress: [
          (v) => !!v || "Field required",
          (v) => /^(0x){1}[0-9a-fA-F]{40}$/.test(v) || 'Incorrect Format',
        ],
      }
    }
  },
  // under testing
  computed: {
    baseDomainUrl() {
      return this.$axios.defaults.baseURL
    },
    uid() {
      return JSON.parse(localStorage.getItem("auth")).id
    },
    tokenAuth() {
      return JSON.parse(localStorage.getItem("auth")).token
    },
    // isLogged() {
    //   return this.$wallet.isSignedIn()
    // },
    // user() {
    //   return this.$store.state.dataUser
    // },
  }
}
