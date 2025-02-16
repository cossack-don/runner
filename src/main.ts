import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import FloatingVue from 'floating-vue' // https://floating-vue.starpad.dev/
import 'floating-vue/dist/style.css'

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/tokyo-night-dark.css';

hljs.registerLanguage('javascript', javascript);

const app = createApp(App)

app.use(FloatingVue)
app.mount('#app')
