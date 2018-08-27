import './sprite.scss'

export const NAME = 'uSprite'
const CLASS = 'u-Sprite'

export const ClassName = {
  ROOT: CLASS
}

export const Selector = {
  ROOT: `.${ClassName.ROOT}`
}

export default class SVGSprite {
  static attachTo(root) {
    return new SVGSprite(root)
  }

  constructor(rootElement) {
    this.root = rootElement
    this.init()
  }

  destroy() {
    this.root = null
  }

  init() {
    if (this.hasLocalStorageVersion(this.root.dataset.revision)) {
      this.root.innerHTML = this.fetchFromLocalStorage()
    } else {
      this.fetchXHR(this.root.dataset.href, this.root.dataset.revision)
    }
  }

  fetchXHR(url, revision) {
    const ajax = new XMLHttpRequest()
    ajax.open('GET', url, true)
    ajax.onload = () => {
      if (revision !== -1) {
        if (this.hasLocalStorageSupport()) {
          localStorage.setItem('svg-sprite', ajax.responseText)
          localStorage.setItem('svg-sprite-revision', revision)
        }
      }
      this.root.innerHTML = ajax.responseText
    }
    ajax.send()
  }

  fetchFromLocalStorage() {
    return localStorage.getItem('svg-sprite')
  }

  hasLocalStorageSupport() {
    if (typeof Storage !== 'undefined') {
      return true
    } else {
      return false
    }
  }

  hasLocalStorageVersion(revision) {
    if (revision === -1) {
      return false
    } else {
      return (
        localStorage.getItem('svg-sprite') &&
        localStorage.getItem('svg-sprite-revision') === revision
      )
    }
  }
}
