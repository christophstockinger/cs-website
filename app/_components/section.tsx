import { IBaseProps } from '../../interfaces/base-props.interface'
import { cn } from '../../lib/utils'

export interface ISectionProps extends IBaseProps {
  children?: React.ReactNode
}

const Section = ({ children, className = undefined }: ISectionProps) => {
  return (
    <section
      className={cn(
        ' flex flex-col justify-center items-start h-auto px-6 py-8 sm:py-10 md:py-14 lg:py-16 lg:px-0 lg:min-h-screen',
        className
      )}>
      {children}
    </section>
  )
}

export default Section
