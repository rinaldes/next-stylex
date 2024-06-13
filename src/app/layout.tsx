import type { Metadata } from "next";
import { ChildType } from "@/types";

export const metadata: Metadata = {
  title: "Rakit Hub",
  description: "Your hub to build a dream computer.",
};

const RootLayout = ({ children }: ChildType) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
