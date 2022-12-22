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
        <sup v-if="verified">
          <img src="~/assets/sources/icons/verified.svg" alt="verified" class="aspect" style="--w: .8em">
        </sup>
      </h2>
      
      <span v-if="verified" class="hspan" style="word-break: break-all; --fs: max(16px, 1.15em)">
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
                v-bind="attrs" v-on="on" @click="$router.push(localePath('/settings'))"
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
      
      <span class="btn font1" style="--fs: max(18px, 2.4em);--c: #fff; --bg: #0f1273; --br: 0.4em; --fw: 800; --p: .2em .5em">
        1000 USDT
      </span>
    </v-card>

    <div id="container-contact" class="divcol">
      <span class="hspan mt-5">Patrocinador:</span>
      <span class="hspan">Juan Antonio Perez Loza</span>
      <span class="hspan">juanantonio@gmail.com</span>
      <span class="hspan">000 000 00</span>
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
      verified: false,
      // for test <---------------
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
