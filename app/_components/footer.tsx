import Link from 'next/link'
import { IBaseProps } from '../../interfaces/base-props.interface'
import { cn } from '../../lib/utils'
import Grid from './grid'

export interface IFooterProps extends IBaseProps {}

const Footer = ({ className = undefined }: IFooterProps) => {
  return (
    <footer className={cn('w-full h-auto container py-6 lg:py-8', className)}>
      <Grid as="div" className='px-6 lg:px-0'>
        <div className="col-span-full md:col-span-6 flex gap-8">
          <Link className="link text-base text-left" href="/">
            Home
          </Link>
          <Link className="link text-base text-left" href="/impressum">
            Impressum
          </Link>
        </div>
        <div className="col-span-full  md:col-span-6">
          <p className="text-left text-base md:text-right">
            © 2021 morethingsdigital GmbH
          </p>
        </div>
      </Grid>
    </footer>
  )
}

export default Footer
