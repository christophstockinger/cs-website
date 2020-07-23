import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './core'

export default class CsApp {
  constructor(root) {
    this.root = root

    this._createApp()
    this._registerRouter()
    this._mountApp()
  }

  _createApp() {
    this.app = createApp(App)
  }

  _mountApp() {
    this.app.mount(this.root)
  }

  _registerRouter() {
    this.app.use(router)
  }
}
