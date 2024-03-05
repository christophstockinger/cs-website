import { IBaseProps } from '../../interfaces/base-props.interface'
import { cn } from '../../lib/utils'

export interface IComponentProps extends IBaseProps {}

const Component = ({ className = undefined }: IComponentProps) => {
  return <div className={cn('', className)}>Component</div>
}

export default Component
