import "./globals.css";
import { Kumbh_Sans } from "next/font/google";

// Components
import { Footer, Navbar } from "@/components/navigation";

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "METZINGER Official Site | Luxury Fashion And More",
  description:
    "Discover METZINGER collections for all and buy luxury clothing, shoes and accessories online on our official website and in store.  ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kumbhSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
