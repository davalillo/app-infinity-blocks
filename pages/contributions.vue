<template>
  <div id="contributions" class="grid">
    <!-- section top -->
    <section id="contributions--top">
      <div id="contributions--top-wrapper" class="divcol center tcenter">
        <div class="divcol center" style="gap: 2px">
          <h4 class="p font3">Balance Wallet</h4>
          <h4 v-if="address !== null" class="p font3">{{ balanceUSD.toFixed(2) }} USD</h4>
          <h4 v-else class="p font3">Conecta tu wallet</h4>
          <!-- <v-btn v-else class="btn" style="--bg: #03BBD4" @click="conectWallet()">Conecta tu wallet</v-btn> -->
        </div>

        <v-sheet id="contributions--top-content" class="card divcol center" style="--fw: 400">
          <!-- <span class="hspan anchorlinea" style="--b: -.2em;--t: auto; --h-line: 2px; --bg-line: #fff; --fs: max(15px, 3em);">100</span> -->
          <v-text-field v-model="amountContribute"></v-text-field>
          <span class="hspan" style="--fs: max(15px, 2.5em);">USDT</span>
          
          <v-btn v-if="address" :disabled="amountContribute < 10 || amountContribute > 1000000" class="btn" style="--bg: #03BBD4" @click="sendTransaction()">Aportar</v-btn>
          <v-btn v-else class="btn" style="--bg: #03BBD4" @click="connect()">Conectar Wallet</v-btn>
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
import Web3 from 'web3'
import detectEthereumProvider from '@metamask/detect-provider'
import computeds from '~/mixins/computeds';
const ethereum = window.ethereum

const web3BSC = new Web3(
  new Web3.providers.HttpProvider(
    `https://bsc-testnet.nodereal.io/v1/927cef32ddf04e73a83cad58991a6974`
  )
);

export default {
  name: "ContributionsPage",
  mixins: [computeds],
  data() {
    return {
      dataUser: [],
      userId: 0,
      address: null,
      amountContribute: 0, 
      provider: null,
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
      balanceUSD: 0,
    }
  },
  head() {
    const title = 'Aportaciones';
    return {
      title,
    }
  },
  mounted() {
    // if (typeof window.ethereum !== 'undefined') {
    //   console.log('MetaMask is installed!');
    // }
    this.Provider()
    
    // console.log(window.ethereum.isConnected())
    // console.log(window.ethereum.networkVersion)
    this.address = window.ethereum.selectedAddress
    this.dataUser = JSON.parse(localStorage.auth)
    this.userId = this.dataUser.id
    this.getBalance()
    this.gasPrice()
    this.balance()
  },
  methods: {
    async Provider() {
      this.provider = await detectEthereumProvider();
      console.log(this.provider, 'proveedor')
      if (this.provider) {
        this.startApp(this.provider); // Initialize your app
      } else {
        console.log('Please install MetaMask!');
      }
    },
    startApp(provider) {
      // If the provider returned by detectEthereumProvider is not the same as
      // window.ethereum, something is overwriting it, perhaps another wallet.
      if(provider === window.ethereum) {
        console.log('hay una sola cuenta')
      }
      if (provider !== window.ethereum) {
        console.error('Do you have multiple wallets installed?');
      }
      // Access the decentralized web!
    },
    async conectWallet() {
      await window.ethereum.request({ method: 'eth_requestAccounts' }).then(resp => {
        console.log(resp)
        this.address = resp[0]
        this.$router.go(0)
      }).catch(err => { console.log(err) })
    },
    connect() {
      ethereum
        .request({ method: 'eth_requestAccounts' })
        .then(resp => { 
          console.log(resp)
          this.address = resp[0]
          this.$router.go(0)
        })
        .catch((err) => {
          if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            console.log('Please connect to MetaMask.');
          } else {
            console.error(err);
          }
        });
    },
    async getBalance() {
      const balanceBSC = await web3BSC.eth.getBalance(this.address)
      const balance = parseInt(balanceBSC) / 1000000000000000000
      this.$axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(resp => {
        console.log(resp.data[0].current_price)
        this.balanceUSD = balance * resp.data[0].current_price
        console.log(this.balanceUSD, 'balance')
      })
      
    },
    getContributionUser() {
      this.$axios.get(`${this.baseDomainUrl}/aportaciones/` + this.userId).then(result => {
        console.log(result)
      }).catch({})
    },
    contribute(hash) {
      this.$axios.post(`${this.baseDomainUrl}/aportaciones`, {
            "userId": this.userId,
            "valor": this.amountContribute,
            "txnHash": hash,
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
      }).catch(err => { console.log(err) })
    },
    sendTransaction() {
      this.$axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=binancecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(async resp => {
        console.log(resp.data[0].current_price)
        const monto = (this.amountContribute / resp.data[0].current_price) * 1000000000000000000
        console.log(monto)
        const params = [
          {
            from: this.address,
            to: '0xC0118EDec2296733ED668cc3c63ea88163BF13FE',
            gas: '21000', // 30400
            gasPrice: '10000000000', // 10000000000000
            value: web3BSC.utils.toHex(monto), // 2441406250 
            data:
              '0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675',
          },
        ]
        await ethereum.request({ method: 'eth_sendTransaction', params }).then((result) => {
          // The result varies by RPC method.
          // For example, this method will return a transaction hash hexadecimal string on success.
          console.log(result)
          this.contribute(result)
        }).catch((error) => {
          console.log(error)
          // If the request fails, the Promise will reject with an error.
        });   
      })
    },
    async gasPrice() {
      const gasPrice = await web3BSC.eth.getGasPrice()
      console.log(gasPrice, 'gasPrice')
    },
    async balance() {
      const params = [this.address]
      await ethereum.request({ method: 'eth_getBalance', params }).then(result => {
        const balance = result
        const number = web3BSC.utils.hexToNumberString(balance)
        console.log(number/1000000000000000000)
      })
    }
  }
};
</script>

<style src="~/assets/styles/pages/contributions.scss" lang="scss" />
