import './no-ie'

import BaseComponent from '@util/base/component.js'

export const NAME = 'NoIe'
const CLASS = `mNoIe`

export const ClassName = {
  ROOT: CLASS,
  ROOT_NOSHADOW: `${CLASS}--noShadow`,
  ROOT_SHADOW: `${CLASS}--shadow`
}

export const Selector = {
  ROOT: `.${ClassName.ROOT}`,
  ROOT_NOSHADOW: `.${ClassName.ROOT_NOSHADOW}`,
  ROOT_SHADOW: `.${ClassName.ROOT_SHADOW}`
}

export default class NoIe extends BaseComponent {
  static attachTo(root) {
    if (root) {
      return new NoIe(root)
    }
  }

  get landingPage() {
    return '/noie.html'
  }

  get internetExplorerVersion() {
    let rV = -1
    /* eslint-disable */
    if (
      navigator.appName === 'Microsoft Internet Explorer' ||
      navigator.appName === 'Netscape'
    ) {
      const uA = navigator.userAgent
      const rE = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})')

      if (rE.exec(uA) != null) {
        rV = parseFloat(RegExp.$1)
      } else if (navigator.userAgent.match(/Trident.*rv\:11\./)) {
        rV = 11
      }
    }
    return rV
  }
  /* eslint-enable */
  init() {
    if (this.root.classList.contains(ClassName.ROOT_SHADOW)) {
      this.createLocation()
    }
  }

  createLocation() {
    if (this.internetExplorerVersion !== -1) {
      window.location.href = this.landingPage
    }
  }
}
