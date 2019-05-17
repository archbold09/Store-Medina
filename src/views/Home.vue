<template>
<div class="team">
  <v-img :src="require('@/assets/banner.jpg')" class="orange"></v-img>

    <v-container class="my-5">
      <h1 class="subheading orange--text center">Productos</h1>
      <v-layout row wrap>   
        <v-flex xs12 sm6 md4 lg3 v-for="producto in lista" :key="producto.name">
          <v-card flat class="text-xs-center grey--text ma-3">
            <v-container class="pt-4">
              <v-avatar size="130" class="orange">
                <img :src="producto.imagen">
              </v-avatar>
            </v-container>
            <v-card-text>
              <div class="subheading orange--text">{{producto.nombre}}</div>
              <div class="grey--text">{{producto.descripcion}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="orange">
                <v-icon small left>add_shopping_cart</v-icon>
                <span>Comprar</span>
              </v-btn>
              <v-btn flat  color="grey">
                 <span>Más</span>
                <v-icon small right>message</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
    </v-layout>
    </v-container>
</div>
</template>
<script>
export default {
name:'Home',
  data(){
    return{
      lista:[
        {nombre:'Jabon' , descripcion:'Este jabon huele rico bro' , imagen:'/protex.jpg'},
        {nombre:'Clorox' , descripcion:'Paara tu piso sucio' , imagen:'/clorox.jpg'},
        {nombre:'Shampoo' , descripcion:'Para tu pelo casposo' , imagen:'/pantene.jpg'}
      ]
    }
}
}

</script>


