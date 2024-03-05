import { IBaseProps } from '../../interfaces/base-props.interface'
import Headline from './headline'
import Paragraph from './paragraph'
import Text from './text'

export interface ITeamworkProps extends IBaseProps {}

const Teamwork = ({ className = undefined }: ITeamworkProps) => {
  return (
    <>
      <Headline as="h2" variant="xl" color="primary">
        Warum Sie mit mir zusammen&shy;arbeiten sollen?
      </Headline>
      <Text className="mt-8">
        <Paragraph>
          Ich verstehe, dass jedes Projekt einzigartig ist und individuelle
          Lösungen erfordert. Meine Leidenschaft für Technologie und mein
          Engagement für den Erfolg meiner Kunden motivieren mich, kreative und
          effektive Lösungen zu entwickeln, die nicht nur die aktuellen
          Anforderungen erfüllen, sondern auch zukunftssicher sind.
        </Paragraph>
        <Paragraph>
          Wenn Sie einen Partner suchen, der technisches Know-how mit einem
          tiefen Verständnis für digitale Strategien verbindet, freue ich mich
          darauf, von Ihnen zu hören. Gemeinsam können wir die digitale
          Landschaft neu gestalten und außergewöhnliche Ergebnisse erzielen.
        </Paragraph>
      </Text>
    </>
  )
}

export default Teamwork
