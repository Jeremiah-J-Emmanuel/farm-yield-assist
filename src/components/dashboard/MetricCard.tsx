import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  bgColor: string;
  textColor?: string;
  unit?: string;
}

export const MetricCard = ({ title, value, icon: Icon, bgColor, textColor = "text-foreground", unit }: MetricCardProps) => {
  return (
    <Card className={`${bgColor} border-0 shadow-sm`}>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-white/50">
            <Icon className="w-5 h-5 text-agri-green" />
          </div>
          <span className="text-sm font-medium text-muted-foreground">{title}</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className={`text-3xl font-bold ${textColor}`}>{value}</span>
          {unit && <span className="text-sm text-muted-foreground ml-1">{unit}</span>}
        </div>
      </CardContent>
    </Card>
  );
};