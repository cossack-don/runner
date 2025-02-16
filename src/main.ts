import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import FloatingVue from 'floating-vue' // https://floating-vue.starpad.dev/
import 'floating-vue/dist/style.css'

const app = createApp(App)

app.use(FloatingVue)
app.mount('#app')
