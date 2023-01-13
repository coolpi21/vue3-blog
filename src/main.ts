import { createApp } from 'vue'
import App from './App.vue'
import Toast from '@/components/AlertToast/index'
import { setupRouter } from './router'
import '@/styles/main.scss'
import '@icon-park/vue-next/styles/index.css'
function bootstrap() {
  const app = createApp(App)
  // router
  setupRouter(app)
  app.config.globalProperties.$aaa = Toast
  app.mount('#app')
}

bootstrap()
