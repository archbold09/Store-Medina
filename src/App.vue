<template>
  <v-app id="inspire">

    <!--NavBar-->
    <NavBar/>
    <!--Contenido de la pagina central-->
    <v-content>
      <router-view/>
    </v-content>

    <!--Footer-->
    <Footer/>

  </v-app>
</template>



<script>
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  components:{
     NavBar,Footer
    }
}
</script>
