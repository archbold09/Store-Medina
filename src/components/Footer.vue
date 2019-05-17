<template>
  <v-footer
    height="auto"
    dark
  >
    <v-layout
      justify-center
      row
      wrap
    >

      <v-flex
        dark
        py-3
        text-xs-center
        orange--text
        xs12
      >
        &copy;<strong>Store Medina</strong>

      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
    name:'Footer',
    data: () => ({
      links: [
        'Nosotros',
        'Contactar'
      ]
    })
}
</script>
