<template>
  <v-app id="verification">
    <v-main>
      <v-window id="verification-content" v-model="windowStep">
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

        <v-window-item :value="1">
          <div class="window-content divcol center tcenter" style="gap: 2em">
            <img src="~/assets/sources/logos/logo-login.svg" alt="logo" style="--w: max(150px, 18em)">

            <div class="divcol center" style="gap: 1em; margin-top: 7.5em">
              <p class="p hspan" style="--fs: max(16px, 1.8em); --fw: 800">
                Hemos enviado un código de verificación a tu correo electrónico 
                <span style="--fw: 900; font-style: italic">pedroperez@gmail.com</span>
              </p>

              <v-btn>en proceso</v-btn><!--  aqui <---------------- -->

              <v-btn class="btn" style="--fs: max(13px, 1.8em)" @click="windowStep = 2">
                VERIFICAR
              </v-btn>
            </div>

            <div class="divcol" style="gap: 1em;">
              <a class="hspan" style="text-decoration: underline; --fs: max(16px, 1.8em)">Reenviar Código</a>
              <span class="hspan" style="opacity: .8; --fs: max(14px, 1.3em)">No olvides revisar tu bandeja de SPAM</span>
            </div>
          </div>
        </v-window-item>

        <v-window-item :value="2">
          <!-- content -->
        </v-window-item>
      </v-window>
    </v-main>
  </v-app>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "VerificationPage",
  mixins: [computeds],
  layout: "empty-layout",
  data() {
    return {
      windowStep: 1,
    }
  },
  head() {
    const title = 'verification';
    return {
      title,
    }
  },
  methods: {
  }
};
</script>

<style src="~/assets/styles/pages/verification.scss" lang="scss" />
