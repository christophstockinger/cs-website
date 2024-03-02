import { IBaseProps } from '../../interfaces/base-props.interface'
import { cn } from '../../lib/utils'

export interface IDescriptionProps extends IBaseProps {
  children: React.ReactNode
}

const Description = ({ children, className = undefined }: IDescriptionProps) => {
  return (
    <p className={cn('text-sm italic text-black text-left', className)}>
      {children}
    </p>
  )
}

export default Description
