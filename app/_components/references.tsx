import Link from 'next/link'
import { IBaseProps } from '../../interfaces/base-props.interface'
import Headline from './headline'
import List from './list'
import ListItem from './list-item'
import Paragraph from './paragraph'
import ReferenceCard, { IReferenceCardProps } from './reference-card'
import Text from './text'

export interface IReferencesProps extends IBaseProps {}

const References = ({ className = undefined }: IReferencesProps) => {
  const items: Readonly<
    Pick<IReferenceCardProps, 'title' | 'description' | 'href'>
  >[] = [
    {
      title: 'DHL Brand Hub',
      description:
        'Für STRICHPUNKT Design, langjährige Leadagentur der DHL Group, übernehmen ich und Team seit 2020 die technische Umsetzung und Betreuung des DHL Group Global Brand Hubs.',
      href: 'https://www.dpdhl-brands.com?ref=christophstockinger.de'
    },
    {
      title: 'DFB UI-Kit & Markenportal',
      description:
        'Für die Leadagentur des DFB, STRICHPUNKT Design, übernehme ich mit meinem Team seit 2020 die technische Umsetzung und Betreuung des DFB-Markenportals mit zugehörigem UI-Kit.',
      href: 'https:://markenportal.dfb.de?ref=christophstockinger.de'
    },
    {
      title: 'Manuel Neuer Webseite',
      description:
        'Manuel Neuer wurde als Torhüter weltbekannt — für fam of creators übernahm ich die Umsetzung einer Website, welche die zahlreichen weiteren Facetten des Deutschen Ausnahmesportlers zeigt.',
      href: 'https://manuel-neuer.com?ref=christophstockinger.de'
    },
    {
      title: 'ICUnet Group Webseite',
      description:
        'Die ICUnet.Group ist europäischer Marktführer für interkulturelle Qualifizierung und Global Mobility. In Kooperation mit Lukas Musilek von Die Neue Entwicklung bin ich mit Team seit 2023 als Partner im Web ein kleiner Teil der Erfolgsgeschichte des Passauer Unternehmens.',
      href: 'https://www.icunet.group?ref=christophstockinger.de'
    },
    {
      title: 'K16 GmbH Webseite',
      description:
        'Seit über 30 Jahren ist die Hambuger Präsentationsagentur K16 einer der marktführenden Dienstleister für Business-Präsentationen. Getreu den Schlagworten “neu, anders, besser” durfte ich mit Team die technische Umsetzung der neuen Agentur-Website durchführen und diesen bereits im Designprozess zu begleiten.',
      href: 'https://www.k16.de?ref=christophstockinger.de'
    },
    {
      title: 'Konkav Agency Webseite',
      description:
        'KONKAV bündelt strategische Markenexpertise und kreative Kampagnenkompetenz für einen fundiert hergeleiteten und kraftvollen Unternehmensauftritt von B2B-Marken. KONKAV ist eine Agenturmarke der K16 GmbH aus Hamburg, welche uns beauftragt hat, den Launch der neuen Brand technisch umzusetzen und zu implementieren — natürlich nach den modernsten Web-Standards.',
      href: 'https://www.konkav.agency?ref=christophstockinger.de'
    },
    {
      title: 'Zeit für Brot Webseite',
      description:
        'Seit 2009 schlägt das Team von ZEIT FÜR BROT die Brücke zwischen Tradition und Zeitgeist — seit 2022 darf ich mich mit Team als technischer Ansprechpartner für die Umsetzung der frischen Corporate Website verantwortlich zeigen.',
      href: 'https://www.zeitfuerbrot.com?ref=christophstockinger.de'
    }
  ]

  return (
    <>
      <Headline as="h2" variant="xl" color="primary">
        Referenzen
      </Headline>
      <Text className="mt-8">
        <Paragraph>
          Ich bin stolz darauf, mit namhaften Marken und Agenturen
          zusammengearbeitet zu haben. Nachfolgend ein kleiner Auszug.
        </Paragraph>
      </Text>
      <List className="mt-10 sm:mt-12 md:mt-14 lg:mt-16">
        {items.map((item, index) => (
          <ListItem key={index}>
            <ReferenceCard {...item} />
          </ListItem>
        ))}
      </List>
      <div className="flex justify-end items-center w-full h-auto mt-12">
        <Link
          className="group inline-flex items-center gap-3 text-primary hover:text-primary"
          href="https://www.morethingsdigital/projects?ref=christophstockinger.de"
          target="_blank">
          <strong className="border-b-2 border-transparent group-hover:border-primary transition-all duration-300 ease-in-out">
            weitere Referenzen
          </strong>
          <span className="w-6 h-6 md:w-8 md:h-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 32 32">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M28 17.333v8A2.667 2.667 0 0125.333 28H6.667A2.667 2.667 0 014 25.333V6.667A2.667 2.667 0 016.667 4h8M28 4L16 16m4-12h8v8"></path>
            </svg>
          </span>
        </Link>
      </div>
    </>
  )
}

export default References
