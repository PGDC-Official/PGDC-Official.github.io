import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import { robotoMono } from "./ui/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.className} antialiased`}
      >
        <Header />
        <main className="pt-[93px] mx-auto bg-white text-black relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
