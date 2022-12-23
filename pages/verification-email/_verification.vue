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
            <span style="--fw: 800; font-style: italic">pedroperez@gmail.com</span>
          </p>

          <v-otp-input
            v-model="otp"
            length="5"
            type="number"
          ></v-otp-input>

          <v-btn class="btn" style="--fs: max(13px, 1.6em)" @click="verificationCode()">
            Verificar
          </v-btn>
        </div>

        <div class="divcol" style="gap: 1em;">
          <a class="hspan" style="text-decoration: underline; --fs: max(16px, 1.6em); --fw: 800">Reenviar Código</a>
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
      return this.$route.params.verification
    },
  },
  methods: {
    verificationCode() {
      if (!(this.otp?.length === 5)) return;
      this.$store.commit("verificationRedirect")
      
      this.$router.push(this.localePath(`/${this.params.split(":")[1]}`))
    },
  }
};
</script>

<style src="~/assets/styles/pages/verification.scss" lang="scss" />
