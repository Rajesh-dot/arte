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
                label="Search Shops"
                solo
            ></v-autocomplete>
        </div>
        <v-row class="mt-10 ml-2 mr-2 mb-10">
            <v-col lg="3" xs="12" sm="12" md="3">
                <v-card>
                    <v-card-text>
                        <v-switch
                            v-model="filters.latest"
                            label="Latest"
                            color="orange"
                        ></v-switch>
                        <v-switch
                            v-model="filters.popular"
                            label="Popular"
                            color="orange"
                        ></v-switch>
                        <v-checkbox
                            v-model="filters.paintings"
                            label="Paintings"
                            color="orange"
                            value="paintings"
                            hide-details
                        ></v-checkbox>
                        <v-checkbox
                            v-model="filters.decorations"
                            label="Decoration Materials"
                            color="orange"
                            value="paintings"
                            hide-details
                        ></v-checkbox>
                        <v-checkbox
                            v-model="filters.sculptures"
                            label="Sculptures"
                            color="orange"
                            value="paintings"
                            hide-details
                        ></v-checkbox>
                        <v-checkbox
                            v-model="filters.others"
                            label="Others"
                            color="orange"
                            value="paintings"
                        ></v-checkbox>
                        <v-btn @click="clear" color="secondary">
                            Reset
                        </v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col lg="9" xs="12" sm="12" md="9">
                <v-card v-for="shop in shops" :key="shop.id" class="mx-auto mb-6">
                    <v-img
                        class="white--text align-end"
                        height="200px"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                    </v-img>
                    <v-card-text class="text--primary">
                        <v-row>
                            <v-col>
                                <h2 class="black--text font-weight-regular">{{shop.name}}</h2>
                                <h4 class="pt-2 black--text font-weight-regular">{{shop.description}}</h4>
                            </v-col>
                            <v-col>
                                <v-btn style="float: right;" large dark color="black">View Shop</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>

export default {
    name: 'Shops',
    data: () => ({
        shops: [
            {id:1, logo: 'logo.jpg', name: 'Magical-Vintage', description: 'Reproductions of Vintage Artworks with an emphasis on Art Nouveau and Art Deco'},
            {id:2, logo: 'logo.jpg', name: 'Magical-Vintage', description: 'Reproductions of Vintage Artworks with an emphasis on Art Nouveau and Art Deco'},
            {id:3, logo: 'logo.jpg', name: 'Magical-Vintage', description: 'Reproductions of Vintage Artworks with an emphasis on Art Nouveau and Art Deco'}
        ],
        isLoading: false,
        items: [],
        model: null,
        search: null,
        tab: null,
        filters:  {latest: false, popular: false, paintings: false, decorations: false, sculptures: false, others: false}
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
    methods: {
        clear(e){
            e.preventDefault()
            for (const key of Object.keys(this.filters)) {
                this.filters[key]=false
            }
        }
    }
}

</script>