"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuProps {
  className?: string;
}

export default function Menu({ className = "" }: MenuProps) {
  const pathname = usePathname(); 

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`flex ${className} text-sm font-medium`}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`shine-hover hover:text-gray-700 text-sm xl:text-base ${
            pathname === link.href ? "text-gray-900" : "text-gray-600"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
