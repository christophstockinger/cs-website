import '@util/base'
import '@util/polyfill'

// LAYOUTS- Import
import '@src/layout/page'
import '@src/layout/main'

// UTILS - Import
import SVGSprite, { Selector as uSVGSpriteSelector } from '@util/sprite'

// COMPONENTS - Import
import '@com/logo'
import '@com/headline'
import '@com/paragraph'
import '@com/symbol'
import '@com/anker'
import '@com/contact-item'
// import Component, { Selector as cComponentSelector } from '@com/component'

// MODULES - Import
// import Module, { Selector as mModuleSelector } from '@mod/module'
import '@mod/header'
import '@mod/intro'
import '@mod/knowledge'
import '@mod/image'
import '@mod/contact'
import '@mod/footer'

// UTILS - Init
const sprite = document.querySelector(uSVGSpriteSelector.ROOT)
if (sprite) SVGSprite.attachTo(sprite)

// COMPONENTS- Init
// Component.upgradeAll(cComponentSelector.ROOT)

// MODULE - Init
// Module.upgradeAll(mModuleSelector.ROOT)
