<template>
  <v-app>
    <Alerts ref="alerts" />
    <ModalsConfirmMsg ref="confirmMsg" />
    <nuxt data-nuxt="childs" />
  </v-app>
</template>

<script>
export default {
  name: "EmptyLayout",
}
</script>
