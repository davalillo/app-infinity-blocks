<template>
  <div id="withdrawals" class="divcol center" style="gap: 1.8em">
    <v-card class="card divcol center tcenter" style="--bg: #2B4DDF; --w: min(100%, 30em); gap: 0.625em">
      <h2 class="p">BENEFICIOS DISPONIBLES</h2>
      <h3 class="p">2550 USDT</h3>
      <v-btn class="btn" style="--bg: #03BBD4">Solicitar</v-btn>
    </v-card>

    <h2
      class="p anchorlineb pt-7"
      style="--b: auto; --h-line: 3px; --fs: max(16px, 1.8em); --ls: .03em">
      RETIROS
    </h2>

    <v-card v-for="(item, i) in dataWithdraws" :key="i" class="card divcol center" style="--bg: var(--primary); --w: min(100%, 30em); gap: 20px">
      <div class="fwrap fill_w">
        <div class="divcol anchorlineb pb-2" style="--l: auto; --w-line: 1px; --h-line: 100%">
          <span class="hspan tcap" style="--fs: max(18px, 1.4em)">{{item.type}}</span>
          <h2 class="p tup">{{item.price}} usdt</h2>
        </div>
        
        <h2 class="p tup" style="--stroke: .5px; --fs: max(12px, 1em); text-align: end">{{item.state}}</h2>
      </div>
      
      <span v-if="item.date" class="hspan" style="--fw: bold; --fs: max(14px, 1.2em) ; text-shadow: 2px 2px #000">{{item.date}}</span>
      <v-btn v-else class="btn" style="--p: 8px 1.5em; --bg: var(--accent)">RETIRAR</v-btn>
    </v-card>

    <h2 class="p" style="--fs: max(16px, 1.8em); --ls: .03em">
      HISTORIAL
    </h2>

    <v-card class="card divcol center" style="--bg: var(--accent); --w: min(100%, 30em); gap: 20px">
      <v-data-table
        :headers="headerHistorial"
        :items="dataHistorial"
        hide-default-footer
        mobile-breakpoint="-1"
        class="fill_w"
        style=""
      >
        <template #[`item.price`]="{ item }">
          {{item.price}} USDT
        </template>
      </v-data-table>

      <v-btn class="btn" style="--bg: var(--primary)">Ver más</v-btn>
    </v-card>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "HomePage",
  mixins: [computeds],
  data() {
    return {
      dataWithdraws: [
        {
          type: "bono residual",
          price: 1500,
          state: "en proceso",
          date: "3d | 8h | 10m",
        },
        {
          type: "beneficio",
          price: 1000,
          state: "en proceso",
          date: "3d | 8h | 10m",
        },
        {
          type: "bono directo",
          price: 1000,
          state: "listo",
          date: undefined,
        },
      ],
      
      headerHistorial: [
        { value: "type", text: "TIPO", align: "center", sortable: false },
        { value: "price", text: "VALOR", align: "center", sortable: false },
        { value: "date", text: "RETIRO", align: "center", sortable: false },
      ],
      dataHistorial: [
        {
          type: "residual",
          price: 1000,
          date: "12/11/22",
        },
        {
          type: "directo",
          price: 1500,
          date: "10/11/22",
        },
        {
          type: "beneficio",
          price: 2000,
          date: "8/11/22",
        },
      ],
    }
  },
  head() {
    const title = 'Retiros';
    return {
      title,
    }
  },
  methods: {
  }
};
</script>

<style src="~/assets/styles/pages/withdrawals.scss" lang="scss" />
