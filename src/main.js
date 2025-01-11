import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TheHeader from './components/TheHeader'

const app = createApp(App)
    app.component('the-header', TheHeader)
    app.use(router)
    app.mount('#app')
