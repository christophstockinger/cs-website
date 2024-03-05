import { IBaseProps } from '../../interfaces/base-props.interface'
import { cn } from '../../lib/utils'

export interface ITextProps extends IBaseProps {
  children: React.ReactNode
}

const Text = ({ children, className = undefined }: ITextProps) => {
  return <div className={cn('w-full h-auto', className)}>{children}</div>
}

export default Text
