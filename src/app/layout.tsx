import "./globals.css";
import { Golos_Text, Unbounded } from "next/font/google";

const golos = Golos_Text({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"]
});

const unbounded = Unbounded({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata = {
  title: "Octō CRM — система для салонов, детейлинга и клиник",
  description:
    "Octō CRM: записи, клиенты, финансы, склад, AI-ассистент и перенос данных. 14 дней бесплатно с привязкой карты.",
  icons: {
    icon: "/PROM_logo_small_blue (1).svg",
    shortcut: "/PROM_logo_small_blue (1).svg",
    apple: "/PROM_logo_small_blue (1).svg"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${golos.variable} ${unbounded.variable}`}>
        {children}
      </body>
    </html>
  );
}
