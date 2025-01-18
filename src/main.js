import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TheHeader from './components/TheHeader'
// import VueMeta from 'vue-meta';


const app = createApp(App)
// const metaManager = createMetaManager();


app.component('the-header', TheHeader)
app.use(router)
// app.use(VueMeta)
app.mount('#app')
