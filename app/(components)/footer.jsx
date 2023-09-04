import Link from "next/link";
import { footerLinks, socialLinks } from "@/app/(lib)/constants";

export default function Footer() {
  return (
    <footer className="py-8 text-gray-600 border-t-gray-100">
      <div className="flex flex-wrap items-center justify-center space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-violet-600">
            Logo
          </div>
          <ul className="flex flex-wrap space-x-4 sm:space-x-8">
            {footerLinks.map((link, index) => (
              <li key={index} className="flex">
                <Link
                  rel="noopener noreferrer"
                  href={link.url}
                  className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex flex-wrap space-x-4 sm:space-x-8">
          {socialLinks.map((link, index) => (
            <li key={index} className="flex">
              <Link
                rel="noopener noreferrer"
                href={link.url}
                className="flex items-center -mb-1 border-b-2 border-transparent"
              >
                {link.image}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
