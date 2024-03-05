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
          &nbsp; helfe ich Agenturen und Unternehmen dabei, in der digitalen
          Welt durchzustarten.
        </Paragraph>
        <Paragraph>
          Ich entwickele maßgeschneiderte digitale Lösungen, die nicht nur die
          Online-Präsenz meiner Kunden verbessert, sondern auch Ihre
          Arbeitsabläufe effizienter gestalten kann. Mit meinem tiefen
          Verständnis für die digitale Welt sowie neuen Trends setze ich auf
          neueste Technologien.
        </Paragraph>
        <Paragraph>
          <strong>
            Ich bin Ihr Partner für&nbsp;
            <span className="text-primary">All Things Digital</span>
          </strong>
          !
        </Paragraph>
      </Text>
    </>
  )
}

export default Intro
