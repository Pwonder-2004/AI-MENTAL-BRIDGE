'use client';
import { UserButton, useUser } from "@clerk/nextjs";
import { BrainCircuit, Send, Sparkles, Plus, LayoutDashboard, History, Settings } from "lucide-react";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div className="flex h-screen bg-black text-zinc-400 font-sans">
      {/* Sidebar - Sleek & Modern */}
      <aside className="w-64 border-r border-zinc-900 bg-zinc-950/50 p-6 flex flex-col gap-8">
        <div className="font-bold text-white text-xl flex items-center gap-2 tracking-tighter">
          <div className="bg-zinc-100 p-1.5 rounded-lg">
            <BrainCircuit size={20} className="text-black" />
          </div>
          AI-BRIDGE
        </div>
        
        <button className="flex items-center justify-center gap-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-950 p-2.5 rounded-xl font-bold text-sm transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          <Plus size={18} /> New Mental Bridge
        </button>

        <nav className="flex flex-col gap-1 text-sm font-medium">
          <div className="flex items-center gap-3 p-2.5 bg-zinc-900 text-zinc-100 rounded-lg cursor-pointer">
            <LayoutDashboard size={18} /> Overview
          </div>
          <div className="flex items-center gap-3 p-2.5 hover:bg-zinc-900 hover:text-zinc-200 rounded-lg cursor-pointer transition-colors">
            <History size={18} /> Past Nodes
          </div>
          <div className="flex items-center gap-3 p-2.5 hover:bg-zinc-900 hover:text-zinc-200 rounded-lg cursor-pointer transition-colors">
            <Settings size={18} /> Settings
          </div>
        </nav>

        <div className="mt-auto border-t border-zinc-900 pt-4 flex items-center gap-3">
          <UserButton afterSignOutUrl="/" />
          <div className="text-xs">
            <p className="text-zinc-200 font-semibold truncate w-32">{user?.fullName || "Study Mode"}</p>
            <p className="text-zinc-500">Free Tier</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-900/20 via-black to-black">
        <header className="h-16 border-b border-zinc-900 flex justify-between items-center px-8 bg-black/40 backdrop-blur-md">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-zinc-500">Workspace / Active Bridge</h2>
          <div className="flex items-center gap-4">
             <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
             <span className="text-xs font-mono text-zinc-500 text-emerald-500/80">AI ENGINE ONLINE</span>
          </div>
        </header>

        <div className="flex-1 flex p-8 gap-8 overflow-hidden">
          {/* AI-Input Area */}
          <div className="flex-1 flex flex-col gap-4">
             <div className="flex-1 bg-zinc-900/30 rounded-2xl border border-zinc-800/50 p-6 focus-within:border-zinc-700 transition-all flex flex-col group shadow-2xl">
                <textarea 
                  placeholder="Paste your chaotic notes here. Let the AI map the connections..."
                  className="w-full h-full bg-transparent outline-none resize-none text-zinc-200 placeholder:text-zinc-700 text-lg leading-relaxed"
                />
                <div className="flex justify-between items-center pt-4 border-t border-zinc-800/50">
                   <p className="text-xs text-zinc-600 italic">Pro-tip: Use "{"->"}" for manual connections.</p>
                   <button className="bg-white text-black px-6 py-2.5 rounded-xl text-sm font-black flex items-center gap-2 hover:scale-105 active:scale-95 transition-all">
                    <Sparkles size={16} /> BUILD GRAPH
                  </button>
                </div>
             </div>
          </div>

          {/* Visualization Placeholder */}
          <div className="w-1/3 flex flex-col gap-4">
             <div className="flex-1 bg-zinc-950 rounded-2xl border border-dashed border-zinc-800 flex flex-col items-center justify-center text-center p-8 group">
                <div className="h-20 w-20 bg-zinc-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                   <BrainCircuit size={32} className="text-zinc-700" />
                </div>
                <h3 className="text-zinc-300 font-bold mb-2">No Connections Yet</h3>
                <p className="text-zinc-600 text-xs leading-relaxed">
                   Enter your notes and click Build Graph to see the semantic mapping of your knowledge.
                </p>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}