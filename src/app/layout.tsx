import "./globals.css"
import { DM_Sans } from "next/font/google";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { StorageProvider } from "@/context/LocalStorageContext";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="bg-white">
        {/* aca va el context, envolvemos todo el content para acceder a localStorage */}
        <StorageProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </StorageProvider>
      </body>
    </html>
  );
}
