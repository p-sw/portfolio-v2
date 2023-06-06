// noinspection HtmlRequiredTitleElement,JSUnusedGlobalSymbols

import Provider from "@/app/providers";
import React from "react";
import Navigation from "@/app/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSerVe's Workshop",
  description: "Workshop of a full-stack web developer - SSerVe.",
  manifest: "/site.webmanifest",
  icons: {
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        sizes: "32x32",
        url: "/favicon-32x32.png",
        type: "image/png",
      },
      {
        rel: "icon",
        sizes: "16x16",
        url: "/favicon-16x16.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Navigation />
          {children}
        </Provider>
      </body>
    </html>
  );
}
