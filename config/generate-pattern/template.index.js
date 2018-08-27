// TODO: import <%= name %> to ./src/index.js
// more information in ./src/index.js

import './<%= filename %>'

import BaseComponent, { namespace }  from '@util/base/component.js'

export const NAME = '<%= name%>'
const CLASS = `${namespace}-<%= classname %>`

export const ClassName = {
  ROOT: CLASS
}

export const Selector = {
  ROOT: `${ClassName.ROOT}`
}

export default class <%= name%> extends BaseComponent {
  static attachTo(root) {
    if (root) {
      return new <%= name%>(root)
    }
  }

  init() {
    // Here you can start with your code
  }
}
