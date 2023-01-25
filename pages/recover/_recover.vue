<template>
  <v-main id="login">
    <v-window v-model="windowStep" touchless>
      <!-- recover window -->
      <v-window-item id="login-window" :value="1">
        <section>
          <button class="mb-10" @click="$router.go(-1)">
            <img src="~/assets/sources/logos/logo-header.svg" alt="logo" style="--w: max(190px, 17em)">
          </button>

          <v-form
            ref="formRecover" class="card divcol"
            style="--bg: var(--primary); --w: 100%; gap: 1em"
            @submit.prevent="recover()"
          >
            <div class="divcol" style="gap: .5em">
              <label class="relative" for="password-recover">NUEVA CONTRASEÑA:
                <v-tooltip top nudge-top="10px" color="#fff" content-class="custome-tooltip">
                  <template #activator="{ on, attrs }">
                    <img
                      src="~/assets/sources/icons/warning-dark.svg" alt="tip" class="absolute"
                      style="--w: max(16px, .9em); --l: auto; --top: auto; --b: -5px"
                      v-bind="attrs"
                      v-on="on"
                    >
                  </template>
                  
                  <span>
                    Debe incluir mayúsculas, minúsculas, números y mínimo 8 carácteres
                  </span>
                </v-tooltip>
              </label>
              <v-text-field
                id="password-recover"
                v-model="formRecover.password"
                :type="showRecover ? 'text' : 'password'"
                :rules="rules.password"
                placeholder="Ingresa nueva contraseña"
                hide-details solo
                hide-spin-buttons
                @keyup="$event => $event.key === 'Enter' ? recover() : ''"
              >
                <template #append>
                  <v-icon size="1.3em" @click="showRecover = !showRecover">
                    mdi-eye{{showRecover ? '' : '-off'}}
                  </v-icon>
                </template>
              </v-text-field>
            </div>
            
            <div class="divcol" style="gap: .5em">
              <label for="confirm-password-recover">CONFIRMAR CONTRASEÑA:</label>
              <v-text-field
                id="confirm-password-login"
                v-model="passwordConfirmerRecover"
                :type="showRecover ? 'text' : 'password'"
                :rules="rules.confirmPasswordRecover"
                placeholder="Confirma contraseña"
                hide-details solo
                hide-spin-buttons
                @keyup="$event => $event.key === 'Enter' ? recover() : ''"
              ></v-text-field>
            </div>
            
            <v-btn
              :disabled="!$refs.formRecover?.validate() || loadingBtnRecover"
              class="btn align" style="--bg: var(--active)"
              :loading="loadingBtnRecover"
              @click="recover()">
              Recuperar
            </v-btn>
          </v-form>
        </section>
      </v-window-item>
    </v-window>
  </v-main>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "LoginPage",
  mixins: [computeds],
  layout: "empty-layout",
  data() {
    return {
      windowStep: 1,
      formRecover: {
        password: undefined,
      },
      passwordConfirmerRecover: undefined,
      formSendEmail: {
        email: undefined,
      },
      showRecover: false,
      rules: {
        confirmPasswordRecover: [
          (v) => !!v || "Field required",
          () => this.formRecover.password === this.passwordConfirmerRecover || 'Password must match',
        ],
      },
      loadingBtnRecover: false,
    }
  },
  head() {
    const title = 'Recuperar Contraseña';
    return {
      title,
    }
  },
  computed: {
    params() {
      return this.$route.params.recover?.split(":")
    },
    // currToken() {
    //   return this.$store.state.currentEmailVerification.token
    // },
  },
  mounted() {
    // this.$targetTooltip('.modalSettings img[alt="info"]')
    // window.addEventListener("resize", () => this.$targetTooltip('.modalSettings img[alt="info"]', 13))
  },
  methods: {
    recover() {
      if (!this.$refs.formRecover.validate()) return this.$alert("cancel", {desc: "verifica que los campos sean correctos"});
      this.loadingBtnRecover = true

      // recover endpoint
      this.$axios.post(`${this.baseDomainUrl}/usuarios/cambiarPassword`, {"token": this.params[1], ...this.formRecover})
      .then(result => {
        console.info("<<--recover-->>", result.data) // console
        this.loadingBtnRecover = false
        
        this.$alert("success", {desc: "contraseña recuperada exitosamente"})
        this.$router.go(-1)
      }).catch(err => {
        console.error(err, err.response.data.errors ?? err.response.data.title)
        this.loadingBtnRecover = false
        this.$alert("cancel", {desc: err.message})
      })
    },
  }
}
</script>

<style src="~/assets/styles/pages/login.scss" lang="scss" />
