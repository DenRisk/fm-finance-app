import type {Metadata} from "next";
import "./globals.css";
import Sidebar from '@/components/layout/Sidebar'
import MobileNav from '@/components/layout/MobileNav'
import {Public_Sans} from 'next/font/google'


export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};


const sans = Public_Sans({
    subsets: ['latin'],
    variable: '--font-sans',
})

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className={`${sans.variable} font-sans`}>
        <div className='flex'>
            {/* Desktop Sidebar */}
            <aside className='hidden lg:block basis-[300px] text-preset-1'>
                <Sidebar/>
            </aside>
            {/* Main Content */}
            <main className="max-w-[1440px] mx-auto p-6 basis-full lg:basis-auto lg:grow">
                {children}
            </main>
            {/* Mobile Navigation */}
            <nav className='block lg:hidden basis-full'>
                <MobileNav/>
            </nav>
        </div>
        </body>
        </html>
    );
}
