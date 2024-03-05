import Grid from './_components/grid'
import Intro from './_components/intro'
import TechStack from './_components/tech-stack'
import Section from './_components/section'
import References from './_components/references'
import Teamwork from './_components/teamwork'
import Contact from './_components/contact'
import { Metadata } from 'next'

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
        <Intro />
      </Section>
      <Section className="col-span-full">
        <TechStack />
      </Section>
      <Section className="col-span-full">
        <References />
      </Section>
      <Section className="col-span-full">
        <Teamwork />
      </Section>
      <Section className="col-span-full">
        <Contact />
      </Section>
    </Grid>
  )
}

export default HomePage
