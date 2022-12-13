<template>
  <div id="contributions" class="grid">
    <!-- section top -->
    <section id="contributions--top">
      <div id="contributions--top-wrapper" class="divcol center tcenter">
        <div class="divcol bold center" style="gap: 2px; --fs: max(17px, 2em)">
          <span class="hspan">Balance Wallet</span>
          <span class="hspan">6252 USDT</span>
        </div>

        <v-sheet id="contributions--top-content" class="card divcol center bold">
          <span class="hspan" style="--under: underline">100</span>
          <span class="hspan">USDT</span>
          
          <v-btn class="btn" style="--bg: #03BBD4">Aportar</v-btn>
        </v-sheet>
      </div>
    </section>


    <!-- section bottom -->
    <section id="contributions--bottom" class="divcol" style="gap: 20px">
      <h2 class="p tcenter" style="--c: var(--accent)">APORTACIONES</h2>
      
      <div class="divcol" style="gap: inherit">
        <!-- nedd try doing grid this <--- -->
        <v-card v-for="(item, i) in dataContributions" :key="i" class="card grid" style="--bg: var(--accent)">
          <div class="divcol jcenter anchorline">
            <span class="hspan">{{item.price}} USDT</span>
            <span class="hspan">{{item.state}}</span>
            <span>INICIA: {{item.start_date}}</span>
            <span style="white-space: nowrap">FIN PENALIDAD: {{item.penality_date}}</span>
          </div>

          <div class="divcol">
            <v-slider
              v-model="item.barPercent"
              readonly
              :style="`--bg-image: url(${require(`assets/sources/images/${
                item.state === 'en proceso' ? 'progress-in-process'
                : item.state === 'activo' ? 'progress-active'
                : item.state === 'retirando' ? 'progress-withdrawing' : ''
              }.png`)})`"
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

export default {
  name: "HomePage",
  mixins: [computeds],
  data() {
    return {
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
  methods: {
  }
};
</script>

<style src="~/assets/styles/pages/contributions.scss" lang="scss" />
