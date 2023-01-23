<template>
  <v-main id="login">
    <v-window v-model="windowStep" touchless>
      <!-- login window -->
      <v-window-item id="login-window" :value="1">
        <section>
          <img src="~/assets/sources/logos/logo-login.svg" alt="logo" class="mb-16" style="--w: max(150px, 13em)">

          <v-form
            ref="formLogin" class="card divcol"
            style="--bg: var(--primary); --w: 100%; gap: 1em"
            @submit.prevent="login()"
          >
            <div class="divcol" style="gap: .5em">
              <label for="username-login">USUARIO:</label>
              <v-text-field
                id="username-login"
                v-model="formLogin.username"
                :rules="rules.required"
                placeholder="Ingresa tu usuario"
                hide-details solo
                class="username-input"
                @keyup="$event => $event.key === 'Enter' ? login() : ''"
              ></v-text-field>
            </div>
            
            <div class="divcol" style="gap: .5em">
              <label for="password-login">CONTRASEÑA:</label>
              <v-text-field
                id="password-login"
                v-model="formLogin.password"
                :type="showLogin ? 'text' : 'password'"
                :rules="rules.password"
                placeholder="Ingresa tu contraseña"
                hide-details solo
                hide-spin-buttons
                @keyup="$event => $event.key === 'Enter' ? login() : ''"
              >
                <template #append>
                  <v-icon size="1.3em" @click="showLogin = !showLogin">
                    mdi-eye{{showLogin ? '' : '-off'}}
                  </v-icon>
                </template>
              </v-text-field>
            </div>
            
            <v-btn
              :disabled="!$refs.formLogin?.validate() || loadingBtnLogin"
              class="btn align" style="--bg: var(--active)"
              :loading="loadingBtnLogin"
              @click="login()">
              Iniciar sesión
            </v-btn>
          </v-form>

          <aside class="divcol center tcenter" style="gap: inherit; --fs: max(15px, 1.25em)">
            <a
              style="--fw: 800"
              @click="windowStep = 3">
              ¿Olvidaste tu contraseña?
            </a>

            <span class="hspan divcol center">
              ¿No tienes cuenta?
              <a style="--fw: 800; --fs: 1em" @click="windowStep = 2">Registrate aquí</a>
            </span>
          </aside>
        </section>
      </v-window-item>


      <!-- register window -->
      <v-window-item id="register-window" :value="2">
        <section>
          <button class="mb-10" @click="$router.go()">
            <img src="~/assets/sources/logos/logo-header.svg" alt="logo" style="--w: max(190px, 17em)">
          </button>

          <v-form ref="formRegister" class="fill_w divcol" style="gap: 1em">
            <div class="divcol" style="gap: .5em">
              <label for="email-register">CORREO <sup>*</sup></label>
              <v-text-field
                id="email-register"
                v-model="formRegister.email"
                solo hide-details
                :rules="rules.email"
                @keyup="$event => $event.key === 'Enter' ? register() : ''"
              ></v-text-field>
            </div>
            
            <div class="divcol" style="gap: .5em">
              <label class="relative" for="username-register">USUARIO <sup>*</sup>
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
                    Ingresar nombre de usuario
                  </span>
                </v-tooltip>
              </label>
              <v-text-field
                id="username-register"
                v-model="formRegister.userName"
                solo hide-details
                :rules="rules.required"
                class="username-input"
                @keyup="$event => $event.key === 'Enter' ? register() : ''"
              ></v-text-field>
            </div>
            
            <div class="divcol" style="gap: inherit">
              <div class="divcol" style="gap: .5em">
                <label class="relative" for="password-register">CONTRASEÑA <sup>*</sup>
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
                  :id="formRegister.password ? '' : 'password-register'"
                  v-model="formRegister.password"
                  :type="showRegister ? 'text' : 'password'"
                  solo hide-details
                  hide-spin-buttons
                  :rules="rules.password"
                @keyup="$event => $event.key === 'Enter' ? register() : ''"
                >
                  <template #append>
                    <v-icon size="1.3em" @click="showRegister = !showRegister">
                      mdi-eye{{showRegister ? '' : '-off'}}
                    </v-icon>
                  </template>
                </v-text-field>
              </div>
              
              <v-text-field
                :id="formRegister.password ? 'password-register' : ''"
                v-model="passwordConfirmerRegister"
                :type="showRegister ? 'text' : 'password'"
                solo hide-details
                hide-spin-buttons
                :rules="rules.confirmPasswordRegister"
                @keyup="$event => $event.key === 'Enter' ? register() : ''"
              ></v-text-field>
            </div>
            
            <div class="divcol" style="gap: .5em">
              <label for="partner-register">PATROCINADOR</label>
              <v-text-field
                id="partner-register"
                v-model="formRegister.patrocinador"
                solo hide-details
                :disabled="blockPartner"
                @keyup="$event => $event.key === 'Enter' ? register() : ''"
              ></v-text-field>
            </div>
            
            <div class="divcol" style="gap: .5em">
              <label for="phone-register">TELÉFONO <sup>*</sup></label>
              <v-text-field
                id="phone-register"
                v-model="formRegister.telefono.numero"
                type="number"
                hide-spin-buttons
                solo hide-details
                :rules="rules.phone"
                @keyup="$event => $event.key === 'Enter' ? register() : ''"
              >
                <template #prepend>
                  <v-select
                    v-model="formRegister.telefono.prefijoInternacional"
                    :items="countryPhoneList"
                    item-text="number"
                    solo hide-details
                    menu-props="auto"
                    append-icon="mdi-chevron-down"
                  >
                    <template #selection="{ item }">
                      <img :src="item.icon" alt="country flag" class="mr-2 aspect" style="--w: 22px; --of: cover; --br: 50%; --b: 1px solid #fff">
                      <span style="--fw: 100">{{item.number}}</span>
                    </template>
                    
                    <template #item="{ item }">
                      <img :src="item.icon" alt="country flag" class="mr-2 aspect" style="--w: 22px; --of: cover; --br: 50%; --b: 1px solid #fff">
                      <span class="not_clr" style="--fw: 100">{{item.number}}</span>
                    </template>
                  </v-select>
                </template>
              </v-text-field>
            </div>
            
            <v-btn
              :disabled="!$refs.formRegister?.validate() || loadingBtnRegister"
              class="btn align mt-5" style="--bg: var(--primary); --bg-disabled: var(--primary)"
              :loading="loadingBtnRegister"
              @click="register()">
              Registrar
            </v-btn>
          </v-form>
        </section>
      </v-window-item>


      <!-- send email window -->
      <v-window-item id="login-window" :value="3">
        <section>
          <button class="mb-10" @click="$router.go()">
            <img src="~/assets/sources/logos/logo-header.svg" alt="logo" style="--w: max(190px, 17em)">
          </button>

          <v-form
            ref="formSendEmail" class="card divcol"
            style="--bg: var(--primary); --w: 100%; gap: 1em"
            @submit.prevent="sendEmail()"
          >
            <div class="divcol" style="gap: .5em">
              <label class="relative" for="recover-email">CORREO RECUPERACIÓN:
                <!-- <v-tooltip top nudge-top="10px" color="#fff" content-class="custome-tooltip">
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
                </v-tooltip> -->
              </label>
              <v-text-field
                id="recover-email"
                v-model="formSendEmail.email"
                placeholder="Ingresa el correo de tu cuenta"
                hide-details solo
                :rules="rules.email"
                @keyup="$event => $event.key === 'Enter' ? sendEmail() : ''"
              ></v-text-field>
            </div>
            
            <v-btn
              :disabled="!$refs.formSendEmail?.validate() || loadingBtnSendEmail"
              class="btn align" style="--bg: var(--active)"
              :loading="loadingBtnSendEmail"
              @click="sendEmail()">
              Enviar correo
            </v-btn>
          </v-form>
        </section>
      </v-window-item>


      <!-- recover window -->
      <v-window-item id="login-window" :value="4">
        <section>
          <button class="mb-10" @click="$router.go()">
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
  asyncData({ from, store }) {
    let windowStep = 1
    if (from.params.verification?.includes(":recover") && store.state.currentEmailVerification.token) windowStep = 4

    return {
      windowStep
    }
  },
  data() {
    return {
      windowStep: 1,
      formLogin: {
        userName: undefined,
        password: undefined,
      },
      formRegister: {
        email: undefined,
        userName: undefined,
        password: undefined,
        patrocinador: undefined,
        telefono: {
          prefijoInternacional: "+593",
          numero: undefined,
        },
      },
      blockPartner: false,
      passwordConfirmerRegister: undefined,
      formRecover: {
        password: undefined,
      },
      passwordConfirmerRecover: undefined,
      formSendEmail: {
        email: undefined,
      },
      countryPhoneList: [
        {
          icon: require("~/assets/sources/images/spain-flag.jpg"),
          number: "+593",
        },
        {
          icon: require("~/assets/sources/images/spain-flag.jpg"),
          number: "+58",
        },
        {
          icon: require("~/assets/sources/images/usa-flag.jpg"),
          number: "+2134",
        },
      ],
      showLogin: false,
      showRegister: false,
      showRecover: false,
      rules: {
        confirmPasswordRegister: [
          (v) => !!v || "Field required",
          (v) => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(v) || 'Must have uppercase, lowercase, numbers, and a minimum number of 8 characters',
          () => this.formRegister.password === this.passwordConfirmerRegister || 'Password must match',
        ],
        confirmPasswordRecover: [
          (v) => !!v || "Field required",
          () => this.formRecover.password === this.passwordConfirmerRecover || 'Password must match',
        ],
      },
      loadingBtnLogin: false,
      loadingBtnRegister: false,
      loadingBtnRecover: false,
      loadingBtnSendEmail: false,
    }
  },
  head() {
    const title = 'Login';
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
    // this.$targetTooltip('.modalSettings img[alt="info"]')
    // window.addEventListener("resize", () => this.$targetTooltip('.modalSettings img[alt="info"]', 13))

    if (JSON.parse(localStorage.getItem('auth'))) return this.$router.push(this.localePath('/profile'))

    this.getPartnerCode()
  },
  methods: {
    getPartnerCode() {// under construction <------------ 👇
      if (!this.$route.params.login) return;

      this.$axios.get(`${this.baseDomainUrl}/usuarios/patrocinador/${this.$route.params.login.split(":")[1]}`)
      .then(result => {
        console.info(result.data) // console
        this.windowStep = 2
        this.formRegister.patrocinador = result.data
        this.blockPartner = true
      }).catch(err => {
        console.error(err)
        this.$alert("cancel", {desc: err.message})
      })
    },
    login() {
      if (!this.$refs.formLogin.validate()) return this.$alert("cancel", {desc: "verifica que los campos sean correctos"});
      this.loadingBtnLogin = true

      // login endpoint
      this.$axios.post(`${this.baseDomainUrl}/usuarios/login`, this.formLogin).then(result => {
        console.info("<<--login-->>", result.data) // console
        this.loadingBtnLogin = false
        if (result.data.emailVerificado) {
          localStorage.setItem("auth", JSON.stringify({id: result.data.id, token: result.data.token}))
          this.$alert("success", {title: "Logged"})
          this.$router.push(this.localePath("/profile"))
          return;
        }
        
        // redirection to code validation
        this.$alert("success", {title: "Correo enviado", desc: "verifique su bandeja de entrada"})
        this.$router.push(this.localePath("/verification-email/:login"))
      }).catch(err => {
        console.error(err)
        this.loadingBtnLogin = false
        this.$alert("cancel", {
          desc: err.message === "Request failed with status code 400"
          ? "username or password not founded"
          : err.message
        })
      })
    },
    register() {
      if (!this.$refs.formRegister.validate()) return this.$alert("cancel", {desc: "verifica que los campos sean correctos"});
      this.loadingBtnRegister = true

      // register endpoint
      this.$axios.post(`${this.baseDomainUrl}/usuarios/registro`, this.formRegister).then(result => {
        console.info("<<--register-->>", result.data) // console
        this.loadingBtnRegister = false
        // storage current email
        this.$store.commit("emailVerification", {email: this.formRegister.email})
        
        // redirection to code validation
        this.$alert("success", {title: "Correo enviado", desc: "verifique su bandeja de entrada"})
        this.$router.push(this.localePath("/verification-email/:login"))
      }).catch(err => {
        console.error(err)
        this.loadingBtnRegister = false
        this.$alert("cancel", {
          desc: err.message === "Request failed with status code 400"
          ? "username or email alreay exist"
          : err.message
        })
      })
    },
    sendEmail() {
      if (!this.$refs.formSendEmail.validate()) return this.$alert("cancel", {desc: "verifica que los campos sean correctos"});
      this.loadingBtnSendEmail = true

      // recover endpoint
      this.$axios.post(`${this.baseDomainUrl}/usuarios/solicitarCambioPassword`, {...this.formSendEmail})
      .then(result => {
        console.info("<<--send email-->>", result.data) // console
        this.loadingBtnSendEmail = false
        // storage current email
        this.$store.commit("emailVerification", {...this.formSendEmail})
        
        // redirection to code validation
        // this.$alert("success", {title: "Correo enviado", desc: "verifique su bandeja de entrada"})
        this.$router.push(this.localePath("/verification-email/:recover"))
      }).catch(err => {
        console.error(err)
        this.loadingBtnSendEmail = false
        this.$alert("cancel", {desc: err.message})
      })
    },
    recover() {
      if (!this.$refs.formRecover.validate()) return this.$alert("cancel", {desc: "verifica que los campos sean correctos"});
      this.loadingBtnRecover = true

      // recover endpoint
      this.$axios.post(`${this.baseDomainUrl}/usuarios/cambiarPassword`, {"token": this.currToken, ...this.formRecover})
      .then(result => {
        console.info("<<--recover-->>", result.data) // console
        this.loadingBtnRecover = false
        
        this.$alert("success", {desc: "contraseña recuperada exitosamente"})
        this.$router.go()
      }).catch(err => {
        console.error(err)
        this.loadingBtnRecover = false
        this.$alert("cancel", {desc: err.message})
      })
    },
  }
}
</script>

<style src="~/assets/styles/pages/login.scss" lang="scss" />
