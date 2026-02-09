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
  title: "Octo CRM — система для салонов, детейлинга и клиник",
  description:
    "Octo CRM: записи, клиенты, финансы, склад, AI-ассистент и перенос данных. 7 дней бесплатно с привязкой карты."
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
