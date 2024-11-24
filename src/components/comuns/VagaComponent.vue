<template>
  <div class="card">
    <div class="card-header bg-dark text-white">
      <div class="row">
        <div class="col d-flex justify-content-between">
          <div>{{ titulo }}</div>
          <div>
            <div class="form-check form-switch">
              <input
                type="checkbox"
                class="form-check-input"
                v-model="favoritada"
              />
              <label for="" class="form-check-label">Favoritar </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <p>{{ descricao }}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted"
        >Salário: R$ {{ salario }} | Modalidade: {{ getModalidade }} | Tipo:
        {{ getTipo }} | Publicação {{ getPublicacao }}</small
      >
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { emitter } from '../../main'

const props = defineProps({
  titulo: {
    type: String,
    required: true,
    validator(p) {
      console.log('Props: ' + p)
    },
  },
  descricao: {
    type: String,
    default: 'Sem descrição para essa vaga',
  },
  salario: [Number, String],
  modalidade: {
    type: String,
    default() {
      return '*'.repeat(20)
    },
  },
  tipo: String,
  publicacao: String,
})

const favoritada = ref(false)

const getModalidade = computed(() => {
  switch (props.modalidade) {
    case '1':
      return 'Home Office'
    case '2':
      return 'Presencial'
    default:
      return 'Modalidade não definida' // Valor padrão
  }
})

const getTipo = computed(() => {
  switch (props.tipo) {
    case '1':
      return 'CLT'
    case '2':
      return 'PJ'
    default:
      return 'Não encontrado'
  }
})

watch(favoritada, newValue => {
  if (newValue) {
    emitter.emit('favoritarVaga', props.titulo)
  } else {
    emitter.emit('desfavoritarVaga', props.titulo)
  }
})

const getPublicacao = computed(() => {
  let dataPublicacao = new Date(props.publicacao)
  // return dataPublicacao.toLocaleString('pt-BR')   aqui pega a data e a hora
  return dataPublicacao.toLocaleDateString('pt-BR')
})
</script>
