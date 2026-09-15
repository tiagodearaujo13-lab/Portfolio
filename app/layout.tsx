import type { Metadata } from 'next';
import './globals.css';
import TouchCrackEffect from '@/components/mobile/TouchCrackEffect';

export const metadata: Metadata = {
  title: {
    default: 'Tiago Francisco | Fullstack',
    template: '%s | Tiago Francisco',
  },
  description:
    'Portfólio profissional de Tiago Araújo Francisco — Engenheiro de Software Full-Stack especialista em Node.js, React, Next.js, TypeScript e Clean Architecture.',
  keywords: [
    'Tiago Araújo',
    'Tiago Francisco',
    'Fullstack Developer',
    'Engenheiro de Software',
    'Node.js',
    'React',
    'Next.js',
    'TypeScript',
    'Clean Architecture',
    'Scrum Master',
    'DocFácil.pt',
    'Portugal',
  ],
  authors: [{ name: 'Tiago Araújo Francisco' }],
  metadataBase: new URL('https://portfolio-lilac-six-37.vercel.app'),
  openGraph: {
    type: 'website',
    url: 'https://portfolio-lilac-six-37.vercel.app',
    title: 'Tiago Francisco | Fullstack',
    description:
      'Engenheiro de Software Full-Stack especialista em Node.js, React, Next.js, TypeScript e arquitetura resiliente de produtos em produção.',
    siteName: 'Tiago Araújo | Portfólio',
    images: [
      {
        url: '/assets/tiago.webp',
        width: 1200,
        height: 630,
        alt: 'Tiago Francisco - Fullstack Developer',
      },
    ],
    locale: 'pt_PT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tiago Francisco | Fullstack',
    description:
      'Engenheiro de Software Full-Stack especialista em Node.js, React, Next.js, TypeScript e arquitetura resiliente.',
    images: [
      {
        url: '/assets/tiago.webp',
        width: 1200,
        height: 630,
        alt: 'Tiago Francisco - Fullstack Developer',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" className="scroll-smooth">
      <body className="font-sans bg-paper text-ink antialiased">
        <TouchCrackEffect />
        {children}
      </body>
    </html>
  );
}
