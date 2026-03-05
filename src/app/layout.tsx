import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../index.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
    preload: true,
});

export const metadata: Metadata = {
    title: 'Mold Care Solutions | Expert Mold Removal in Richmond, VA',
    description: 'Professional mold remediation, inspection, and removal services in Richmond, VA. Licensed, insured, and 24/7 emergency response. Free quotes available.',
    keywords: ['mold removal', 'mold remediation', 'mold inspection', 'Richmond VA', 'water damage restoration', 'black mold', 'air quality testing'],
    authors: [{ name: 'Mold Care Solutions' }],
    openGraph: {
        title: 'Mold Care Solutions | Expert Mold Removal',
        description: 'Professional mold remediation and inspection services in Richmond, VA.',
        type: 'website',
        locale: 'en_US',
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
        <html lang="en" className={inter.variable}>
            <body className={`min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-200 selection:text-orange-900 ${inter.className}`}>
                {children}
            </body>
        </html>
    );
}
