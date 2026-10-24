import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

export default function WindChart({ windData, loading }) {
    return (
        <div className="bg-slate-800/50 border border-slate-700/60 p-6 rounded-xl shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-slate-200">Actual Wind Generation vs. Latest Forecast (January 2026)</h2>
            {loading ? (
                <div className="h-96 flex items-center justify-center text-slate-400">Loading analysis data...</div>
            ) : (
                <div className="h-96 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={windData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                            <XAxis dataKey="startTime" stroke="#94a3b8" tickFormatter={(time) => time.slice(5, 10)} />
                            <YAxis stroke="#94a3b8" />
                            <Tooltip contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: '#fff' }} />
                            <Legend />
                            <Line type="monotone" dataKey="actualGeneration" name="Actual Wind (MW)" stroke="#38bdf8" strokeWidth={2} dot={false} />
                            <Line type="monotone" dataKey="forecastedGeneration" name="Forecasted Wind (MW)" stroke="#818cf8" strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            )}
        </div>
    );
}