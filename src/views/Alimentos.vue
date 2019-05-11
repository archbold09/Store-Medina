<template>
<v-container grid-list-md text-xs-center>
        <v-layout justify-start>
            <v-flex xs12> 
                <v-card dark color="primary">
                    <h1 class="px-0 font-weight-black font-italic">Productos de aseo para el hogar</h1>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout row wrap>

        <v-layout pa-2 row justify-start>   
            <v-flex xs5
            auto>
            <v-card hover>
                <v-layout>
                <v-flex>
                    <v-img
                    :src="require('@/assets/alimentos/pollo.jpg')"
                    height="125px"
                    contain
                    ></v-img>
                </v-flex>
                <v-flex xs7>
                    <v-card-title primary-title>
                        <div>
                        <div class="headline">Pollo</div>
                            <div class="grey--text">{{card_text}}</div>
                            <div class="orange--text">${{precio}}</div>
                        <v-btn flat color="orange"><v-icon>add_shopping_cart</v-icon>Comprar</v-btn>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                    </v-card-actions>
                </v-flex>
                </v-layout>
            </v-card>
            </v-flex>
            <v-flex xs5
            auto>
                <v-card hover>
                    <v-layout>
                        <v-flex>
                            <v-img
                            :src="require('@/assets/alimentos/carne.jpg')"
                            height="125px"
                            contain
                            ></v-img>
                        </v-flex>
                        <v-flex xs7>
                            <v-card-title primary-title>
                                <div>
                                <div class="headline">Carne Vaca</div>
                                    <div class="grey--text">{{card_text}}</div>
                                    <div class="orange--text">${{precio}}</div>
                                <v-btn flat color="orange"><v-icon>add_shopping_cart</v-icon>Comprar</v-btn>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
            <v-flex xs5
            auto>
                <v-card hover>
                    <v-layout>
                    <v-flex>
                        <v-img
                        :src="require('@/assets/alimentos/leche.jpg')"
                        height="125px"
                        contain
                        ></v-img>
                    </v-flex>
                    <v-flex xs7>
                        <v-card-title primary-title>
                            <div>
                            <div class="headline">Leche</div>
                                <div class="grey--text">{{card_text}}</div>
                                <div class="orange--text">${{precio}}</div>
                            <v-btn flat color="orange"><v-icon>add_shopping_cart</v-icon>Comprar</v-btn>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                        </v-card-actions>
                    </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>

    </v-layout>
</v-container>
</template>

<script>
export default {
    name:'alimentos',
     data () {
      return {
        card_text: `Lorem ipsum `,
        precio: 20.042,
          items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
      }
    }
}
</script>