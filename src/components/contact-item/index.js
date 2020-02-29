// TODO: import ContactItem to ./src/index.js
// more information in ./src/index.js

import './contact-item'

import BaseComponent from '@util/base/component.js'

export const NAME = 'ContactItem'
const CLASS = `.cContactItem`

export const ClassName = {
  ROOT: CLASS
}

export const Selector = {
  ROOT: `${ClassName.ROOT}`
}

export default class ContactItem extends BaseComponent {
  static attachTo(root) {
    if (root) {
      return new ContactItem(root)
    }
  }

  init() {
    // Here you can start with your code
  }
}
