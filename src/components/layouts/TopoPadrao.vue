<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Vagas</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#" @click="navegarPara('HomeComponent')"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="navegarPara('PublicarVaga')"
              >Publicar vaga</a
            >
          </li>
        </ul>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          Vagas Favoritas
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['navegar'])

function navegarPara(p) {
  emit('navegar', p)
}
</script>
