import Link from 'next/link'
import { IBaseProps } from '../../interfaces/base-props.interface'
import { cn } from '../../lib/utils'
import Card from './card'

export interface IReferenceCardProps extends IBaseProps {
  title: string
  description?: string
  href: string
}

const ReferenceCard = ({
  title,
  href,
  description = undefined,
  className = undefined
}: IReferenceCardProps) => {
  return (
    <Link
      href={href}
      className={cn('group text-black w-full h-auto', className)}
      target="_blank"
      prefetch={false}>
      <Card
        title={title}
        description={description}
        className="group-hover:text-primary"
      />
    </Link>
  )
}

export default ReferenceCard
