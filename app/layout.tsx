import "@/style/main.scss";
import type { Metadata } from "next";
import HeaderComponent from "@/components/HeaderComponent";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Yan Zhabko",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
