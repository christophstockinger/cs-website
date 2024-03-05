import Link from 'next/link'
import { IBaseProps } from '../../interfaces/base-props.interface'
import Headline from './headline'
import Paragraph from './paragraph'
import Text from './text'

export interface IContactProps extends IBaseProps {}

const Contact = ({ className = undefined }: IContactProps) => {
  return (
    <>
      <Headline as="h2" variant="xl" color="primary">
        Kontaktieren Sie mich!
      </Headline>
      <Text className="mt-8">
        <Paragraph>
          Für Anfragen zu Partnerschaften, Projekten oder wenn Sie einfach nur
          Hallo sagen möchten, zögern Sie nicht, mich zu kontaktieren.
        </Paragraph>
        <Paragraph>
          <strong>
            Lassen Sie uns gemeinsam die Möglichkeiten der digitalen Welt
            erkunden!
          </strong>
        </Paragraph>
      </Text>
      <dl className="relative w-80 md:w-100 h-auto mt-16 flex flex-wrap items-center gap-x-4 gap-y-6 md:gap-x-6 md:gap-y-8">
        <dt className="w-8 h-8 md:w-10 md:h-10 flex-shrink">
          <span className="sr-only">Mail</span>
          <span className="w-full h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 40 40">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M33.333 6.667H6.667A3.333 3.333 0 003.333 10v20a3.333 3.333 0 003.334 3.333h26.666A3.333 3.333 0 0036.667 30V10a3.333 3.333 0 00-3.334-3.333z"></path>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M36.667 11.666l-14.95 9.5a3.233 3.233 0 01-3.434 0l-14.95-9.5"></path>
            </svg>
          </span>
        </dt>
        <dd className="w-68 md:w-84">
          <Link
            className="link text-base"
            href="mailto:christoph@morethings.digital?subject=Projektanfrage"
            prefetch={false}>
            christoph@morethings.digital
          </Link>
        </dd>
        <dt className="w-8 h-8 md:w-10 md:h-10 flex-shrink">
          <span className="sr-only">Phone</span>
          <span className="w-full h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 40 40">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M36.667 28.2v5a3.332 3.332 0 01-3.634 3.333 32.984 32.984 0 01-14.383-5.117 32.5 32.5 0 01-10-10 32.983 32.983 0 01-5.117-14.45A3.333 3.333 0 016.85 3.333h5A3.333 3.333 0 0115.183 6.2a21.41 21.41 0 001.167 4.683 3.333 3.333 0 01-.75 3.517l-2.117 2.117a26.667 26.667 0 0010 10L25.6 24.4a3.333 3.333 0 013.517-.75 21.41 21.41 0 004.683 1.167 3.334 3.334 0 012.867 3.383z"></path>
            </svg>
          </span>
        </dt>
        <dd className="w-68 md:w-84">
          <Link
            className="link text-base"
            href="tel:+4915110977723"
            prefetch={false}>
            (+49) 151 10977723
          </Link>
        </dd>
      </dl>
    </>
  )
}

export default Contact
