import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sagemind AI — Business Plan for Gregg",
  robots: { index: false, follow: false, nocache: true },
};

export default function ForGreggLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
