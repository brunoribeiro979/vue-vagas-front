import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import mitt from 'mitt'
export const emitter = mitt()

const app = createApp(App)

app.use(router)

app.mount('#app')
