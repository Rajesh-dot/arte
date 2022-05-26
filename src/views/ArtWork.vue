<template>
    <div>
        <div class="ml-16 mr-16 mt-6">
            <v-autocomplete
                rounded
                v-model="model"
                prepend-icon="mdi-magnify"
                :items="items"
                :loading="isLoading"
                :search-input.sync="search"
                class="mx-4"
                cache-items
                hide-no-data
                hide-details
                item-text="name"
                item-value="symbol"
                label="Search Artworks"
                solo
            ></v-autocomplete>
        </div>
        <v-row class="mt-10 ml-2 mr-2 mb-10">
            <v-col lg="3" xs="12" sm="12" md="3">
                <v-card>
                    <v-card-text>
                        <v-switch
                            v-model="switch1"
                            label="Latest"
                            color="orange"
                        ></v-switch>
                        <v-switch
                            v-model="switch1"
                            label="Popular"
                            color="orange"
                        ></v-switch>
                        <v-expansion-panels focusable>
                            <v-expansion-panel v-for="(item,i) in 5" :key="i">
                            <v-expansion-panel-header>Hello</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-checkbox
                                    v-model="ex4"
                                    label="Others"
                                    color="black"
                                    value="paintings"
                                ></v-checkbox>
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                        <v-btn class="mt-5" color="secondary">
                            Reset
                        </v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col lg="9" xs="12" sm="12" md="9">
                <v-row>
                    <v-col lg="4" md="4" sm="6" xs="12" class="" v-for="index in 3" :key="index">
                        <v-card class="mb-4" v-for="art in data[index-1]" :key="art.id">
                            <v-img
                                :src="art.photo"
                            >
                            </v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'ArtWork',
    data: () => ({
        data: [
            [
                {id: 1, photo: 'https://arts.mojarto.com/productImages/MA309751/384/MA309751.jpeg', name: 'Magical-Vintage', person: 'Rajesh'},
                {id: 2, photo: 'https://5.imimg.com/data5/KT/UK/DU/SELLER-43474334/watercolour-paintings-500x500.png', name: 'Magical-Vintage', person: 'Rajesh'},
                {id: 10, photo: 'https://miro.medium.com/max/1200/1*oxWKyZMalcxHUE26YNNm1g.jpeg', name: 'bello', person: 'rajesh'}
            ],
            [
                {id: 3, photo: 'https://blog.artsper.com/wp-content/uploads/2021/07/roger.jpeg', name: 'vintage', person: 'Rajesh'},
                {id: 4, photo: 'https://artincontext.org/wp-content/uploads/2021/01/Hyper-Realism.jpg', name: 'vintage', person: 'Rajesh'},
                {id: 7, photo: 'https://images.squarespace-cdn.com/content/v1/53c54574e4b046e5507a54a7/1594210543282-TYFOLYZYF2QSPPSZMXIG/Johnson+Tsang-Visual+Atelier+8-Art-10.jpg?format=1000w', name: 'hello', person: 'Rajesh'},
                {id: 8, photo: 'https://www.theartist.me/wp-content/uploads/2021/11/mf-hussain-paintings.jpg', name: 'hello', person: 'hello'},
                {id: 11, photo: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/iron-man-corey-giesey.jpg', name: 'bello', person: 'rajesh'}
            ],
            [
                {id: 5, photo: 'https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/12/23/Photos/Processed/artwaste-k9xF--621x414@LiveMint.jpg', name: 'vintage', person: 'Rajesh'},
                {id: 6, photo: 'https://static.demilked.com/wp-content/uploads/2021/01/stunning-bronze-sculptures-coderch-malavia-11.jpg', name: 'vintage', person: 'Rajesh'},
                {id: 8, photo: 'https://render.fineartamerica.com/images/rendered/medium/print/8/5.5/break/images/artworkimages/medium/3/the-worship-of-trees-peggy-collins.jpg', name: 'bello', person: 'Rajesh'},
                {id: 9, photo: 'https://i.pinimg.com/736x/a9/86/33/a98633194b621e7c382a11e89c78ae52.jpg', name: 'bello', person: 'rajes'}
            ]
        ],
        isLoading: false,
        items: [],
        model: null,
        search: null,
        tab: null,
        filters: [
            {title: "Color", values: ["red", "blue", "green", "black", "white", "yellow"]},
            {title: "Tag", values: []}
        ]
    }),
    watch: {
      model (val) {
        if (val != null) this.tab = 0
        else this.tab = null
      },
      search (val) {
        // Items have already been loaded
        if (this.items.length > 0) return

        this.isLoading = true

        // Lazily load input items
        fetch('https://api.coingecko.com/api/v3/coins/list')
          .then(res => res.clone().json())
          .then(res => {
            this.items = res
          })
          .catch(err => {
            console.log(err)
          })
          .finally(() => (this.isLoading = false))
      },
    },
}
</script>

<style>

</style>