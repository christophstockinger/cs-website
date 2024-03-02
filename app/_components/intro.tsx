import Link from 'next/link'
import { IBaseProps } from '../../interfaces/base-props.interface'
import Header from './header'
import Paragraph from './paragraph'
import Text from './text'

export interface IIntroProps extends IBaseProps {}

const Intro = ({ className = undefined }: IIntroProps) => {
  return (
    <>
      <Header />
      <Text className="mt-16">
        <Paragraph>
          Als leidenschaftlicher Full-Stack Web-Entwickler und Lösungsfinder bei
          der&nbsp;
          <Link
            className="link"
            href="https://www.morethings.digital?ref=christophstockinger.de"
            target="_blank">
            <strong>morethingsdigital GmbH</strong>
          </Link>
          &nbsp; führe ich Projekte, die Agenturen und Unternehmen dabei helfen,
          im Digitalen durchzustarten.
        </Paragraph>
        <Paragraph>
          Wir entwickeln maßgeschneiderte digitale Lösungen, die nicht nur die
          Online-Präsenz unserer Kunden verbessern, sondern auch ihre
          Arbeitsabläufe effizienter gestalten. Mit unserem tiefen Verständnis
          für die digitale Welt und einem Blick für neue Trends setzen wir auf
          neueste Technologien, um unseren Kunden zu helfen, sich in ihrem Markt
          hervorzuheben und erfolgreich zu sein.
        </Paragraph>
      </Text>
    </>
  )
}

export default Intro
