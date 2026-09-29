import type { Metadata } from "next";
import { Rubik, Heebo } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { StickyCTA } from "@/components/StickyCTA";
import { Footer } from "@/components/sections/Footer";

// Heading font — use the `font-heading` Tailwind utility class wherever this should apply.
const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["hebrew", "latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

// Body font — applied globally via the `font-sans` utility (see globals.css base style).
const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "אורקבי | מורה נהיגה פרטי",
  description:
    "שיעורי נהיגה פרטיים עם אורקבי - הכשרה מקצועית, סבלנית ואישית להשגת רישיון הנהיגה שלך בביטחון.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${rubik.variable} ${heebo.variable}`}>
      <body>
        <Nav />
        <div className="pb-20 md:pb-0">
          {children}
          <Footer />
        </div>
        <StickyCTA />
      </body>
    </html>
  );
}
