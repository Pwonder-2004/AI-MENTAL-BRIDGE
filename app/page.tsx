// @ts-nocheck
'use client';

import Image from 'next/image';
import { useUser, SignInButton, UserButton } from "@clerk/nextjs";
import { BrainCircuit, Loader2, ArrowRight } from "lucide-react";
import Link from 'next/link';

const FeatureCard = () => (
  <div className="w-full h-full bg-[#111] rounded-[2rem] md:rounded-[2.8rem] border border-zinc-800 flex flex-col items-center justify-center relative hover:border-purple-500/50 transition-all duration-500 group py-10 md:py-0">
    <div className="relative">
      <div className="absolute inset-0 bg-purple-500/20 blur-3xl group-hover:bg-purple-500/40 transition-all" />
      <BrainCircuit size={60} className="text-white relative z-10 opacity-80 group-hover:scale-110 transition-transform md:w-[80px] md:h-[80px]" />
    </div>
    <div className="mt-6 md:mt-8 text-center px-6 md:px-12">
      <h2 className="text-white text-xl md:text-2xl font-black tracking-tighter mb-2 md:mb-4 uppercase leading-none">Your Digital Brain</h2>
      <p className="text-zinc-600 text-xs md:text-sm leading-relaxed max-w-[200px] md:max-w-[250px] group-hover:text-zinc-400 mx-auto">
        AI extracts entities and relationships to create a live semantic bridge.
      </p>
    </div>
    <div className="mt-4 md:mt-6 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-purple-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">
      Launch Workspace <ArrowRight size={12} />
    </div>
  </div>
);

export default function Home() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="animate-spin text-zinc-800" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#080808] p-2 md:p-8 font-sans antialiased text-zinc-400">
      <div className="relative min-h-[95vh] md:min-h-[90vh] border border-zinc-800/50 rounded-[1.5rem] md:rounded-[2.5rem] bg-[#0C0C0C] overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-purple-600/10 blur-[120px] pointer-events-none" />

        {/* Responsive Navbar */}
        <nav className="relative z-20 flex justify-between items-center p-6 md:p-8 md:px-10">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={20} height={20} className="brightness-200 md:w-[24px] md:h-[24px]" priority />
            <span className="text-white text-lg md:text-xl font-[900] tracking-tighter uppercase leading-none italic">AI-MENTALBRIDGE</span>
          </div>

          <div className="flex items-center">
            {!isSignedIn ? (
              <SignInButton mode="modal">
                <button className="bg-white text-black px-5 md:px-8 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-tighter hover:scale-110 transition-all cursor-pointer">
                  • Get Started
                </button>
              </SignInButton>
            ) : (
              <div className="flex items-center gap-4 md:gap-6">
                <Link href="/dashboard" className="hidden sm:block text-[10px] md:text-xs font-bold text-zinc-500 uppercase tracking-widest hover:text-white">Workspace</Link>
                <UserButton afterSignOutUrl="/" />
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section - Fixed Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 p-6 md:p-20">
          <div className="flex flex-col justify-center gap-6 md:gap-8 text-center lg:text-left">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Where Collaborative <br className="hidden md:block" />
              <span className="text-zinc-500 italic">Note Making</span> Meets <br className="hidden md:block" />
              Structural Clarity.
            </h1>
            <p className="text-zinc-500 text-sm md:text-lg lg:text-xl max-w-md leading-relaxed font-medium mx-auto lg:mx-0">
              From chaotic notes to structured intelligence. AI automatically maps semantic links to build graphs and flow charts.
            </p>
          </div>

          {/* Feature Card Scaling */}
          <div className="relative cursor-pointer max-w-[500px] mx-auto w-full">
            {!isSignedIn ? (
              <SignInButton mode="modal">
                <div className="aspect-square sm:aspect-video lg:aspect-video rounded-[2rem] md:rounded-[3rem] border border-zinc-800/80 bg-gradient-to-br from-zinc-900/40 to-black p-1 shadow-2xl overflow-hidden">
                  <FeatureCard />
                </div>
              </SignInButton>
            ) : (
              <Link href="/dashboard">
                <div className="aspect-square sm:aspect-video lg:aspect-video rounded-[2rem] md:rounded-[3rem] border border-zinc-800/80 bg-gradient-to-br from-zinc-900/40 to-black p-1 shadow-2xl overflow-hidden">
                  <FeatureCard />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}