import { createSSRApp } from 'vue'
import App from './App.vue'
import * as Pinia from 'pinia'
import uviewPlus from 'uview-plus'

export function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus)
  app.use(Pinia.createPinia())
  return {
    app
  }
}
