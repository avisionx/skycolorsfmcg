import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Raleway } from 'next/font/google';
import Head from 'next/head';

const font = Raleway({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-raleway',
});

export const metadata = {
  title: {
    template: `%s | SKY COLORS FMCG - Global Wholesale Distributor of Quality Food & Personal Care Products`,
    default:
      'SKY COLORS FMCG - Global Wholesale Distributor of Quality Food & Personal Care Products',
  },
  description:
    'SKY COLORS FMCG is a leading global distributor of high-quality food, non-food, personal care, and toiletries products. Headquartered in Dubai, we deliver top-notch FMCG products worldwide, ensuring reliability, integrity, and exceptional service to our customers and partners.',
  icons: {
    icon: `https://skycolorsfmcg.com/favicon.png`,
  },
  openGraph: {
    images: `https://skycolorsfmcg.com/skycolorsfmcg-hero.webp`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta name="google-site-verification" content="Em7XUv6ApEODu2D8GMUkWqQ-CmD4HltkQyYna7JnxyM" />
      </head>
      <body
        className={`${font.className} flex min-h-[100dvh] flex-col antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
