import React from 'react';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { SoilHealthCard } from '@/components/dashboard/SoilHealthCard';
import { YieldPredictionCard } from '@/components/dashboard/YieldPredictionCard';
import { AlertsCard } from '@/components/dashboard/AlertsCard';
import { SMSHistoryCard } from '@/components/dashboard/SMSHistoryCard';
import { Tractor, MessageSquare, TrendingUp, Activity, MapPin, Calendar, User } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-agri-green rounded-lg flex items-center justify-center">
              <Tractor className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-agri-green">AgriMonitor</h1>
              <p className="text-sm text-muted-foreground">Intelligent Farming Solutions</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Musanze District, Rwanda
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              March 15, 2024
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <User className="w-4 h-4" />
              Jean Baptiste Uwimana
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Farm Size"
            value="2.5"
            unit="ha"
            icon={Tractor}
            bgColor="bg-agri-green-bg"
            textColor="text-agri-green"
          />
          <MetricCard
            title="SMS Queries Today"
            value="3"
            icon={MessageSquare}
            bgColor="bg-agri-blue-bg"
            textColor="text-agri-blue"
          />
          <MetricCard
            title="Expected Yield Increase"
            value="+28%"
            icon={TrendingUp}
            bgColor="bg-agri-orange-bg"
            textColor="text-agri-orange"
          />
          <MetricCard
            title="My Soil Health Score"
            value="7.8/10"
            icon={Activity}
            bgColor="bg-agri-purple-bg"
            textColor="text-agri-purple"
          />
        </div>

        {/* Soil Health Snapshot */}
        <SoilHealthCard />

        {/* Yield Predictions Chart */}
        <YieldPredictionCard />

        {/* Alerts and SMS History */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AlertsCard />
          <SMSHistoryCard />
        </div>

        {/* Weather Forecast Placeholder */}
        <div className="bg-agri-blue-bg rounded-lg p-6 border-0 shadow-sm">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            ☁️ Weather Forecast - Musanze District
          </h2>
          <div className="grid grid-cols-7 gap-4 text-center">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={day} className="bg-white rounded-lg p-3">
                <p className="text-sm font-medium">{day}</p>
                <p className="text-2xl my-2">{index % 2 === 0 ? '⛅' : '🌧️'}</p>
                <p className="text-xs text-muted-foreground">
                  {22 + index}°/{15 + index}°
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;