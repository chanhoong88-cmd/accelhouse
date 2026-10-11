import type { Metadata } from 'next';
import './globals.css';
import Curtain from './components/Curtain';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SiteScripts from './components/SiteScripts';

const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true';

export const metadata: Metadata = {
  metadataBase: new URL('https://accelhouse.com'),
  title: { default: "Accel House | A private members' house", template: '%s | Accel House' },
  description:
    'Accel House is the private clubhouse of Accel Elite at Ritchie Clubhouse, Kuala Lumpur. Business, social and recovery, by invitation only.',
  robots: allowIndexing ? { index: true, follow: true } : { index: false, follow: false }
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
