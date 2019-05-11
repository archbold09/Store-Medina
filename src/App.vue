<template>
  <v-app id="inspire">
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

    <v-toolbar style="height:55px "
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="orange accent-2"
      dark
      app
      fixed
      >
      <!--Menu superior-->
      <v-toolbar-title style="width: 250px">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Store Medina</span><v-icon>store</v-icon>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        prepend-inner-icon="search"
        label="Buscar..."
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-toolbar>

    <!--Contenido de la pagina central-->
    <v-content>
      <router-view/>
    </v-content>

    <!--Footer-->
    <Footer/>

  </v-app>
</template>



<script>
import ListaProductos from '@/components/ListaProductos'
import Productos from '@/components/Productos'
import Inicio from '@/components/Inicio'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  data () {
    return {
       drawer: null
      //
    }
  },
  components:{
     Footer,Inicio,Productos,ListaProductos
    }
}
</script>
