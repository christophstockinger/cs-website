import { Metadata } from 'next'
import Link from 'next/link'
import Grid from './_components/grid'
import Headline from './_components/headline'
import Paragraph from './_components/paragraph'
import Section from './_components/section'
import Text from './_components/text'

export interface IHomePageProps {}

export const metadata: Metadata = {
  title: 'Christoph Stockinger',
  description:
    'Leidenschaftlicher Full-Stack Web-Developer und Lösungsfinder aus Passau, der Unternehmen bei der Digitalisierung unterstützt.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL!,
    languages: {
      de: process.env.NEXT_PUBLIC_APP_URL!
    }
  },
  openGraph: {
    title: 'Christoph Stockinger',
    description:
      'Leidenschaftlicher Full-Stack Web-Developer und Lösungsfinder aus Passau, der Unternehmen bei der Digitalisierung unterstützt.',
    siteName: 'Christoph Stockinger',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.jpg`,
        alt: 'Christoph Stockinger'
      }
    ],
    locale: 'de-De',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christoph Stockinger',
    description:
      'Leidenschaftlicher Full-Stack Web-Developer und Lösungsfinder aus Passau, der Unternehmen bei der Digitalisierung unterstützt.',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}/twitter-image.jpg`,
        alt: 'Christoph Stockinger'
      }
    ]
  }
}

const HomePage = ({}: IHomePageProps) => {
  return (
    <Grid as="div">
      <Section className="col-span-full">
        <Headline as="h1" variant="2xl" color="primary">
          Seite nicht gefunden
        </Headline>
        <Text className="mt-12 lg:mt-16">
          <Paragraph>
            Du hast wohl nach etwas gesucht, das nicht mehr exisitert. Dafür
            möchte ich mich entschuldigen.
          </Paragraph>
          <Link className="link text-base mt-8" href="/">
            Suche hier einfach weiter!
          </Link>
        </Text>
      </Section>
    </Grid>
  )
}

export default HomePage
