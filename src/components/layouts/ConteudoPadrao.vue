<script setup>
import HomeComponent from '../views/HomeComponent.vue'
import PublicarVaga from '../views/PublicarVaga.vue'

const props = defineProps({
  conteudo: {
    type: String,
    required: true,
  },
})
const componentes = {
  HomeComponent,
  PublicarVaga,
}
</script>

<template>
  <div>
    <component :is="componentes[conteudo]" />
  </div>
</template>
