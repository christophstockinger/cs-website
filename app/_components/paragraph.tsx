import { IBaseProps } from '../../interfaces/base-props.interface'
import { cn } from '../../lib/utils'

export interface IParagraphProps extends IBaseProps {
  children: React.ReactNode
}

const Paragraph = ({ children, className = undefined }: IParagraphProps) => {
  return (
    <p
      className={cn(
        'text-base text-black text-left mb-6 last:mb-0',
        className
      )}>
      {children}
    </p>
  )
}

export default Paragraph
