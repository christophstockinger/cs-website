import './grid-overlay'

export const NAME = 'GridOverlay'
const CLASS = `dev-GridOverlay`

export const ClassName = {
  ROOT: CLASS,
  HIDDEN: `is-hidden`
}

export const Selector = {
  ROOT: `${ClassName.ROOT}`,
  WRAPPER: `${ClassName.ROOT}__wrapper`,
  CONTAINER: `${ClassName.ROOT}__container`,
  CELL: `${ClassName.ROOT}__cell`
}

export const Event = {
  KEYPRESS: `keypress`
}

const cells = 12
let templateCells = ''
for (let i = 0; i < cells; i++) {
  const templateCell = `<div class="${Selector.CELL}"></div>`
  templateCells = `${templateCells}${templateCell}`
}
const templateContainer = `<div class="${
  Selector.CONTAINER
}">${templateCells}</div>`
const templateWrapper = `<div class="${
  Selector.WRAPPER
}">${templateContainer}</div>`

export default function toggleGrid(key = 'G', spoken = 'SHIFT+G') {
  console.log('Press Shift + G to show the Grid Overlay')
  document.addEventListener(Event.KEYPRESS, event => {
    if (event.key === key) {
      let root = document.querySelector(`.${Selector.ROOT}`)
      if (root) {
        root.remove()
      } else {
        root = document.createElement('div')
        root.classList.add(ClassName.ROOT)
        root.classList.add(ClassName.ROOT)
        root.innerHTML = templateWrapper
        document.body.appendChild(root)
      }
    }
  })
}
