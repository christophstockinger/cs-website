import './logo'
import '@src/assets/images/cs-wortmarke.svg'
import SmoothScroll from 'smoothscroll'
import BaseComponent from '@util/base/component.js'

export const NAME = 'Logo'
const CLASS = `cLogo`

export const ClassName = {
  ROOT: CLASS,
  ROOT_SCROLLER: `${CLASS}--scroller`,
  LINK: `${CLASS}__link`
}

export const Selector = {
  ROOT: `.${ClassName.ROOT}`,
  ROOT_SCROLLER: `.${ClassName.ROOT_SCROLLER}`,
  LINK: `.${ClassName.LINK}`,
  PAGE: `.lPage`
}

export default class Logo extends BaseComponent {
  static attachTo(root) {
    if (root) {
      return new Logo(root)
    }
  }

  init() {
    if (this.root.classList.contains(ClassName.ROOT_SCROLLER)) {
      const link = this.root.querySelector(Selector.LINK)
      if (link) {
        link.addEventListener('click', evt => {
          evt.preventDefault()
          const page = document.querySelector(Selector.PAGE)
          if (page) {
            SmoothScroll(page)
          }
        })
      }
    }
  }
}
