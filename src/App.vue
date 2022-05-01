<template>
  <v-app id="inspire">
    <NavBar/>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer padless>
    <v-col class="text-center mt-15 pt-10 black white--text" cols="12">
      {{ new Date().getFullYear() }} — <strong>Arte</strong>
    </v-col>
  </v-footer>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
  export default {
    name: 'App',
    components: {NavBar}
  }
</script>