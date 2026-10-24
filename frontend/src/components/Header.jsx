import React from 'react';

export default function Header() {
    return (
        <header className="max-w-7xl mx-auto mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border-b border-slate-800 pb-5">
            <div className="flex items-center gap-3">
                <img 
                    src="/favicon.svg" 
                    alt="Gridbricks Wind Logo" 
                    className="w-10 h-10 rounded-xl shadow-md shadow-cyan-500/10 border border-cyan-500/30 hover:scale-105 transition-transform" 
                />
                <div>
                    <h1 className="text-2xl font-bold text-cyan-400 tracking-tight">
                        Gridbricks UK Wind Energy Portal
                    </h1>
                    <p className="text-sm text-slate-400">Day-Ahead Market Forecasting & Error Evaluation (January 2026)</p>
                </div>
            </div>
            <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs px-3 py-1 rounded-full font-medium">
                    System Online
                </span>
            </div>
        </header>
    );
}