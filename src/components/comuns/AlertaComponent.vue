<template>
  <div class="div_alerta">
    <div :class="estiloAlerta" role="alert">
      <slot name="titulo">
        <h3>titulo da mensagem de feedback</h3>
      </slot>
      <hr />
      <slot>
        <p>Mensagem de feedback</p>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  tipo: String,
})

const estiloAlerta = computed(() => {
  switch (props.tipo) {
    case 'erro':
      return 'alert alert-danger'
    case 'sucesso':
      return 'alert alert-success'
    default:
      return 'alert alert-success'
  }
})
</script>

<style scoped>
.div_alerta {
  width: 600px;
  position: absolute;
  right: calc(50% - 300px);
  top: calc(50% - 100px);
}
</style>
