import { IBaseProps } from '../../interfaces/base-props.interface'
import Card from './card'

export interface ITechStackCardProps extends IBaseProps {
  title: string
  description?: string
}

const TechStackCard = ({
  title,
  description = undefined,
  className = undefined
}: ITechStackCardProps) => {
  return <Card title={title} description={description} className={className} />
}

export default TechStackCard
