<template>
  <div id="withdrawals" class="divcol">
    <v-card class="card divcol" style="--bg: blue">
      
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
