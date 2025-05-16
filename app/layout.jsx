import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SoftSell - Sell Your Unused Software Licenses",
  description: "Sell your unused software licenses easily with SoftSell. Fast, reliable, and secure!",
};

export default function RootLayout({ children }) {
  return (
   <html lang="en" className="scroll-smooth">
    <head>
        <title>SoftSell - Sell Your Unused Software Licenses</title>
        <meta name="description" content="Sell your unused software licenses easily with SoftSell. Fast, reliable, and secure!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/favicon.ico" />
      </head>
  <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
    {children}
    <script src="https://cdn.lordicon.com/lordicon.js"></script>
    <script src="https://cdn.botpress.cloud/webchat/v2.5/inject.js"></script>
<script src="https://files.bpcontent.cloud/2025/05/16/06/20250516063243-V05NJ612.js"></script>
    
  </body>
</html>

  );
}
