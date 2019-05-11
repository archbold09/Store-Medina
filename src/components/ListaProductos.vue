<template>
    <!--listaproductos-->
    <v-list-tile :to="{name:'listproductos'}">
    <v-list-tile-action>
        <v-icon>tablet</v-icon> 
    </v-list-tile-action>
    <v-list-tile-title>
        Lista de productos
    </v-list-tile-title>
    </v-list-tile>
</template>

<script>
export default {
    name:'ListaProductos'
}
</script>