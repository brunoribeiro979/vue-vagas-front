<script setup>
import PesquisarVaga from '../comuns/PesquisarVaga.vue'
import IndicadorComponent from '../comuns/IndicadorComponent.vue'

import ListaVagas from '../comuns/ListaVagas.vue'
import { ref, onMounted } from 'vue'

const usuariosOnline = ref(0)

function getUsuariosOnline() {
  usuariosOnline.value = Math.floor(Math.random() * 101)
}

onMounted(() => {
  setInterval(() => {
    getUsuariosOnline()
  }, 2000)
})
</script>

<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga></pesquisar-vaga>
      </div>
    </div>

    <lista-vagas> </lista-vagas>

    <div class="row mt-5">
      <div class="col-4">
        <indicador-component
          titulo="Vagas abertas"
          indicador="100"
          bg="bg-dark"
          color="text-white"
        ></indicador-component>
      </div>
      <div class="col-4">
        <indicador-component
          titulo="Profissionais cadastrados"
          indicador="225"
          bg="bg-dark"
          color="text-white"
        ></indicador-component>
      </div>
      <div class="col-4">
        <indicador-component
          titulo="Visitantes online"
          :indicador="usuariosOnline"
          bg="bg-light"
          color="text-dark"
        ></indicador-component>
      </div>
    </div>
  </div>

  <div></div>
</template>
