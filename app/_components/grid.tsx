import { createElement } from 'react'
import { IBaseProps } from '../../interfaces/base-props.interface'
import { cn } from '../../lib/utils'

export interface IGridProps extends IBaseProps {
  as?: keyof React.ReactHTML
  children?: React.ReactNode
}

const Grid = ({ as = 'div', children, className = undefined }: IGridProps) => {
  return createElement(
    as,
    {
      className: cn(
        'relative w-full h-auto grid gap-4 md:gap-4 grid-cols-4 sm:grid-cols-4 md:grid-cols-12 lg:grid-cols-12',
        className
      )
    },
    children
  )
}

export default Grid
