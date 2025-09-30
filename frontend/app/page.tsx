'use client';

import Hero from '@/components/Hero';
import NavBar from '@/components/shared/NavBar';

export default function Home() {
  return (
    <main className="bg-black-100 relative mx-auto flex flex-col items-center justify-center overflow-hidden px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <NavBar />
        <Hero />
      </div>
    </main>
  );
}
