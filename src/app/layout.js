import './globals.css';
import { Raleway, Roboto_Serif } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-raleway',
  display: 'swap',
});

const robotoSerif = Roboto_Serif({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-roboto-serif',
  display: 'swap',
});

const title = 'Deniz Kirca — Software Engineer, LLM Infrastructure';
const description =
  'Software engineer at MathWorks working on the LLM platform behind MATLAB, Simulink, and Polyspace Copilot.';

export const metadata = {
  metadataBase: new URL('https://denizkirca.com'),
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description,
    url: 'https://denizkirca.com',
    siteName: 'Deniz Kirca',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Deniz Kirca',
  url: 'https://denizkirca.com',
  jobTitle: 'Software Engineer',
  worksFor: { '@type': 'Organization', name: 'MathWorks' },
  sameAs: [
    'https://github.com/kircad',
    'https://www.linkedin.com/in/deniz-kirca-b000b9190/',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${raleway.variable} ${robotoSerif.variable} scroll-smooth`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
