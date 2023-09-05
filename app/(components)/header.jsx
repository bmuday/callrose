"use client";
import Link from "next/link";
import { headerLinks } from "@/app/(lib)/constants";
import { Search } from "lucide-react";
import Avatar from "./avatar";
import { useUserStore } from "@/app/(stores)";

export default function Header() {
  const user = useUserStore((state) => state.user);
  return (
    <header className="py-8 text-gray-600 border-t-gray-100">
      <div className="flex flex-wrap items-center justify-center w-full space-y-4 sm:justify-between sm:space-y-0">
        <Link
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          Logo
        </Link>
        <div className="flex items-center border md:space-x-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                title="Search"
                className="p-1 focus:outline-none focus:ring"
              >
                <Search />
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className="w-32 py-2 pl-10 text-sm text-gray-800 bg-gray-100 rounded-md sm:w-auto focus:outline-none focus:bg-gray-50"
            />
          </div>
        </div>
        <div className="flex">
          {headerLinks?.map((link) => (
            <Link href={link.url}>{link.label}</Link>
          ))}
        </div>
        {user && <Avatar />}
        <Avatar />
      </div>
    </header>
  );
}
