import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './assets/router/index.js';
import AppLoader from './components/AppLoader.vue';
const app = createApp(App)
app.component('AppLoader', AppLoader)
app.use(router)
app.mount('#app')
