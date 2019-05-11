<template>
<v-card>
  <v-container fill-height
  >
    <v-img
    :src="require('@/assets/banner.jpg')"></v-img>
  </v-container>
    <v-container
      fluid
      grid-list-lg
    >
 
      <v-layout row justify-start>   
        <v-flex xs5
            auto>
            <v-layout>
              <v-flex>
                  <v-img
                  :src="require('@/assets/email.png')"
                  height="125px"
                  contain
                  ></v-img>
              </v-flex>
            </v-layout>
        </v-flex>
        <v-flex xs5
            auto>
            <v-layout>
              <v-flex>
                  <v-img
                  :src="require('@/assets/like.png')"
                  height="125px"
                  contain
                  ></v-img>
              </v-flex>
            </v-layout>
        </v-flex>
        <v-flex xs5
            auto>
            <v-layout>
              <v-flex>
                  <v-img
                  :src="require('@/assets/producto.png')"
                  height="125px"
                  contain
                  ></v-img>
              </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
    </v-container>
</v-card>

</template>
<script>
export default {

}

</script>


