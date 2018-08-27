import Events from 'minivents'

export const namespace = `.c77`

export default class BaseComponent extends Events {
  static upgradeAll(selector) {
    if (typeof selector !== 'object') {
      const elements = Array.from(document.querySelectorAll(selector))
      let components = []

      if (elements) {
        elements.forEach(element => {
          if (element.instance == null)
            element.instance = this.attachTo(element)
          components.push(element.instance)
        })
      }
      return components
    }
  }

  constructor(rootElement, ...args) {
    super()
    this.root = rootElement
    this.init(...args)
  }

  init(/* ...args */) {
    // Subclasses can override this to do any additional setup work that
    // would be considered part of a "constructor". Any additional arguments
    // besides root will be passed in here.
  }
}
