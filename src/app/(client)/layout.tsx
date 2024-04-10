import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata, Viewport } from "next";
import "./scss/globals.scss";
import Header from "@/src/components/default/header/Header";

import Footer from "@/src/components/default/footer/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tripusers.com/"),
  title: {
    default: "tripusers.com",
    template: "%s | tripusers.com",
  },
  description:
    "Welcome to travel elevated, where every moment is a seamless blend of sophistication and adventure. Discover refined luxury with Tripusers.com.",
  openGraph: {
    type: "website",

    url: "https://www.tripusers.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
