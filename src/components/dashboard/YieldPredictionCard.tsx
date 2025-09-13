import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Legend, Tooltip } from 'recharts';

interface CropYield {
  crop: string;
  icon: string;
  current: number;
  predicted: number;
  optimal: number;
  improvement: number;
}

export const YieldPredictionCard = () => {
  const yieldData: CropYield[] = [
    {
      crop: 'Coffee',
      icon: '☕',
      current: 1.2,
      predicted: 1.8,
      optimal: 2.3,
      improvement: 91.7
    },
    {
      crop: 'Maize',
      icon: '🌽',
      current: 2.0,
      predicted: 3.0,
      optimal: 4.0,
      improvement: 100.0
    },
    {
      crop: 'Irish Potatoes',
      icon: '🥔',
      current: 7.5,
      predicted: 9.8,
      optimal: 12.0,
      improvement: 60.0
    }
  ];

  const chartData = yieldData.map(crop => ({
    name: crop.crop,
    Current: crop.current,
    Predicted: crop.predicted,
    Optimal: crop.optimal
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Chart */}
      <Card className="bg-agri-green-bg border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            📊 Yield Comparison (tons/ha)
          </CardTitle>
          <p className="text-sm text-muted-foreground">Current vs Predicted vs Improved Conditions</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                formatter={(value, name) => [`${value} t/ha`, name]}
                labelFormatter={(label) => `Crop: ${label}`}
              />
              <Legend />
              <Bar dataKey="Current" fill="hsl(var(--agri-yellow))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Predicted" fill="hsl(var(--agri-purple))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Optimal" fill="hsl(var(--agri-green))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Improvement Potential */}
      <Card className="bg-white border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Yield Improvement Potential</CardTitle>
          <p className="text-sm text-muted-foreground">Percentage increase with optimal conditions</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {yieldData.map((crop, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-agri-green-bg rounded-lg">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{crop.icon}</span>
                <div>
                  <p className="font-semibold">{crop.crop}</p>
                  <p className="text-sm text-muted-foreground">
                    {crop.current} → {crop.optimal} tons/ha
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-agri-green">+{crop.improvement}%</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};