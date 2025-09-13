import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MessageCircle, Send, User } from 'lucide-react';

interface SMSMessage {
  id: string;
  sender: 'user' | 'system';
  message: string;
  timestamp: string;
  type?: 'predict' | 'properties' | 'weekly_report';
}

export const SMSHistoryCard = () => {
  const smsHistory: SMSMessage[] = [
    {
      id: '1',
      sender: 'user',
      message: 'PREDICT coffee',
      timestamp: '10:30 AM',
      type: 'predict'
    },
    {
      id: '2',
      sender: 'system',
      message: 'Coffee yield prediction: 1.8 tons/ha. Current conditions favorable. Apply potassium fertilizer for optimal results.',
      timestamp: '10:31 AM'
    },
    {
      id: '3',
      sender: 'user',
      message: 'SOIL STATUS',
      timestamp: '11:15 AM',
      type: 'properties'
    },
    {
      id: '4',
      sender: 'system',
      message: 'Current soil: Moisture 65%, pH 6.8, Temp 24°C, N 45ppm, P 32ppm, K 28ppm (low)',
      timestamp: '11:16 AM'
    }
  ];

  const getSenderStyle = (sender: string) => {
    return sender === 'user' 
      ? 'ml-auto bg-agri-blue text-white max-w-[70%]' 
      : 'mr-auto bg-agri-green-bg text-foreground max-w-[80%]';
  };

  const getSenderIcon = (sender: string) => {
    return sender === 'user' ? <User className="w-4 h-4" /> : <MessageCircle className="w-4 h-4" />;
  };

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          💬 My SMS History
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Your recent queries and Farassist responses
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3 max-h-80 overflow-y-auto">
          {smsHistory.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-lg p-3 ${getSenderStyle(msg.sender)}`}>
                <div className="flex items-center gap-2 mb-1">
                  {getSenderIcon(msg.sender)}
                  <span className="text-xs font-medium">
                    {msg.sender === 'user' ? 'Jean Baptiste' : 'Farassist'}
                  </span>
                  <span className="text-xs opacity-70">{msg.timestamp}</span>
                </div>
                <p className="text-sm leading-relaxed">{msg.message}</p>
                {msg.type && (
                  <Badge variant="secondary" className="mt-2 text-xs">
                    {msg.type.replace('_', ' ').toUpperCase()}
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t pt-4">
          <div className="bg-agri-blue-bg rounded-lg p-4 text-sm">
            <h4 className="font-semibold mb-2">SMS Commands:</h4>
            <div className="space-y-1 text-xs text-muted-foreground">
              <p>• Send <strong>PREDICT</strong> to get current crop yield predictions</p>
              <p>• Send <strong>PROPERTIES</strong> to get current soil status</p>
              <p>• Weekly reports sent automatically every Monday</p>
            </div>
          </div>
          <Button className="w-full mt-3" variant="outline">
            <Send className="w-4 h-4 mr-2" />
            Try: PREDICT coffee, SOIL STATUS
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};