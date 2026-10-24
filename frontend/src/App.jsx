import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import MetricCards from './components/MetricCards';
import WindChart from './components/WindChart';

export default function App() {
    const [windData, setWindData] = useState([]);
    const [metrics, setMetrics] = useState({ meanAbsoluteError: 0, rootMeanSquareError: 0, forecastBias: 0 });
    const [loading, setLoading] = useState(true);

    const API_BASE_URL = "https://wind-energy-portal.onrender.com";

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const dataRes = await axios.get(`${API_BASE_URL}/api/wind-data`);
            const metricsRes = await axios.get(`${API_BASE_URL}/api/metrics`);

            setWindData(dataRes.data.data || []);
            setMetrics(metricsRes.data || {});
            setLoading(false);
        } catch (err) {
            console.error("Error fetching data:", err);
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 p-6">
            <Header />
            <main className="max-w-7xl mx-auto space-y-6">
                <MetricCards metrics={metrics} />
                <WindChart windData={windData} loading={loading} />
            </main>
        </div>
    );
}