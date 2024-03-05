import { IBaseProps } from '../../interfaces/base-props.interface'
import Headline from './headline'
import List from './list'
import ListItem from './list-item'
import Paragraph from './paragraph'
import TechStackCard, { ITechStackCardProps } from './tech-stack-card'
import Text from './text'

export interface ITechStackProps extends IBaseProps {}

const TechStack = ({ className = undefined }: ITechStackProps) => {
  const items: Readonly<Pick<ITechStackCardProps, 'title' | 'description'>>[] =
    [
      {
        title: 'Laravel (PHP)',
        description:
          'Das Open-Source PHP-Framework ermöglicht es mir, robuste, sichere und skalierbare Webanwendungen zu entwickeln. Es ist besonders gut für maßgeschneiderte Lösungen geeignet.'
      },
      {
        title: 'Node.js und Typescript',
        description:
          'Mit Node.js baue ich leistungsstarke Server-Anwendungen, während Typescript für zusätzliche Sicherheit und Effizienz im Code sorgt.'
      },
      {
        title: 'React und Next.js',
        description:
          'Diese Technologien verwende ich für die Erstellung von Benutzeroberflächen, die nicht nur schön aussehen, sondern auch schnell und interaktiv sein sollen.'
      },
      {
        title: 'Statamic und CraftCMS',
        description:
          'Zwei sehr flexible Content-Management-Systeme, mit denen sehr individuelle Webseiten umgesetzt werden könne. Anhand einer umfangreichen Analyse der Anforderungen wähle ich das passende CMS aus.'
      }
    ]

  return (
    <>
      <Headline as="h2" variant="xl" color="primary">
        Tech-Stack
      </Headline>
      <Text className="mt-8">
        <Paragraph>
          Ich arbeite mit verschiedenen modernen Technologien, um jede Art von
          Webprojekt zu realisieren. Mein Fokus liegt dabei auf:
        </Paragraph>
      </Text>
      <List className="mt-10 sm:mt-12 md:mt-14 lg:mt-16">
        {items.map((item, index) => (
          <ListItem key={index}>
            <TechStackCard {...item} />
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default TechStack
