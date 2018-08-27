import './footer'

import BaseComponent, { namespace } from '@util/base/component.js'

export const NAME = 'Footer'
const CLASS = `${namespace}-mFooter`

export const ClassName = {
  ROOT: CLASS
}

export const Selector = {
  ROOT: `${ClassName.ROOT}`
}

export default class Footer extends BaseComponent {
  static attachTo(root) {
    if (root) {
      return new Footer(root)
    }
  }

  init() {
    // Here you can start with your code
    console.log('Hi Footer')
  }
}
