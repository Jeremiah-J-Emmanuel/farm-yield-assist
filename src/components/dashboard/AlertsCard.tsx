import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';

interface FarmAlert {
  id: string;
  type: 'critical' | 'warning' | 'info';
  crop: string;
  message: string;
  recommendation: string;
  timestamp: string;
  icon: string;
}

export const AlertsCard = () => {
  const alerts: FarmAlert[] = [
    {
      id: '1',
      type: 'critical',
      crop: 'Irish Potatoes',
      icon: '🥔',
      message: 'Soil potassium levels are critically low',
      recommendation: 'Apply additional Nitrogen, Phosphorus, and Potassium fertilizers tomorrow and the following day at 6:00 AM and 6:00 PM. Additional sources of Nitrogen, Phosphorus, and Potassium can come from cow or animal dung, or from NPK fertilizers such as NPK 17-17-17.',
      timestamp: '2 hours ago'
    },
    {
      id: '2',
      type: 'warning',
      crop: 'Coffee',
      icon: '☕',
      message: 'Nitrogen levels dropping - consider supplementation',
      recommendation: 'Your soil is currently too dry — please add 20 liters of water per square meter of farmland to restore optimal moisture. Continue applying your usual amount of NPK fertilizers.',
      timestamp: '4 hours ago'
    },
    {
      id: '3',
      type: 'info',
      crop: 'Maize',
      icon: '🌽',
      message: 'Optimal moisture levels maintained',
      recommendation: 'Continue current watering schedule. Your soil conditions are optimal for maize growth.',
      timestamp: '6 hours ago'
    }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'critical': return <AlertTriangle className="w-4 h-4 text-agri-red" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-agri-warning" />;
      case 'info': return <CheckCircle className="w-4 h-4 text-agri-success" />;
      default: return <AlertTriangle className="w-4 h-4" />;
    }
  };

  const getAlertStyle = (type: string) => {
    switch (type) {
      case 'critical': return 'border-l-4 border-agri-red bg-red-50';
      case 'warning': return 'border-l-4 border-agri-warning bg-yellow-50';
      case 'info': return 'border-l-4 border-agri-success bg-green-50';
      default: return 'border-l-4 border-muted';
    }
  };

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          🚨 My Farm Alerts
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => (
          <Alert key={alert.id} className={`${getAlertStyle(alert.type)} p-4`}>
            <div className="flex items-start gap-3">
              <div className="flex items-center gap-2">
                {getAlertIcon(alert.type)}
                <span className="text-lg">{alert.icon}</span>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-sm">{alert.crop}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {alert.timestamp}
                  </div>
                </div>
                <AlertDescription className="text-sm font-medium">
                  {alert.message}
                </AlertDescription>
                <AlertDescription className="text-xs text-muted-foreground leading-relaxed">
                  {alert.recommendation}
                </AlertDescription>
              </div>
            </div>
          </Alert>
        ))}
      </CardContent>
    </Card>
  );
};