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
// import Component, { Selector as cComponentSelector } from '@com/component'

// MODULES - Import
// import Module, { Selector as mModuleSelector } from '@mod/module'
import '@mod/intro'
import Header, { Selector as mHeaderSelector } from '@mod/header'
import Footer, { Selector as mFooterSelector } from '@mod/footer'

// UTILS - Init
const sprite = document.querySelector(uSVGSpriteSelector.ROOT)
if (sprite) SVGSprite.attachTo(sprite)

// COMPONENTS- Init
// Component.upgradeAll(cComponentSelector.ROOT)

// MODULE - Init
// Module.upgradeAll(mModuleSelector.ROOT)
Header.upgradeAll(mHeaderSelector.ROOT)
Footer.upgradeAll(mFooterSelector.ROOT)
