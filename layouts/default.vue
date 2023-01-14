<template>
  <v-app
    id="layout"
    v-touch="{
      left: () => swipe('left'),
      right: () => swipe('right'),
    }"
    class="relative"
    :style="`--bg: ${isExceptionRoute ? '' : `url(${require('~/assets/sources/images/bg-app.png')})`}`"
  >
    <Alerts ref="alerts" />
    <ModalsConfirmMsg ref="confirmMsg" />
    <Navbar ref="navbar" />
    
    <v-main class="parent" :style="isExceptionRoute ? 'padding-block: 0 !important' : ''">
      <nuxt-child data-nuxt="childs" />
    </v-main>
    <!-- <Footer ref="footer" /> -->
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  middleware: ['authenticated'],
  data() {
    return {
    }
  },
  computed: {
    isExceptionRoute() {
      return this.$route.path === '/contributions'
    },
  },
  created() {
    // get data profile
    // this.$store.dispatch("getData");
  },
  mounted() {
    this.closeSesion()
    // this.footerHeightListener();
    
    // resize listener
    // window.addEventListener("resize", this.footerHeightListener);
  },
  // beforeDestroy() {
  //   window.removeEventListener("resize", this.footerHeightListener);
  // },
  methods: {
    closeSesion() {
      let timeout;
      setTimeout(() => this.$confirmMsg({
        fOpen: () => {
          timeout = setTimeout(() => {
            localStorage.removeItem("auth")
            this.$router.go()
          }, 5000);
        },
        fSuccess: () => {
          clearTimeout(timeout)
          setTimeout(() => this.closeSesion(), 1800000)
        },
        fCancel: () => {
          clearTimeout(timeout)
          localStorage.removeItem("auth")
          this.$router.go()
        },
        title: "Cierre de sesión",
        desc: "El tiempo de sesión ha expirado,<br>¿ desea extender su estadia ?",
      }), 1800000);
    },
    swipe(dir) {
      const dataNavbar = this.$refs.navbar.dataNavbar
      const currentTab = this.$refs.navbar.currentTab
      
      if (dir === "left" && dataNavbar[dataNavbar.length-1].to !== currentTab) {
        // left
        const currentEl = dataNavbar.find(data => data.to === currentTab)
        const nextEl = dataNavbar[dataNavbar.indexOf(currentEl) + 1]
        
        this.$router.push(this.localePath(nextEl.to))
      } else if (dir === "right" && dataNavbar[0].to !== currentTab) {
        // right
        const currentEl = dataNavbar.find(data => data.to === currentTab)
        const prevEl = dataNavbar[dataNavbar.indexOf(currentEl) - 1]
        
        this.$router.push(this.localePath(prevEl.to))
      }
    },
    scrollX() {
      const
        scrollableDesktop = document.querySelectorAll('.scrollx'),
        scrollableMobile = document.querySelectorAll('.scrollxmobile');
      if (scrollableDesktop) {
        for (const el of scrollableDesktop) {
          el.addEventListener("wheel", event => { event.preventDefault(); el.scrollLeft += event.deltaY })
        }
      }
      if (scrollableMobile) {
        for (const el of scrollableMobile) {
          el.addEventListener("wheel", event => {
            if (window.innerWidth <= 880) { event.preventDefault(); el.scrollLeft += event.deltaY }
          })
        }
      }
    },
    footerHeightListener() {
      setTimeout(() => {
        const footer = document.querySelector('#footer');
        document.documentElement.style.setProperty(
          '--h-footer', `${footer.getBoundingClientRect().height}px`
        );
      }, 400);
    },
  },
}
</script>

<style src="~/assets/styles/layouts/default.scss" lang="scss" />
