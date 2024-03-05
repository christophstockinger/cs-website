import { IBaseProps } from '../../interfaces/base-props.interface'
import { cn } from '../../lib/utils'
import Description from './description'
import Headline from './headline'

export interface ICardProps extends IBaseProps {
  title: string
  description?: string
}

const Card = ({
  title,
  description = undefined,
  className = undefined
}: ICardProps) => {
  return (
    <div className={cn('w-full h-auto flex flex-col gap-3', className)}>
      <Headline as="h3" variant="lg" color="current">
        {title}
      </Headline>
      {description && <Description>{description}</Description>}
    </div>
  )
}

export default Card
