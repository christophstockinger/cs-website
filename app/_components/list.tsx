import React from 'react'
import { IBaseProps } from '../../interfaces/base-props.interface'
import { cn } from '../../lib/utils'

export interface IListProps extends IBaseProps {
  children: React.ReactNode
}

const List = ({ children, className = undefined }: IListProps) => {
  return (
    <ul className={cn('w-full h-auto flex flex-col gap-8 md:gap-10', className)}>
      {children}
    </ul>
  )
}

export default List
