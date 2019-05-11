<template>
    <!--Menu-->
    <v-list-group>
    <v-list-tile slot="activator">
        <v-list-tile-content>
            <v-list-tile-title>
                Productos
            </v-list-tile-title>
        </v-list-tile-content>
    </v-list-tile>

    <v-list-tile :to="{name:'aseo'}">
        <v-list-tile-action>
            <v-icon>store</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
            <v-list-tile-title>
                Productos de limpieza
            </v-list-tile-title>
        </v-list-tile-content>
    </v-list-tile>

    <v-list-tile :to="{name:'alimentos'}">
        <v-list-tile-action>
            <v-icon>store</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
            <v-list-tile-title>
                Alimentos
            </v-list-tile-title>
        </v-list-tile-content>
    </v-list-tile>  
    </v-list-group>
</template>

<script>
export default {
    name:'Productos'
}
</script>