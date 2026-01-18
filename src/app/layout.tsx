/* eslint-disable @next/next/next-script-for-ga */
import { ThemeProvider } from "@material-tailwind/react";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin, SmoothScroll } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anjali's Portfolio",
  description:
    "Anjali Kumari portfolio showcasing secure web apps, AI tools for cybercrime detection, and cross-platform projects.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
     <body className={roboto.className}>
  <ThemeProvider>
    <Layout>
      <SmoothScroll />
      {children}
      <FixedPlugin />
    </Layout>
  </ThemeProvider>
</body>
    </html>
  );
}
