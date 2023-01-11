import { createApp } from 'vue'
import App from './App.vue'

import { setupRouter } from './router'
import { QuillEditor } from '@vueup/vue-quill'
import '@/styles/main.scss'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import '@icon-park/vue-next/styles/index.css'
function bootstrap() {
  const app = createApp(App)
  // router
  setupRouter(app)
  app.component('QuillEditor', QuillEditor)
  app.mount('#app')
}

bootstrap()
