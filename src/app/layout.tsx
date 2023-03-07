import type { Metadata } from "next";
import "lib/styles/globals.css";

const APP_NAME = "antd-form-base";

export const metadata: Metadata = {
  title: APP_NAME,
  description: "Antd form example and reference",
  icons: "/favicon.ico",
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
