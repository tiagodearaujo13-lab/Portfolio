import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tiago Araújo Francisco — Full-Stack Developer & CSM®',
  description:
    'Portfólio profissional de Tiago Araújo Francisco. Desenvolvedor Full-Stack JS/TS e Certified Scrum Master. Criador do DocFácil.pt — SaaS LegalTech em produção.',
  keywords: [
    'Desenvolvedor Full-Stack',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Scrum Master',
    'Portugal',
    'DocFácil',
  ],
  authors: [{ name: 'Tiago Araújo Francisco' }],
  openGraph: {
    title: 'Tiago Araújo Francisco — Full-Stack Developer',
    description:
      '20 anos de liderança canalizados para engenharia de software ágil e clean architecture.',
    type: 'website',
    locale: 'pt_PT',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans bg-zinc-950 text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
