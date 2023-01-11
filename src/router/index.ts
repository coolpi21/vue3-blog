import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { App } from 'vue'
import { routes as routerConfig} from './route'

const routes = routerConfig as RouteRecordRaw[]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
