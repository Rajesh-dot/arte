<template>
  <v-app-bar
      app
      class="white"
    >

      <v-toolbar-title text class="text-h4"><a class="black--text" style="text-decoration: none;" href="#/"><strong>Arte.</strong></a></v-toolbar-title>
      <v-spacer default></v-spacer>
      <v-btn rounded plain to="/artworks" >
        <v-icon dark>
          mdi-pencil
        </v-icon>
        <strong>ArtWorks</strong>
      </v-btn>
      <v-btn rounded plain to="/shops">
        <v-icon dark>
          mdi-store
        </v-icon>
        <strong>Shops</strong>
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn dark color="black">
        Sign in
      </v-btn>
    </v-app-bar>
</template>

<script>
    export default {
        name: 'NavBar',
        data: () => ({ 
            drawer: null,
            items: [
                { title: 'Dashboard', icon: 'mdi-view-dashboard' , to: '/'},
                { title: 'Profile', icon: 'mdi-account-tie', to: '/profile' },
                { title: 'Courses', icon: 'mdi-clipboard-edit-outline', to: '/exams' },
                ],
            }),
    }
</script>

