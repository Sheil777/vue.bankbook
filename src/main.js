import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TheHeader from './components/TheHeader'
import store from './store'
import bodyLockMixin from './mixins/bodyLock'


const app = createApp(App)


app.component('the-header', TheHeader)
    app.mixin(bodyLockMixin)
    app.use(store)
    app.use(router)
    app.mount('#app')
