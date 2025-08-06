import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/main.css'
import installPlugins from './plugins'

const app = createApp(App)
installPlugins(app)
app.mount('#app')