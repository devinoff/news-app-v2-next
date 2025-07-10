import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ['latin-ext'] });

export const metadata: Metadata = {
  title: 'Ziņas_dvx | Būtiskākais no Latvijas ziņu portāliem',
  description: 'Automatizēts Latvijas ziņu kopsavilkums. Google Gemini AI noņem dublikātus un filtrē mazsvarīgo, atstājot tikai dienas būtiskākos notikumus.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='lv'>
            <body className={`bg-zinc-200 dark:bg-zinc-900 text-black dark:text-white overflow-x-hidden antialiased ${nunito.className}`}>
                {children}
            </body>
        </html>
    );
}
