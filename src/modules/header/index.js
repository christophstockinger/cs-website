import './header'

import BaseComponent from '@util/base/component.js'

export const NAME = 'Header'
const CLASS = `cs-mHeader`

export const ClassName = {
  ROOT: CLASS
}

export const Selector = {
  ROOT: `.${ClassName.ROOT}`
}

export default class Header extends BaseComponent {
  static attachTo(root) {
    if (root) {
      return new Header(root)
    }
  }

  init() {
    // Here you can start with your code
  }
}
