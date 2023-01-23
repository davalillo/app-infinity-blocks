<template>
  <div id="advisers" class="divcol center" :style="!activate ? 'gap: 3.5em' : 'gap: 1.8em'" :class="{activate: !activate}">
    <template v-if="!activate">
      <img id="advisers-logo" src="~/assets/sources/logos/logo.svg" alt="logo">

      <v-card class="card divcol center tcenter bg-image" style="--bg: #2B4DDF; --w: var(--w-items); gap: 2em">
        <div class="divcol" style="gap: .3em">
          <h2 class="p font1" style="--fw: 600">MEMBRESÍA DE ASESOR</h2>
          <span class="hspan" style="--fw: 100; --fs: max(16px, 1.5em)">247 USDT / AL AÑO</span>
        </div>
        
        <v-btn class="btn" style="--bg: var(--primary)" @click="activate = true">
          Activar
        </v-btn>
      </v-card>

      <v-card class="card divcol center tcenter relative bg-image" style="--bg: #868686; --w: var(--w-items); gap: .5em">
        <img id="premium-decoration" src="~/assets/sources/icons/premium-coin.svg" alt="premium coin" class="aspect">

        <h2 class="p font1" style="--fw: 600">MEMBRESÍA DE ASESOR PREMIUM</h2>
        
        <v-btn class="btn" style="--bg: hsl(263, 70%, 20%); --br: 0.5em; --fw: 400; --p: .3em .5em">Próximamente</v-btn>
        
        <span class="hspan font3" style="--fs: max(14px, 1.125em); opacity: .9">Incluye certificación como<br>Asesor Cripto Descentralizado</span>
      </v-card>
    </template>


    <template v-else>
      <v-card class="card divcol center tcenter" style="--bg: #2B4DDF; --w: var(--w-items); gap: 1em">
        <div class="divcol" style="gap: .3em">
          <h2 class="p font1" style="--fw: 600">MEMBRESÍA DE ASESOR</h2>
          <span class="hspan font3" style="--fw: 100; --fs: max(16px, 1.2em)">225 DÍAS RESTANTES</span>
        </div>
        
        <img src="~/assets/sources/icons/checked.svg" alt="checked icon" class="aspect" style="--w: 5em">
        
        <v-btn class="btn" style="--bg: var(--primary); --fw: 400" @click="activate = true">
          Renovar
        </v-btn>
      </v-card>

      <v-card class="card divcol center tcenter" style="--bg: var(--primary); --w: var(--w-items); gap: .5em">
        <div class="divcol" style="gap: .3em">
          <h2 class="p font1" style="--fw: 600">BONO CARRERA</h2>
          <span class="hspan font3" style="--fw: 100; --fs: max(16px, 1.2em)">3000/4000</span>
        </div>
        
        <v-slider
          v-model="bonbarPercent"
          readonly
          hide-details
          :style="`--thumb-text: '${bonbarPercent}%'`"
        ></v-slider>
        
        <v-btn class="btn" style="--bg: #868686; --fw: 400" @click="activate = true">
          Solicitar
        </v-btn>
      </v-card>

      <v-card class="card divcol center tcenter" style="--bg: var(--accent); --w: var(--w-items); gap: .8em">
        <div class="divcol" style="gap: .3em">
          <h2 class="p font1 mb-1" style="--fw: 600">BONO DIRECTO</h2>
          <h3 class="p" style="--fw: 100">1250 USDT</h3>
        </div>
        
        <v-btn class="btn" style="--bg: var(--primary); --fw: 400" @click="activate = true">
          Solicitar
        </v-btn>
      </v-card>

      <v-card class="card divcol center tcenter" style="--bg: var(--primary); --w: var(--w-items); gap: .8em">
        <div class="divcol" style="gap: .3em">
          <h2 class="p font1 mb-1" style="--fw: 600">BONO RESIDUAL</h2>
          <h3 class="p" style="--fw: 100">0 USDT</h3>
        </div>
        
        <v-btn class="btn" style="--bg: var(--accent); --fw: 400" @click="activate = true">
          Solicitar
        </v-btn>
      </v-card>

      <v-btn class="btn mt-4 center font1" style="--g: 8px; --bg: #2B4DDF; --p: .5em 1.5em">
        Mi Negocio <img src="~/assets/sources/icons/download.svg" alt="download icon" style="--w: .75em">
      </v-btn>
    </template>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "AdvisersPage",
  mixins: [computeds],
  data() {
    return {
      activate: false,
      bonbarPercent: 75,
      userId: null,
    }
  },
  head() {
    const title = 'Asesores';
    return {
      title,
    }
  },
  mounted() {
    this.dataUser = JSON.parse(localStorage.auth)
    this.userId = this.dataUser.id
    this.getMembership()
  },
  methods: {
    getMembership() {
      this.$axios.get(`${this.baseDomainUrl}/asesores/` + this.userId).then(result => {
        console.log(result, 'get membresia')
      }).catch(err => { console.log(err, 'no tiene membresia') })
    },
    requestBonus() {
      this.$axios.post(`${this.baseDomainUrl}/asesores/solicitarBono`, {
        "tipo": "CarreraEnum"
      }).then(result => {
        console.log(result)
      }).catch(err => { console.log(err) })
    },
    validateBonus() {
      this.$axios.post(`${this.baseDomainUrl}/asesores/validarBono`, {
        "tipo": "CarreraEnum",
        "codigoConfirmacion": 0
      }).then(result => {
        console.log(result)
      }).catch(err => { console.log(err) })
    },
    getReport() {
      this.$axios.get(`${this.baseDomainUrl}/asesores/informe/` + this.userId).then(result => {
        console.log(result)
      }).catch(err => { console.log(err) })
    },
    membership() {
      this.$axios.post(`${this.baseDomainUrl}/asesores/alta/`, {
        "txnHash": "/0x4d3adfe8A9f892Aa0214bbeabE46c850CE2EC07c1B565CAa8e45c42222E55d15ea/"
      }).then(result => {
        console.log(result)
      }).catch(err => { console.log(err) })
    },
  }
};
</script>

<style src="~/assets/styles/pages/advisers.scss" lang="scss" />
