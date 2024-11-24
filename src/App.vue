<template>
  <div>
    <vagas-favoritas></vagas-favoritas>
    <topo-padrao @navegar="componente = $event" />
    <alerta-component v-if="exibirAlerta" :tipo="alerta.tipo">
      <template v-slot:titulo>
        <h5>{{ alerta.titulo }}</h5>
      </template>

      <p>{{ alerta.descricao }}</p>
    </alerta-component>
    <conteudo-padrao msg="Bruno" :conteudo="componente"></conteudo-padrao>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ConteudoPadrao from './components/layouts/ConteudoPadrao.vue'
import TopoPadrao from './components/layouts/TopoPadrao.vue'
import VagasFavoritas from './components/comuns/VagasFavoritas.vue'
import AlertaComponent from './components/comuns/AlertaComponent.vue'
import { emitter } from './main'

const componente = ref('HomeComponent')
const exibirAlerta = ref(false)
const alerta = ref({
  titulo: '',
  descricao: '',
  tipo: '',
})

onMounted(() => {
  emitter.on('alerta', a => {
    alerta.value = a
    exibirAlerta.value = true
    setTimeout(() => {
      exibirAlerta.value = false
    }, 4000)
    // alert('apresentar alerta customizada')
  })
})
</script>

<style scoped></style>
