import './image'
import '@src/assets/images/christoph-stockinger.jpg'
import '@src/assets/images/christoph-stockinger-1.jpg'

import BaseComponent from '@util/base/component.js'

export const NAME = 'Image'
const CLASS = `cImage`

export const ClassName = {
  ROOT: CLASS,
  IMAGE: `${CLASS}__image`
}

export const Selector = {
  ROOT: `.${ClassName.ROOT}`,
  IMAGE: `.${ClassName.IMAGE}`
}

export default class Image extends BaseComponent {
  static attachTo(root) {
    if (root) {
      return new Image(root)
    }
  }

  get imageDimensions() {
    const image = this.root.querySelector(Selector.IMAGE)
    if (image) {
      return image.getBoundingClientRect()
    }
  }

  get ratio() {
    return 9 / 16
  }

  init() {
    this.bindEventListener()
  }

  bindEventListener() {
    this.events = {
      paddingCalculation: this.paddingCalculation.bind(this)
    }

    document.addEventListener(
      'DOMContentLoaded',
      this.events.paddingCalculation
    )
  }

  paddingCalculation() {
    const paddingTop = 100 * this.ratio
    if (paddingTop >= 0) {
      this.root.style.paddingTop = `${paddingTop}%`
    }
  }
}
