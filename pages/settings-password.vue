<template>
  <v-main id="settings" class="password">
    <div id="settings-content" class="fill_h divcol center relative">
      <div id="settings-content--button-back" class="center">
        <v-btn
          id="go-back"
          class="btn"
          style="--min-w: max-content; --p: .2em; --br: 50%"
          @click="$router.go(-1)">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        
        <label for="go-back" class="hspan" style="--fw: 500">Volver</label>
      </div>

      <section class="divcol center" style="gap: 32px">
        <h2 class="p">CAMBIAR CONTRASEÑA</h2>
        
        <v-form
          ref="formChangePassword" class="card divcol"
          style="--bg: var(--primary); --w: min(100%, 350px); gap: 1em"
          @submit.prevent="changePassword()"
        >
          <div class="divcol" style="gap: .5em">
            <label class="relative" for="password-change-password">NUEVA CONTRASEÑA:
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
              id="password-change-password"
              v-model="formChangePassword.password"
              :type="showChangePassword ? 'text' : 'password'"
              :rules="rules.password"
              placeholder="Ingresa nueva contraseña"
              hide-details solo
              hide-spin-buttons
              @keyup="$event => $event.key === 'Enter' ? changePassword() : ''"
            >
              <template #append>
                <v-icon size="1.3em" @click="showChangePassword = !showChangePassword">
                  mdi-eye{{showChangePassword ? '' : '-off'}}
                </v-icon>
              </template>
            </v-text-field>
          </div>
          
          <div class="divcol" style="gap: .5em">
            <label for="confirm-password-change-password">CONFIRMAR CONTRASEÑA:</label>
            <v-text-field
              id="confirm-password-login"
              v-model="passwordConfirmerChangePassword"
              :type="showChangePassword ? 'text' : 'password'"
              :rules="rules.confirmPasswordChangePassword"
              placeholder="Confirma contraseña"
              hide-details solo
              hide-spin-buttons
              @keyup="$event => $event.key === 'Enter' ? changePassword() : ''"
            ></v-text-field>
          </div>
          
          <v-btn
            :disabled="!$refs.formChangePassword?.validate() || loadingBtnChangePassword"
            class="btn align" style="--bg: var(--active)"
            :loading="loadingBtnChangePassword"
            @click="changePassword()">
            Recuperar
          </v-btn>
        </v-form>
      </section>
    </div>
  </v-main>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "SettingsPasswordPage",
  mixins: [computeds],
  layout: "empty-layout",
  data() {
    return {
      formChangePassword: {
        password: undefined,
      },
      passwordConfirmerChangePassword: undefined,
      showChangePassword: false,
      loadingBtnChangePassword: false,
      rules: {
        confirmPasswordRegister: [
          (v) => !!v || "Field required",
          (v) => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(v) || 'Must have uppercase, lowercase, numbers, and a minimum number of 8 characters',
          () => this.formRegister.password === this.passwordConfirmerRegister || 'Password must match',
        ],
        confirmPasswordChangePassword: [
          (v) => !!v || "Field required",
          () => this.formChangePassword.password === this.passwordConfirmerChangePassword || 'Password must match',
        ],
      },
    }
  },
  head() {
    const title = 'Cambiar Contraseña';
    return {
      title,
    }
  },
  computed: {
    currToken() {
      return this.$store.state.currentEmailVerification.token
    },
  },
  mounted() {
  },
  methods: {
    changePassword() {
      // change password endpoint
      this.$axios.post(`${this.baseDomainUrl}/usuarios/cambiarPassword`, {"token": this.currToken, ...this.formChangePassword})
      .then(result => {
        console.info("<<--change password-->>", result.data) // console
        this.loadingBtnChangePassword = false
        
        this.$alert("success", {desc: "contraseña recuperada exitosamente"})
        this.$router.go()
      }).catch(err => {
        console.error(err)
        this.loadingBtnChangePassword = false
        this.$alert("cancel", {title: "Error", desc: err.message})
      })
    },
  }
};
</script>

<style src="~/assets/styles/pages/settings.scss" lang="scss" />
