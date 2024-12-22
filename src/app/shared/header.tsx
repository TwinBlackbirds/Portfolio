'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white p-4 flex justify-between items-center">
      <span className="mr-8 font-extrabold text-xl"> TBB</span>
      <button
        className="block lg:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <nav className={`absolute top-14 right-0 w-full lg:static lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
        <Link onClick={() => setIsOpen(false)} href="/" className="transition hover:bg-neutral-900 bg-neutral-800 lg:rounded-md lg:shadow-lg block px-4 py-2 text-md">Home</Link>
        <Link onClick={() => setIsOpen(false)} href="/projects" className="transition hover:bg-neutral-900 bg-neutral-800 lg:rounded-md lg:shadow-lg block px-4 py-2 text-md">Projects</Link>
      </nav>
    </header>
  );
}