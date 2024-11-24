<template>
  <slot name="titulo" :dadosTitulo="{ titulo: 'Título Lista', nroVagas: 15 }">
  </slot>

  <slot :vagas="vagas">
    <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
      <div class="col">
        <vaga-component v-bind="vaga"></vaga-component>
      </div>
    </div>
  </slot>

  <slot
    name="rodape"
    :dadosRodape="{
      titulo: 'Rodape lista',
      paginacao: { nroPaginas: 10, paginaAtual: 5 },
    }"
  >
  </slot>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import VagaComponent from './VagaComponent.vue'
import { emitter } from '@/main'

const vagas = ref([])

onMounted(() => {
  vagas.value = JSON.parse(localStorage.getItem('vagas'))

  emitter.on('filtrarVagas', vaga => {
    const todasVagas = JSON.parse(localStorage.getItem('vagas'))
    vagas.value = todasVagas.filter(reg =>
      reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase()),
    )
  })
})
</script>
