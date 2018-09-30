import '@util/base'
import '@util/polyfill'

// LAYOUTS- Import
import '@src/layout/page'
import '@src/layout/main'

// UTILS - Import
import SVGSprite, { Selector as uSVGSpriteSelector } from '@util/sprite'

// COMPONENTS - Import
import '@com/anker'
import '@com/button-group'
import '@com/contact-item'
import '@com/headline'
import Image, { Selector as cImageSelector } from '@com/image'
import Logo, { Selector as cLogoSelector } from '@com/logo'
import '@com/navigation'
import '@com/paragraph'
import '@com/symbol'

// MODULES - Import
import '@mod/contact'
import '@mod/data-protection'
import '@mod/footer'
import '@mod/header'
import '@mod/image'
import '@mod/imprint'
import '@mod/intro'
import '@mod/knowledge'

// UTILS - Init
const sprite = document.querySelector(uSVGSpriteSelector.ROOT)
if (sprite) SVGSprite.attachTo(sprite)

// COMPONENTS- Init
Image.upgradeAll(cImageSelector.ROOT)
Logo.upgradeAll(cLogoSelector.ROOT)

// MODULE - Init
// Module.upgradeAll(mModuleSelector.ROOT)
