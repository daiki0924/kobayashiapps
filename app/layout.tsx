import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kobayashi Apps",
  description: "個人開発紹介サイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
