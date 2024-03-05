import React from 'react'
import { IBaseProps } from '../../interfaces/base-props.interface'
import { cn } from '../../lib/utils'

export interface IListItemProps extends IBaseProps {
  children: React.ReactNode
}

const ListItem = ({ children, className = undefined }: IListItemProps) => {
  return <li className={cn('w-full h-auto', className)}>{children}</li>
}

export default ListItem
