import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Component from "./Components/AvatarChat";
import Navbar from "./Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Commeriva",
  description: "Your Custom E-commerce Solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className="relative">
        <Navbar />
      </div>
       <head>
        
      
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 
  <link rel="icon" sizes="180x180" href="/fav.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/fav.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/fav.png" />
  <link rel="shortcut icon" href="/fav.png" />
  <title>Commeriva</title>
</head>
      <Component />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
