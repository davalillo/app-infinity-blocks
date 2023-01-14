<template>
  <div id="profile" class="divcol center tcenter" style="--w-avatar: 18em">
    <div class="divcol center">
      <img src="~/assets/sources/logos/logo-header.svg" alt="logo" class="mb-4" style="--w: calc(var(--w-avatar) - 5em)">
      
      <img
        :src="user.urlFoto ? user.urlFoto : require('~/assets/sources/images/avatar.png')" alt="avatar" class="aspect"
        style="--w: var(--w-avatar); --br: 50%; --p: 1px; --b: 0.25em solid #fff"
      >
      
      <div class="center" style="gap: 0.625em">
        <img v-for="(item, i) in user.estrellasPlanBeneficio" :key="i" src="~/assets/sources/icons/star.svg" alt="stars" style="--w: 2em">
      </div>
      
      <h2 class="p">
        {{user.userName}}
        <sup v-if="user.usuarioVerificado">
          <img src="~/assets/sources/icons/verified.svg" alt="verified" class="aspect" style="--w: .8em">
        </sup>
      </h2>
      
      <span v-if="user.usuarioVerificado" class="hspan" style="word-break: break-all; --fs: max(16px, 1.15em)">
        0x5d2D75ED51D4A3B275f00F86632543f4010E9232
      </span>
      
      <span v-else class="hspan mt-0" style="word-break: break-all; --fs: max(15px, 1.15em)">
        Verifica tu cuenta, por favor
        <sup>
          <v-tooltip top nudge-top="10px" color="#fff" content-class="custome-tooltip">
            <template #activator="{ on, attrs }">
              <img
                src="~/assets/sources/icons/warning.svg" alt="verify alert" class="aspect pointer"
                style="--w: clamp(1.5em, 1.7vw, 1.7em)"
                v-bind="attrs" v-on="on" @click="goToSettings()"
              >
            </template>
            
            <span>
              Ir a la configuración
            </span>
          </v-tooltip>
        </sup>
      </span>
    </div>

    <v-card class="card divcol center tcenter tup" style="--bg: #2B4DDF; --w: var(--w-items); gap: 1em">
      <div class="divcol center">
        <h2 class="p font1 mb-1" style="--fw: 600; --fs: max(21px, 1.5em)">APORTACIÓN</h2>
        <h3 class="p" style="--fw: 100; --fs: max(17px, 1.2em)">ACTIVA</h3>
      </div>
      
      <span v-if="user.aportacionActiva" class="btn font1" style="--fs: max(18px, 2.4em);--c: #fff; --bg: #0f1273; --br: 0.4em; --fw: 800; --p: .2em .5em">
        {{user.aportacionActiva}} USDT
      </span>
    </v-card>

    <div v-if="user.patrocinador" id="container-contact" class="divcol">
      <span class="hspan mt-5">Patrocinador:</span>
      <span class="hspan">{{user.patrocinador?.name}}</span>
      <span class="hspan">{{user.patrocinador?.email}}</span>
      <span class="hspan">{{user.patrocinador?.telefono}}</span>
    </div>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "ProfilePage",
  mixins: [computeds],
  data() {
    return {
      user: {},
    }
  },
  head() {
    const title = 'Perfil';
    return {
      title,
    }
  },
  mounted() {
    this.getDataUser()
  },
  methods: {
    getDataUser() {
      this.$axios.get(`${this.baseDomainUrl}/usuarios/perfil/${this.uid}`)
      .then(result => {
        console.info(result.data) // console

        // set user data
        this.user = {
          id: result.data.id,
          urlFoto: result.data.urlFoto,
          estrellasPlanBeneficio: result.data.estrellasPlanBeneficio,
          userName: result.data.userName,
          walletAsociada: result.data.walletAsociada,
          usuarioVerificado: result.data.usuarioVerificado,
          aportacionActiva: result.data.aportacionActiva,
          patrocinador: {
            nombre: result.data.patrocinador.name,
            email: result.data.patrocinador.email,
            telefono: result.data.patrocinador.telefono,
          }
        }
      }).catch(err => {
        console.error(err)
        this.$alert("cancel", {desc: err.message})
        if (err.message.includes("401")) localStorage.removeItem("auth")
        this.$router.go()
      })
    },
    goToSettings() {
      this.$router.push(this.localePath('/settings'))
      setTimeout(() => {
        this.$scrollTo("verification-section")
      }, 500);
    },
  }
};
</script>

<style src="~/assets/styles/pages/profile.scss" lang="scss" />
