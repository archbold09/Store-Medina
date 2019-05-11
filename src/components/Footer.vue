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
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
        round
      >
        {{ link }}
      </v-btn>
      <v-flex
        orange accent-2
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy;2018 — <strong>Store Medina Todos los Derechos Reservados | Erbin Santana | Diego Monroy | Angel Archbold</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
    name:'Footer',
    data: () => ({
      links: [
        'fab fa-facebook',
        'fab fa-twitter',
        'Nosotros',
        'Contactar'
      ]
    })
}
</script>
