import Toast from '@/components/AlertToast/index'
import VMdEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
// Prism
import Prism from 'prismjs'
// highlight code
import 'prismjs/components/prism-json'
import { createApp } from 'vue'
import App from './App.vue'

import '@/styles/main.scss'
import '@icon-park/vue-next/styles/index.css'
import { setupRouter } from './router'

VMdEditor.use(vuepressTheme, {
  Prism
})
function bootstrap() {
  const app = createApp(App)
  // router
  setupRouter(app)
  app.config.globalProperties.$toast = Toast
  app.use(VMdEditor)
  app.mount('#app')
}

bootstrap()
