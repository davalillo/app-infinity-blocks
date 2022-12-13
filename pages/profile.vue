<template>
  <div id="profile" class="divcol">
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
