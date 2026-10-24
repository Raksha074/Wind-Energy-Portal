import React from 'react';
import { Activity, TrendingUp, AlertTriangle } from 'lucide-react';

export default function MetricCards({ metrics }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 border border-slate-700/60 p-5 rounded-xl shadow-lg">
                <div className="flex justify-between items-center text-slate-400 mb-2">
                    <span className="text-sm font-medium">Mean Absolute Error (MAE)</span>
                    <Activity className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white">{metrics.meanAbsoluteError} <span className="text-xs text-slate-400 font-normal">MW</span></div>
                <p className="text-xs text-slate-400 mt-2">Average magnitude of forecast errors</p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/60 p-5 rounded-xl shadow-lg">
                <div className="flex justify-between items-center text-slate-400 mb-2">
                    <span className="text-sm font-medium">Root Mean Square Error (RMSE)</span>
                    <TrendingUp className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="text-3xl font-bold text-white">{metrics.rootMeanSquareError} <span className="text-xs text-slate-400 font-normal">MW</span></div>
                <p className="text-xs text-slate-400 mt-2">Penalizes larger forecast deviations</p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/60 p-5 rounded-xl shadow-lg">
                <div className="flex justify-between items-center text-slate-400 mb-2">
                    <span className="text-sm font-medium">Forecast Bias</span>
                    <AlertTriangle className="w-5 h-5 text-amber-400" />
                </div>
                <div className="text-3xl font-bold text-white">{metrics.forecastBias} <span className="text-xs text-slate-400 font-normal">MW</span></div>
                <p className="text-xs text-slate-400 mt-2">Indicates systematic over/under forecasting</p>
            </div>
        </div>
    );
}