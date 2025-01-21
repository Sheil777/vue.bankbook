import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TheHeader from './components/TheHeader'
import store from './store'
import bodyLockMixin from './mixins/bodyLock'
// import { createMetaManager } from 'vue-meta'


const app = createApp(App)
// const metaManager = createMetaManager();


app.component('the-header', TheHeader)
    app.mixin(bodyLockMixin)
    app.use(store)
    app.use(router)
    // app.use(createMetaManager())
    app.mount('#app')
