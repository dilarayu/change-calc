import './assets/main.css'

// import 'primevue/resources/themes/lara-light-teal/theme.css'

import '@/theme.css'
import App from './App.vue'
import router from './router'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.mount('#app')
