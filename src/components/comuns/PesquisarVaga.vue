<template>
  <div class="h-100 p-5 bg-light border rounded-3">
    <h2>Pesquisar vagas</h2>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for="">Titulo da vaga</label>
          <input
            type="text"
            class="form-control"
            placeholder="Pesquise por palavras chaves, por exemplo 'PHP', 'Pleno', etc..."
            v-model="titulo"
          />
          <small class="form-text text-muted"
            >Informe palavras que estejam relacionadas com o titulo da vaga que
            vc procura</small
          >
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button
          class="btn btn-outline-dark mt-2"
          type="button"
          @click="pesquisarVaga()"
        >
          Buscar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { emitter } from '@/main'
import { ref } from 'vue'

const titulo = ref('')

function pesquisarVaga() {
  emitter.emit('filtrarVagas', {
    titulo: titulo.value,
  })
}
</script>
