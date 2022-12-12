<template>
  <div id="menu-navbar">
    <!--////////////// drawers //////////////-->
    <!-- toggle drawer -->
    <CustomeDrawer :model="drawer" @update="drawer = $event">
      <template #header>
        <v-btn id="navbar-toggle" @click="drawer = false">
          <v-icon size="clamp(max(18px, 2em), 3vw, min(34.39px, 3em))">mdi-menu</v-icon>
        </v-btn>
        
        <img src="~/assets/sources/logos/logo-header.svg" alt="logo" style="--w: 65%">
      </template>


      <template #content>
        <v-expansion-panels focusable accordion class="anim_moveleft" style="--c: #fff">
          <v-expansion-panel
            v-for="(item, i) in $parent.dataNavbar" :key="i"
            @click="item.name !== 'portfolio' ? $router.push(localePath(item.to)) : ''"
          >
            <v-expansion-panel-header class="h10_em" expand-icon="mdi-menu-down" :hide-actions="item.to ? true : false">
              {{ item.name }}
            </v-expansion-panel-header>

            <v-expansion-panel-content v-if="!item.to">
              <v-list>
                <v-list-item
                  v-for="(item2,i2) in item.selection" :key="i2" :ripple="false"
                  :to="localePath(item2.to)" @click="drawer = false"
                >
                  <v-list-item-title class="center h10_em">
                    <span>{{ item2.name}}</span>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </template>


      <template #footer>
        <span class="h10_em" style="--c: #fff">Join us on:</span>

        <div class="center">
          <v-btn v-for="(item,i) in dataSocial" :key="i" icon :href="item.url" target="_blank">
            <img :src="require(`~/assets/sources/icons/${item.icon}.svg`)" alt="social red">
          </v-btn>
        </div>
      </template>
    </CustomeDrawer>



    <!--////////////// menues //////////////-->
    <!-- menu random -->
    <v-menu v-model="menuToggle" content-class="menu-toggle" activator=".menu-toggle-activator" :close-on-content-click="false">
      <v-btn id="navbar-toggle" class="menu-toggle-btn" @click="menuToggle = false">
        <v-icon size="clamp(max(18px, 2em), 3vw, min(34.39px, 3em))">mdi-menu</v-icon>
      </v-btn>

      <img class="menu-toggle-logo align" src="~/assets/sources/logos/logo-header.svg" alt="logo">

      <div class="center" style="gap: 10px">
        <span class="hspan">IDIOMA:</span>
        
        <div class="center" style="gap: 8px; --fs: 10px">
          <div class="divcol center" style="gap: 4px">
            <img
              src="~/assets/sources/images/spain-flag.jpg" alt="español" class="aspect"
              style="--w: 30px; --of: cover; --b: 1px solid #fff; --br: 50%">
            <span class="hspan">ESP</span>
          </div>
          
          <div class="divcol center" style="gap: 4px">
            <img
              src="~/assets/sources/images/usa-flag.jpg" alt="english" class="aspect"
              style="--w: 30px; --of: cover; --b: 1px solid #fff; --br: 50%">
            <span class="hspan">EN</span>
          </div>
        </div>
      </div>

      <div class="divcol center" style="gap: 20px">
        <div class="divcol tcenter" style="--fs: 15px; gap: 5px">
          <span class="hspan">Hora Oficial</span>
          <span class="hspan">Infinity Blocks</span>
        </div>

        <span class="clock">
          <span>16 :</span>
          <span>09 :</span>
          <span>12</span>
        </span>
      </div>

      <v-list color="transparent">
        <v-list-item v-for="(item, i) in dataToggle" :key="i" v-ripple="{class: 'activeRipple'}" @click.prevent="">
          <v-list-item-title>{{item.name}}</v-list-item-title>
        </v-list-item>
      </v-list>

      <div class="center" style="gap: 8px">
        <v-btn v-for="(item, i) in dataSocials" :key="i" icon :href="item.url" target="_blank">
          <img :src="require(`~/assets/sources/icons/${item.icon}.svg`)" :alt="`${item.icon} icon`" style="--w: 30px">
        </v-btn>
      </div>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "NavbarMenuComponent",
  data() {
    return {
      drawer: false,
      menuToggle: false,
      dataToggle: [
        { name: "configuración", icon: "", to: "" },
        { name: "tutoriales", icon: "", to: "" },
        { name: "web oficial", icon: "", to: "" },
        { name: "contactanos", icon: "", to: "" },
      ],
      dataSocials: [
        { icon:"facebook", url:"#" },
        { icon:"instagram", url:"#" },
        { icon:"youtube", url:"#" },
        { icon:"telegram", url:"#" }
      ],
    };
  },
  methods: {
  },
};
</script>

<style src="~/assets/styles/components/navbar.scss" lang="scss" />
