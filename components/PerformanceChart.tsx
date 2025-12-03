import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { Product } from '../types';

interface PerformanceChartProps {
  data: Product['performance'];
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ data }) => {
  return (
    <div className="w-full h-[300px] bg-vortex-800/50 rounded-xl p-4 border border-white/5">
      <h4 className="text-center text-gray-400 text-sm font-semibold tracking-wider mb-2 uppercase">Performance Stats</h4>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#374151" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Vortex"
            dataKey="A"
            stroke="#06b6d4"
            strokeWidth={2}
            fill="#06b6d4"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
