import './logo'
import '@src/assets/images/cs-wortmarke.svg'

import BaseComponent, { namespace } from '@util/base/component.js'

export const NAME = 'Logo'
const CLASS = `${namespace}-cLogo`

export const ClassName = {
  ROOT: CLASS
}

export const Selector = {
  ROOT: `${ClassName.ROOT}`
}

export default class Logo extends BaseComponent {
  static attachTo(root) {
    if (root) {
      return new Logo(root)
    }
  }

  init() {
    // Here you can start with your code
  }
}
