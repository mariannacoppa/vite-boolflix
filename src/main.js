import { createApp } from 'vue'
import App from './App.vue'
import vFlagIcons from 'v-flag-icons'
import 'v-flag-icons/css/rectangular.min.css'

const app = createApp(App).mount('#app')
app.use(vFlagIcons)