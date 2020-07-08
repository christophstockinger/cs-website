import CsApp from './app/'

import '@app/'

const appRoot = document.getElementById('app')
if (appRoot) {
  window.app = new CsApp(appRoot)
}