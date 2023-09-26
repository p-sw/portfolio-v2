import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSerVe's Blog",
  description: "Blog of a full-stack web developer - SSerVe.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
