<script setup>
import { emitter } from '@/main'
import { ref } from 'vue'

defineProps({
  // msg: String,
})

const titulo = ref('')
const descricao = ref('')
const salario = ref('')
const modalidade = ref('')
const tipo = ref('')

function salvarVaga() {
  let tempoDecorrido = Date.now()
  let dataAtual = new Date(tempoDecorrido)
  let dataPublicacao = dataAtual.toISOString()

  let vagas = JSON.parse(localStorage.getItem('vagas'))

  if (!vagas) vagas = []

  vagas.push({
    titulo: titulo.value,
    descricao: descricao.value,
    salario: salario.value,
    modalidade: modalidade.value,
    tipo: tipo.value,
    publicacao: dataPublicacao,
  })

  if (validaFormulario()) {
    localStorage.setItem('vagas', JSON.stringify(vagas))

    emitter.emit('alerta', {
      tipo: 'sucesso',
      titulo: `A vaga ${titulo.value} foi cadastrada com sucesso!`,
      descricao:
        'Parabéns, a vaga foi cadastrada a poderá ser consultada por milhares de profissionais',
    })

    resetaFormularioCadastroVaga()
  } else {
    emitter.emit('alerta', {
      tipo: 'erro',
      titulo: `Não foi possível realizar o cadastro!`,
      descricao: 'Parece que você esqueceu de preencher alguma informação',
    })
  }
}

function resetaFormularioCadastroVaga() {
  titulo.value = ''
  descricao.value = ''
  salario.value = ''
  modalidade.value = ''
  tipo.value = ''
}

function validaFormulario() {
  let valido = true

  if (titulo.value === '') valido = false
  if (descricao.value === '') valido = false
  if (salario.value === '') valido = false
  if (modalidade.value === '') valido = false
  if (tipo.value === '') valido = false

  return valido
}
</script>

<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <h4>Apresente a sua vaga para milhares de profissionais e de graça</h4>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label for="form-label">Título da Vaga</label>
        <input type="text" class="form-control" v-model="titulo" />
        <div class="form-text">Por exemplo: Programador Javascript e Vuejs</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label for="form-label">Descrição</label>
        <textarea
          name=""
          id=""
          class="form-control"
          v-model="descricao"
        ></textarea>
        <div class="form-text">Informe os detalhes da vaga</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label for="form-label">Salário</label>
        <input type="number" class="form-control" v-model="salario" />
        <div class="form-text">Informe o salário</div>
      </div>

      <div class="col">
        <label for="form-label">Modalidade</label>
        <select name="" id="" class="form-select" v-model="modalidade">
          <option value="" selected disabled>Selecione</option>
          <option value="1">Home Office</option>
          <option value="2">Presencial</option>
        </select>
        <div class="form-text">Informe a modalidade da vaga</div>
      </div>

      <div class="col">
        <label for="form-label">Tipo</label>
        <select name="" id="" class="form-select" v-model="tipo">
          <option value="" selected disabled>Selecione</option>
          <option value="1">CLT</option>
          <option value="2">PJ</option>
        </select>
        <div class="form-text">Informe o tipo de contratação</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <button type="submit" class="btn btn-primary" @click="salvarVaga()">
          Cadastrar
        </button>
      </div>
    </div>
  </div>
</template>
