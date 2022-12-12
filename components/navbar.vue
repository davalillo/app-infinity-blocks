<template>
  <div>
    <MenuNavbar ref="menu"></MenuNavbar>
    
    <v-app-bar id="navbar" color="transparent" absolute class="isolate">
      <v-tabs v-model="currentTab" hide-slider style="--bg-active: var(--active); --c-active: #fff; --g: 0">
        <v-tab id="navbar-toggle" class="menu-toggle-activator">
          <v-icon size="2em" style="color: #fff !important">mdi-menu</v-icon>
        </v-tab>
        
        <v-tab v-for="(item, i) in dataNavbar" :key="i" class="tcap">
          {{item.name}}
        </v-tab>
      </v-tabs>
    </v-app-bar>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "NavbarComponent",
  mixins: [computeds],
  data() {
    return {
      currentTab: 0,
      dataNavbar: [
        {
          name: "perfil",
          to: "/"
        },
        {
          name: "aportaciones",
          to: "/"
        },
        {
          name: "retiros",
          to: "/"
        },
        {
          name: "p. asesores",
          to: "/"
        }
      ],
      dataMenuLogin: [
        { key:"logout", name:"Log out" },
      ],
    };
  },
  // created() {
  //   const theme = localStorage.getItem("theme");
  //   if (theme) {
  //     setTimeout(() => {
  //       this.$store.commit("switchTheme", theme);
  //     }, 100);
  //   }
  //   if (theme === "light") {this.themeButton = true}
  //   else {this.themeButton = false}
  // },
  methods: {
    // changeTheme(theme) {
    //   this.$store.commit("switchTheme", theme);
    //   this.themeButton = !this.themeButton;
    // },
  },
};
</script>

<style src="~/assets/styles/components/navbar.scss" lang="scss" />
