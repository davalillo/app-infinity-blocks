<template>
  <v-app id="verification">
    <v-main id="verification-content">
      <!-- <div class="center" style="position: absolute; top: 0; left: 0">
        <v-btn
          id="go-back"
          class="btn"
          style="--min-w: max-content; --p: .2em; --br: 50%"
          @click="$router.go(-1)">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        
        <label for="go-back" class="hspan" style="--fw: 500">Go back</label>
      </div> -->

      <div class="window-content divcol center tcenter" style="gap: 2em">
        <img src="~/assets/sources/logos/logo-login.svg" alt="logo" style="--w: max(150px, 18em)">

        <div class="divcol center" style="gap: 1em; margin-top: 7.5em">
          <p class="p hspan" style="--fs: max(16px, 1.8em); --fw: 500">
            Hemos enviado un código de verificación a tu correo electrónico 
            <span style="--fw: 800; font-style: italic">{{email}}</span>
          </p>

          <!-- <v-otp-input
            v-model="otp"
            length="5"
            type="number"
            @keyup="$event => $event.key === 'Enter' ? verificationCode() : ''"
          ></v-otp-input> -->
          <template v-if="params !== 'recover'">
            <v-text-field
              v-model="otp"
              hide-details solo
              @keyup="$event => $event.key === 'Enter' ? verificationCode() : ''"
            ></v-text-field>


            <v-btn
              :disabled="!otp"
              class="btn" style="--fs: max(13px, 1.6em)"
              @click="verificationCode()"
            >Verificar</v-btn>
          </template>
        </div>

        <div class="divcol" style="gap: 1em;">
          <a
            class="hspan" style="text-decoration: underline; --fs: max(16px, 1.6em); --fw: 800"
            @click="params == 'recover' ? sendEmailChangePassword() : sendEmail()"
          >Reenviar Código</a>
          <span class="hspan" style="opacity: .8; --fs: max(14px, 1.1em)">No olvides revisar tu bandeja de SPAM</span>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "VerificationEmailPage",
  mixins: [computeds],
  layout: "empty-layout",
  data() {
    return {
      otp: undefined,
      loadingBtnVerificationEmail: false,
    }
  },
  head() {
    const title = 'Email Verification';
    return {
      title,
    }
  },
  computed: {
    params() {
      return this.$route.params.verification?.split(":")[1]
    },
    email() {
      return this.$store.state.currentEmailVerification.email
    }
  },
  mounted() {
    if (!this.email) {
      this.$alert("cancel", {desc: "ha ocurrido un error por favor vuelva a intentarlo mas tarde"})
      this.$router.go(-1)
    }
    // if (this.params !== "login") this.sendEmail()
  },
  methods: {
    sendEmail() {
      // request token endpoint
      this.$axios.post(`${this.baseDomainUrl}/usuarios/solicitarTokenCorreo`, {"email": this.email}).then(result => {
        console.info(result.data) // console
        this.$alert("success", {title: "Correo enviado", desc: "verifique su bandeja de entrada"})
      }).catch(err => {
        console.error(err, err.response.data.errors ?? err.response.data.title)
        this.$alert("cancel", {desc: err.message})
      })
    },
    sendEmailChangePassword() {
      // request token endpoint
      this.$axios.post(`${this.baseDomainUrl}/usuarios/solicitarCambioPassword`, {"email": this.email}).then(result => {
        console.info(result.data) // console
        this.$alert("success", {title: "Correo enviado", desc: "verifique su bandeja de entrada"})
      }).catch(err => {
        console.error(err, err.response.data.errors ?? err.response.data.title)
        this.$alert("cancel", {desc: err.message})
      })
    },
    verificationCode() {
      if (!this.otp) return;
      this.loadingBtnVerificationEmail = true

      // confirmation token endpoint
      this.$axios.post(`${this.baseDomainUrl}/usuarios/validarCorreo`, {"token": this.otp}).then(result => {
        console.info(result) // console
        this.loadingBtnVerificationEmail = false
        // set current verification
        this.$store.commit("emailVerification", {token: this.otp, email: this.email})
        
        this.$alert("success", {desc: "verificación exitosa"})
        
        // redirection to previous page
        this.$router.push(this.localePath(`/${this.params}`))
      }).catch(err => {
        console.error(err, err.response.data.errors ?? err.response.data.title)
        this.loadingBtnVerificationEmail = false
        this.$alert("cancel", {desc: err.message})
      })
    },
  }
};
</script>

<style src="~/assets/styles/pages/verification.scss" lang="scss" />
