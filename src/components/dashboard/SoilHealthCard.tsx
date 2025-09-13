import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Droplets, Zap, Thermometer } from 'lucide-react';

interface SoilMetric {
  label: string;
  value: number;
  unit: string;
  icon: React.ReactNode;
  maxValue: number;
  status: 'good' | 'warning' | 'critical';
}

export const SoilHealthCard = () => {
  const soilMetrics: SoilMetric[] = [
    {
      label: 'Soil Moisture',
      value: 65,
      unit: '%',
      icon: <Droplets className="w-4 h-4 text-agri-blue" />,
      maxValue: 100,
      status: 'good'
    },
    {
      label: 'pH Level',
      value: 6.8,
      unit: 'pH',
      icon: <Zap className="w-4 h-4 text-agri-purple" />,
      maxValue: 14,
      status: 'good'
    },
    {
      label: 'Temperature',
      value: 24,
      unit: '°C',
      icon: <Thermometer className="w-4 h-4 text-agri-red" />,
      maxValue: 40,
      status: 'good'
    }
  ];

  const nutrientMetrics = [
    {
      label: 'Nitrogen (N)',
      value: 45,
      unit: 'ppm',
      maxValue: 100,
      status: 'warning' as const,
      color: 'bg-agri-orange'
    },
    {
      label: 'Phosphorus (P)',
      value: 32,
      unit: 'ppm',
      maxValue: 100,
      status: 'good' as const,
      color: 'bg-agri-green'
    },
    {
      label: 'Potassium (K)',
      value: 28,
      unit: 'ppm',
      maxValue: 100,
      status: 'critical' as const,
      color: 'bg-agri-red'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-agri-success';
      case 'warning': return 'text-agri-warning';
      case 'critical': return 'text-agri-error';
      default: return 'text-muted-foreground';
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case 'good': return 'bg-agri-green';
      case 'warning': return 'bg-agri-orange';
      case 'critical': return 'bg-agri-red';
      default: return 'bg-muted';
    }
  };

  return (
    <Card className="bg-agri-green-bg border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          🌱 My Soil Health Snapshot
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Environmental Metrics */}
        <div className="grid grid-cols-3 gap-4">
          {soilMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                {metric.icon}
                <span className="text-sm font-medium text-muted-foreground">{metric.label}</span>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-2xl font-bold">{metric.value}</span>
                <span className="text-sm text-muted-foreground">{metric.unit}</span>
                <div className={`ml-2 w-3 h-3 rounded-full ${getProgressColor(metric.status)}`} />
              </div>
              <Progress 
                value={(metric.value / metric.maxValue) * 100} 
                className="h-2" 
              />
            </div>
          ))}
        </div>

        {/* Nutrient Metrics */}
        <div className="grid grid-cols-3 gap-4">
          {nutrientMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-6 h-6 rounded-full ${metric.color} flex items-center justify-center text-white text-xs font-bold`}>
                  {metric.label.charAt(0)}
                </div>
                <span className="text-sm font-medium text-muted-foreground">{metric.label}</span>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-2xl font-bold">{metric.value}</span>
                <span className="text-sm text-muted-foreground">{metric.unit}</span>
                {metric.status === 'warning' && <span className="text-agri-warning text-xs ml-1">⚠️</span>}
                {metric.status === 'critical' && <span className="text-agri-error text-xs ml-1">🔴</span>}
                {metric.status === 'good' && <span className="text-agri-success text-xs ml-1">✅</span>}
              </div>
              <Progress 
                value={(metric.value / metric.maxValue) * 100} 
                className="h-2" 
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};