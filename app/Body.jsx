"use client";
import { usePathname } from "next/navigation";
import { useDarkStore } from "@/app/(stores)";
import { leftBarLinks } from "@/app/(lib)/constants";
import Header from "./(components)/header";
import Footer from "./(components)/footer";
import classnames from "classnames";

export default function Body({ children }) {
  const dark = useDarkStore((state) => state.dark);

  return (
    <body className="container w-full h-full">
      <Header />
      {children}
      <Footer />
    </body>
  );
}
