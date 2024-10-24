import type { Metadata } from "next";
import { CssBaseline } from "@mui/material";

import "./globals.css";

export const metadata: Metadata = {
  title: "奥野研オフィシャルサイト",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        style={{
          height: "100%",
        }}
      >
        <CssBaseline>
          {children}
        </CssBaseline>
      </body>
    </html>
  );
}
