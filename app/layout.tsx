import type { Metadata } from 'next';
import './globals.css';
import Curtain from './components/Curtain';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SiteScripts from './components/SiteScripts';
import { ALLOW_INDEXING } from '@/lib/site';

const description =
  "A private members' club in Kuala Lumpur for founders and CEOs. Board room, private dining, cigar bar, golf simulator and recovery suites. By invitation.";

export const metadata: Metadata = {
  metadataBase: new URL('https://accelhouse.com'),
  title: { default: "Accel House | Private Members' Club in Kuala Lumpur", template: '%s | Accel House' },
  description,
  applicationName: 'Accel House',
  keywords: [
    "private members' club Kuala Lumpur",
    'private members club KL',
    'business club Kuala Lumpur',
    'CEO roundtable Kuala Lumpur',
    'private dining Kuala Lumpur',
    'cigar bar Kuala Lumpur',
    'golf simulator Kuala Lumpur',
    'recovery suites',
    'Accel Elite membership',
    'Accel House',
    'Ritchie Clubhouse',
    'Taman U-Thant'
  ],
  openGraph: {
    type: 'website',
    siteName: 'Accel House',
    locale: 'en_MY',
    url: 'https://accelhouse.com',
    title: "Accel House | Private Members' Club in Kuala Lumpur",
    description,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'The entrance to Accel House, Kuala Lumpur' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Accel House | Private Members' Club in Kuala Lumpur",
    description,
    images: ['/og.jpg']
  },
  robots: ALLOW_INDEXING ? { index: true, follow: true } : { index: false, follow: false }
};

// Tells Google what Accel House is, where it is and who runs it.
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://accelhouse.com/#accel-house',
  name: 'Accel House',
  description: "Private members' club and clubhouse of Accel Elite, built around business, social and recovery.",
  url: 'https://accelhouse.com',
  image: 'https://accelhouse.com/og.jpg',
  logo: 'https://accelhouse.com/icon.png',
  email: 'enquiry@accel-elite.asia',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ritchie Clubhouse, Persiaran Ritchie, Taman U-Thant',
    addressLocality: 'Kuala Lumpur',
    addressCountry: 'MY'
  },
  areaServed: 'Kuala Lumpur',
  parentOrganization: { '@type': 'Organization', name: 'Accel Elite Sdn. Bhd.' },
  amenityFeature: [
    'Members lounge with bar',
    'Board room and meeting rooms',
    'Private dining rooms',
    'Cigar bar and terrace',
    'Wine cellar',
    'Golf simulator',
    'Private recovery suites'
  ].map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true }))
};

// Runs before first paint: turns on the scroll reveals, and lets the entrance
// doors play once per visit rather than on every page.
const boot = `(function(){try{var d=document.documentElement;var r=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(!r&&'IntersectionObserver' in window){d.classList.add('js','pre');setTimeout(function(){d.classList.remove('pre')},3500)}if(sessionStorage.getItem('ah-seen')){d.classList.add('seen')}else{sessionStorage.setItem('ah-seen','1')}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500&display=swap"
        />
        <script dangerouslySetInnerHTML={{ __html: boot }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </head>
      <body>
        <Curtain />
        <Nav />
        {children}
        <Footer />
        <SiteScripts />
      </body>
    </html>
  );
}
