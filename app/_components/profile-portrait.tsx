import Image from 'next/image'
import { IBaseProps } from '../../interfaces/base-props.interface'
import { cn } from '../../lib/utils'

export interface IProfilePortraitProps extends IBaseProps {}

const ProfilePortrait = ({ className = undefined }: IProfilePortraitProps) => {
  return (
    <div className={cn('w-full h-full flex items-center', className)}>
      <Image
        className="w-full h-auto"
        src="/christoph-portrait.jpg"
        width={604}
        height={812}
        objectFit="contain"
        objectPosition="center"
        alt="Christoph auf der Münchner Fernsehturm mit der Münchner Skyline im Hintergrund"
      />
    </div>
  )
}

export default ProfilePortrait
