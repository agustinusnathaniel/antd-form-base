"use client";

import { Outfit } from "@next/font/google";
import { ConfigProvider, theme } from "antd";
import "lib/styles/globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
            token: { fontFamily: outfit.style.fontFamily },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
