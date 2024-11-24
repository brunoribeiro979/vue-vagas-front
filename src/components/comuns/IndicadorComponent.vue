<template>
  <div :class="estilo">
    <p>{{ titulo }}</p>
    <h2>{{ indicador }}</h2>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Definindo as props
const props = defineProps({
  titulo: String,
  indicador: Number,
  bg: String,
  color: String,
})

// Usando props dentro do computed
const estilo = computed(() => {
  return `h-100 p-5 rounded-3 border ${props.bg} ${props.color}`
})
</script>
