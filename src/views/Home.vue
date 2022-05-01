<template>
  <div class="home">
    <v-container class="my-5 mt-15 pt-10 cyan lighten-5" style="border-radius: 15px 50px 30px;">
        <v-row>
            <v-col lg="6" xs="10" sm="12" md="12">
                <div class="mt-15">
                  <h1 style="line-height: 1;" class="font-weight-black"><h1 class="black--text">Making art<br> is hard. Selling it</h1><h1 class="teal--text">should be easy.</h1></h1>
                  <br>
                  <h3>→ Buy and sell ART in one place</h3>
                  <h3>→ Easy to use and hassle free</h3>
                  <h3>→ Create cutom 🏬 stores and more...</h3>
                  <br>
                  <br>
                  <v-btn x-large dark color="teal">Sign Up Now</v-btn>
                </div>
            </v-col>
            <v-col lg="6" xs="12" sm="12" md="12">
              <div>
                  <v-img height="100%"
                    lazy-src="https://uploads-ssl.webflow.com/6059ef60a1fe0c80cb089e06/606db89beee296d7af21626a_Group%207%20(1)%20(1).png"
                    src="https://uploads-ssl.webflow.com/6059ef60a1fe0c80cb089e06/606db89beee296d7af21626a_Group%207%20(1)%20(1).png"
                  ></v-img>
                </div>
            </v-col>
        </v-row>
    </v-container>
    <v-container class="my-5 mt-15 pt-10 teal lighten-5 mb-15" style="border-radius: 50px 15px;">
        <v-row>
            <v-col lg="6" xs="12" sm="12" md="12">
              <div>
                  <v-img
                    style="border-radius: 25px;"
                    lazy-src="https://www.westend61.de/images/0001122563pw/young-woman-painting-in-her-atelier-GRSF00066.jpg"
                    src="https://www.westend61.de/images/0001122563pw/young-woman-painting-in-her-atelier-GRSF00066.jpg"
                  ></v-img>
                </div>
            </v-col>
            <v-col lg="6" xs="10" sm="12" md="12">
                <div class="mt-15 ml-5 dark">
                  <h1 style="line-height: 1;" class="font-weight-black"><h1 class="black--text">Contact<br>Directly with the</h1><h1 class="cyan--text">Artist.</h1></h1>
                  <br>
                  <br>
                  <h3>→ Request custom services</h3>
                  <h3>→ Negotiate price direclty with the artist 🎨</h3>
                  <h3>→ Get rated by other artists and users</h3>
                  <h3>→ And most importantly it's completly free</h3>
                  <h3>→ Peer to Peer communication DM support</h3>
                  <br>
                  <br>
                  <v-btn x-large color="cyan lighten-4">View Artists</v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
    <br>
    <v-container>
      <h1 class="text-center mt-12 black--text font-weight-regular">Featured Paintings</h1>
      <br>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          lg="3"
          xs="12"
          sm="12"
          md="6"
        >
        <v-hover v-slot="{ hover }">
          <v-card :to="'/about'" :elevation="hover ? 16 : 0" :class="{ 'on-hover': hover }">
            <v-img
              :src="card.src"
              height="270px"
            >
            </v-img>
            <v-card-title v-text="card.title"></v-card-title>

            <v-card-actions>
              <v-btn icon>
                <v-icon>mdi-heart-outline</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark-outline</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant-outline</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <div class="grey lighten-4 mt-15">
      <br>
      <v-img
        src="https://dkiurp7eq5l5p.cloudfront.net/assets/bundles/cdaa95513501a85f75a072f8d2092dfaf02cd0f6/images/about/artist-shop-color.svg"
        width="145px"
        height="145px"
        class="pt-10 mt-10"
        style="margin-left: auto;margin-right: auto;display: block;margin-top:auto;"
      ></v-img>
      <h1 class="text-center mt-12 black--text font-weight-regular">Interested In Selling Your Art?</h1>
      <h4 class="text-center black--text">Opening a shop is free, fun and fast.</h4>
      <v-btn style="margin-left: auto;margin-right: auto;display: block;margin-top:auto;" class="text-center black mt-10" dark large>Create a Shop</v-btn>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
  },
  data: () => ({
      cards: [
        { title: 'Bheema', src: 'painting.jpeg' },
        { title: 'Davinci', src: 'https://5.imimg.com/data5/KT/UK/DU/SELLER-43474334/watercolour-paintings-500x500.png' },
        { title: 'Elon Musk', src: 'painting2.jpg' },
        { title: 'Nobita', src: 'https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/space-for-reflection-chuck-pinson.jpg' },
      ],
    }),
}
</script>

<style scoped>

</style>