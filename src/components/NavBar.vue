<template>
  <nav>
      <!--Menu superior-->
      <v-toolbar style="height:55px"
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        color="white"
        light
        app
        fixed
        >
        <!--Menu superior-->
        <v-toolbar-title 
          class="text-uppercase"
          style="width: 300px">
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <span class="font-weight-light orange--text">Store</span>
          <span class="orange--text"> Medina</span>
        </v-toolbar-title>
        <v-text-field
          flat
          solo-inverted
          prepend-inner-icon="search"
          label="Buscar..."
          color="orange"
          class="hidden-sm-and-down"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn flat color="orange"
        >
          <v-icon>phone</v-icon>
          <span> Contactar</span> 
        </v-btn>
      </v-toolbar>

      <!--Menu Lateral-->
      <v-navigation-drawer
        v-model="drawer"
        width="250px"
        :clipped="$vuetify.breakpoint.lgAndUp"
        fixed
        app
        >
        <!--Menu izquierdo-->
        <v-list dense>
          <Inicio/>
          <Productos/>
          <ListaProductos/>
        </v-list>
      </v-navigation-drawer>
  </nav>
</template>


<script>
import ListaProductos from '@/components/ListaProductos'
import Productos from '@/components/Productos'
import Inicio from '@/components/Inicio'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
export default {
  name: 'NavBar',
  data () {
    return {
      drawer: null
    }
  },
  components:{
     Footer,Inicio,Productos,ListaProductos
    }
}
</script>