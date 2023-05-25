import Provider from '@/app/providers'
import React from "react";
import Navigation from "@/app/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
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
  )
}
