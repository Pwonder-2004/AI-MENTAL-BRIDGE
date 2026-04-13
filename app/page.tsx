'use client';

import Image from 'next/image';
import { useUser, SignInButton, UserButton } from "@clerk/nextjs";
import { BrainCircuit, Loader2 } from "lucide-react";

export default function Home() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return <div className="min-h-screen bg-black flex items-center justify-center"><Loader2 className="animate-spin text-zinc-800" /></div>;

  return (
    <main className="min-h-screen bg-[#080808] p-4 md:p-8 font-sans antialiased text-zinc-400">
      <div className="relative min-h-[90vh] border border-zinc-800/50 rounded-[2.5rem] bg-[#0C0C0C] overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-purple-600/10 blur-[120px] pointer-events-none" />

        <nav className="relative z-20 flex justify-between items-center p-8 px-10">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={24} height={24} className="brightness-200" />
            <span className="text-white text-xl font-[900] tracking-tighter uppercase leading-none">AI-MENTALBRIDGE</span>
          </div>

          <div className="flex items-center gap-6">
            {!isSignedIn ? (
              <SignInButton mode="modal">
                <button className="bg-white text-black px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-tighter hover:scale-110 transition-all cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  • Get Started
                </button>
              </SignInButton>
            ) : (
              <div className="flex items-center gap-6">
                <a href="/dashboard" className="text-xs font-bold text-zinc-500 uppercase tracking-widest hover:text-white transition-colors">Workspace</a>
                <UserButton afterSignOutUrl="/" />
              </div>
            )}
          </div>
        </nav>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-10 lg:p-20">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="text-white text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Where Collaborative <br />
              <span className="text-zinc-500 italic">Note Making</span> Meets <br />
              Structural Clarity.
            </h1>
            <p className="text-zinc-500 text-lg lg:text-xl max-w-md leading-relaxed font-medium">
              From chaotic notes to structured intelligence. AI automatically maps semantic links to build graphs and flow charts.
            </p>
          </div>

          <div className="relative group">
            <div className="aspect-square lg:aspect-video rounded-[3rem] border border-zinc-800/80 bg-gradient-to-br from-zinc-900/40 to-black p-1 flex items-center justify-center shadow-2xl overflow-hidden">
               <div className="w-full h-full bg-[#111] rounded-[2.8rem] border border-zinc-800 flex flex-col items-center justify-center relative">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-500/20 blur-3xl animate-pulse" />
                    <BrainCircuit size={80} className="text-white relative z-10 opacity-80" />
                  </div>
                  <div className="mt-8 text-center px-12">
                    <h2 className="text-white text-2xl font-black tracking-tighter mb-4 uppercase leading-none">Your Digital Brain</h2>
                    <p className="text-zinc-600 text-sm leading-relaxed max-w-[250px]">
                      AI extracts entities and relationships to create a live semantic bridge.
                    </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}