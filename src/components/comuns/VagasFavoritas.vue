<template>
  <div>
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">
          Vagas Favoritadas
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(vaga, index) in vagas"
            :key="index"
          >
            {{ vaga }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { emitter } from '../../main'

const vagas = ref([])

onMounted(() => {
  emitter.on('favoritarVaga', titulo => {
    vagas.value.push(titulo)
  })

  emitter.on('desfavoritarVaga', titulo => {
    let indiceArray = vagas.value.indexOf(titulo)
    if (indiceArray !== -1) {
      vagas.value.splice(indiceArray, 1)
    }
  })
})
</script>

<style scoped></style>
