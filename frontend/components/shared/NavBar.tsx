'use client';

import MagicButton from '../MagicButton';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-black-200/50 border-black-300 fixed inset-x-0 top-0 z-[5000] flex w-full items-center justify-between rounded-none border-b px-10 py-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-md">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-purple font-mono text-2xl font-bold tracking-widest">
            GameBrew
          </h1>
        </Link>
      </div>

      {/* Center Navigation Links */}
      <div className="hidden items-center space-x-8 md:flex">
        <Link
          href="#games"
          className="font-medium text-gray-300 transition-colors hover:text-white">
          Games
        </Link>
        <Link
          href="#features"
          className="font-medium text-gray-300 transition-colors hover:text-white">
          Features
        </Link>
        <Link
          href="#how-it-works"
          className="font-medium text-gray-300 transition-colors hover:text-white">
          How It Works
        </Link>
        <Link
          href="#stats"
          className="font-medium text-gray-300 transition-colors hover:text-white">
          Stats
        </Link>
      </div>

      {/* Right Side - Auth Buttons */}
      <div className="flex items-center space-x-4">
        <Link
          href="/auth/login"
          className="font-medium text-gray-300 transition-colors hover:text-white">
          Login
        </Link>
        <Link href="/auth/register">
          <MagicButton title="Get Started" icon={null} position="right" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-gray-300 hover:text-white">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
