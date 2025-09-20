import type { Metadata } from "next";
import "./globals.css";
import "@/libs/fontawesome";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";


export const metadata: Metadata = {
  title: "Tramella Tran",
  description: "My personal profile",
  icons: {
    icon: "https://res.cloudinary.com/dalrsrbw0/image/upload/v1758128221/logo_TT_nobg_nly4pk.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Link trực tiếp Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="max-w-[1500px] mx-auto w-full flex flex-col min-h-screen text-gray-900">
        {/* Header */}
        <Header />

        {/* Main */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
