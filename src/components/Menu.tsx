
"use client";

import Link from "next/link";

interface MenuProps {
  className?: string;
}


export default function Menu({ className = "" }: MenuProps) {
  return (
    <nav className={`flex ${className} text-sm font-medium`}>
      <Link href="/" className="shine-hover hover:text-gray-700">Home</Link>
      <Link href="/about" className="shine-hover hover:text-gray-700">About</Link>
      <Link href="/projects" className="shine-hover hover:text-gray-700">Projects</Link>
      <Link href="/contact" className="shine-hover hover:text-gray-700">Contact</Link>
    </nav>
  )
}
