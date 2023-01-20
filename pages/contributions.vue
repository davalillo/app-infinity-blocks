<template>
  <div id="contributions" class="grid">
    <!-- section top -->
    <section id="contributions--top">
      <div id="contributions--top-wrapper" class="divcol center tcenter">
        <div class="divcol center" style="gap: 2px">
          <h4 class="p font3">Balance Wallet</h4>
          <h4 v-if="address !== null" class="p font3">6252 USDT</h4>
          <v-btn v-else class="btn" style="--bg: #03BBD4" @click="conectWallet()">Conectar wallet</v-btn>
        </div>

        <v-sheet id="contributions--top-content" class="card divcol center" style="--fw: 400">
          <!-- <span class="hspan anchorlinea" style="--b: -.2em;--t: auto; --h-line: 2px; --bg-line: #fff; --fs: max(15px, 3em);">100</span> -->
          <v-text-field v-model="amountContribute"></v-text-field>
          <span class="hspan" style="--fs: max(15px, 2.5em);">USDT</span>
          
          <v-btn class="btn" style="--bg: #03BBD4" @click="contribute()">Aportar</v-btn>
        </v-sheet>
      </div>
    </section>


    <!-- section bottom -->
    <section id="contributions--bottom" class="divcol" style="gap: 20px">
      <h2 class="p tcenter htitle" style="--c: var(--accent)">APORTACIONES</h2>
      
      <div class="divcol" style="gap: inherit">
        <v-card v-for="(item, i) in dataContributions" :key="i" class="card grid" style="--bg: var(--accent)">
          <div class="divcol jcenter anchorlineb font1">
            <span class="hspan">{{item.price}} USDT</span>
            <span class="hspan tup">{{item.state}}</span>
            <span>INICIA: {{item.start_date}}</span>
            <span style="white-space: nowrap">FIN PENALIDAD: {{item.penality_date}}</span>
          </div>

          <div class="divcol" style="gap: 15px">
            <v-slider
              v-model="item.barPercent"
              readonly
              :style="`--bg-image: url(${require(`assets/sources/images/${
                item.state === 'en proceso' ? 'progress-in-process'
                : item.state === 'activo' ? 'progress-active'
                : item.state === 'retirando' ? 'progress-withdrawing' : ''
              }.png`)})`"
              hide-details
            ></v-slider>
            
            <button class="alignr">
              <img
                :src="require(`~/assets/sources/icons/${
                  item.state === 'en proceso' ? 'in-process'
                  : item.state === 'activo' ? 'active'
                  : item.state === 'retirando' ? 'withdrawing' : ''
                }.svg`)" alt="action icon" style="--w: 30px">
            </button>
          </div>
        </v-card>
      </div>
    </section>
  </div>
</template>

<script>

import computeds from '~/mixins/computeds'
// const wallet = useMetaMaskWallet()
export default {
  name: "ContributionsPage",
  mixins: [computeds],
  data() {
    return {
      dataUser: [],
      userId: 0,
      address: null,
      amountContribute: 0, 
      dataContributions: [
        {
          price: 1000,
          state: "en proceso",
          start_date: "10 / Nov / 2023",
          penality_date: "10 / Nov / 2023",
          barPercent: 10,
        },
        {
          price: 1000,
          state: "activo",
          start_date: "08 / Jun / 2023",
          penality_date: "08 / Jun / 2023",
          barPercent: 50,
        },
        {
          price: 1000,
          state: "retirando",
          start_date: "14 / Nov / 2023",
          penality_date: "14 / Nov / 2023",
          barPercent: 100,
        },
      ],
    }
  },
  head() {
    const title = 'Aportaciones';
    return {
      title,
    }
  },
  mounted() {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
    }
    console.log(window.ethereum.isConnected())
    // console.log(window.ethereum.networkVersion)
    this.address = window.ethereum.selectedAddress
    console.log(this.address, 'address')
    this.dataUser = JSON.parse(localStorage.auth)
    this.userId = this.dataUser.id
  },
  methods: {
    async conectWallet() {
      await window.ethereum.request({ method: 'eth_requestAccounts' }).then(resp => {
        console.log(resp)
        this.address = resp[0]
        this.$router.go(0)
      }).catch(err => { console.log(err) })
    },
    getContributionUser() {
      this.$axios.get(`${this.baseDomainUrl}/aportaciones/` + this.userId).then(result => {
        console.log(result)
      }).catch({})
    },
    contribute() {
      this.$axios.post(`${this.baseDomainUrl}/aportaciones`, {
        "userId": this.userId,
        "valor": this.amountContribute,
        "txnHash": this.address,
      }).then(result => {
        console.log(result)
      }).catch({})
    },
    withdrawContributions() {
      this.$axios.post(`${this.baseDomainUrl}/aportaciones/retirar`, {
        "userId": this.userId,
        "aportacionId": 0
      }).then(result => {
        console.log(result)
      }).catch({})
    },
  }
};
</script>

<style src="~/assets/styles/pages/contributions.scss" lang="scss" />
