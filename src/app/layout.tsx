import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Next + StyleX",
  description: "Starter project for Next.js + StyleX",
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Readonly<Props>) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
