import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeRegistry from '../theme/ThemeRegistry';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContactWidget from '../components/FloatingContactWidget';
import ClientLayout from '../components/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'CMTC Wireless | Expert Device Repair',
    description: 'CMTC Wireless - Expert Phone, Laptop, and Tablet Repair Services in Minneapolis & St. Paul. Fast, reliable, and affordable.',
    metadataBase: new URL('https://praisearray7.github.io/CMTC-Wireless'),
    icons: {
        icon: `${process.env.NEXT_PUBLIC_BASE_URL || ''}/cmtc_logo.png`,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeRegistry>
                    <ClientLayout>
                        {children}
                    </ClientLayout>
                </ThemeRegistry>
            </body>
        </html>
    );
}
