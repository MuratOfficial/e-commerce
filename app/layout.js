import { Geist, Geist_Mono, Ubuntu, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets:["latin", "cyrillic"]
})

const ubuntu = Ubuntu({
  subsets:['cyrillic', 'latin'],
  weight:'300'
})

export const metadata = {
  title: "LuxuryBoom",
  description: "LuxuryBoom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${inter.variable} ${geistMono.variable} ${ubuntu.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
