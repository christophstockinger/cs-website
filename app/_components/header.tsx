import { IBaseProps } from '../../interfaces/base-props.interface'
import { cn } from '../../lib/utils'
import Headline from './headline'

export interface IHeaderProps extends IBaseProps {}

const Header = ({ className = undefined }: IHeaderProps) => {
  return (
    <header className={cn('w-full h-auto', className)}>
      <Headline as="h1" variant="2xl" color="primary">
        Christoph Stockinger
      </Headline>
      <Headline as="p" variant="lg" color="black" className="mt-4">
        Full-Stack Web-Developer
      </Headline>
    </header>
  )
}

export default Header
