import "./globals.css";
import { Inter } from "next/font/google";
import { siteData } from "app-data/site-data";
import { Footer, Header } from "@/components/client";
import { SavedPostsContextProvider } from "hooks/src/context";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>{siteData.name}</title>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen py-16 bg-cyan-50 flex flex-col">
          <SavedPostsContextProvider>{children}</SavedPostsContextProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
