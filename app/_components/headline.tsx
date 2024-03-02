import { createElement } from 'react'
import { IBaseProps } from '../../interfaces/base-props.interface'
import { cn } from '../../lib/utils'

export interface IHeadlineProps extends IBaseProps {
  as?: keyof React.ReactHTML
  variant: '2xl' | 'xl' | 'lg' | 'base' | 'sm'
  color: 'primary' | 'black' | 'white' | 'current'
  children: React.ReactNode
}

const Headline = ({
  children,
  variant,
  as = 'div',
  color = 'black',
  className = undefined
}: IHeadlineProps) => {
  return createElement(
    as,
    {
      className: cn(
        'hyphens-auto trasition-colors duration-300 ease-in-out',
        {
          'text-primary': color === 'primary',
          'text-black': color === 'black',
          'text-white': color === 'white'
        },
        {
          'text-2xl': variant === '2xl',
          'text-xl': variant === 'xl',
          'text-lg': variant === 'lg',
          'text-base': variant === 'base',
          'text-sm': variant === 'sm'
        },
        className
      )
    },
    children
  )
}

export default Headline
