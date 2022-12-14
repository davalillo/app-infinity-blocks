<template>
  <div id="profile" class="divcol center tcenter" style="--w-avatar: 18em">
    <div class="divcol center">
      <img src="~/assets/sources/logos/logo-header.svg" alt="logo" class="mb-4" style="--w: calc(var(--w-avatar) - 5em)">
      
      <img
        src="~/assets/sources/images/avatar.png" alt="avatar" class="aspect"
        style="--w: var(--w-avatar); --br: 50%; --p: 1px; --b: 0.25em solid #fff"
      >
      
      <div class="center" style="gap: 0.625em">
        <img v-for="(item, i) in 3" :key="i" src="~/assets/sources/icons/star.svg" alt="stars" style="--w: 2em">
      </div>
      
      <h2 class="p">
        pedroperez01
        <sup>
          <img src="~/assets/sources/icons/verified.svg" alt="verified" style="--w: .8em">
        </sup>
      </h2>
      
      <span class="hspan" style="word-break: break-all; --fs: max(16px, 1.15em)">
        0x5d2D75ED51D4A3B275f00F86632543f4010E9232
      </span>
    </div>

    <v-card class="card divcol center tcenter tup" style="--bg: #2B4DDF; --w: min(100%, 24em); gap: 1em">
      <div class="divcol center">
        <h2 class="p font1 mb-1" style="--fw: 600; --fs: max(21px, 1.5em)">APORTACIÓN</h2>
        <h3 class="p" style="--fw: 100; --fs: max(17px, 1.2em)">ACTIVA</h3>
      </div>
      
      <span class="btn font1" style="--fs: max(18px, 2.4em);--c: #fff; --bg: #0f1273; --br: 0.4em; --fw: 800; --p: .2em .5em">
        1000 USDT
      </span>
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
    const title = 'Perfil';
    return {
      title,
    }
  },
  methods: {
  }
};
</script>

<style src="~/assets/styles/pages/profile.scss" lang="scss" />
