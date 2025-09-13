import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MessageSquare, Send, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const SMSPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="w-10 h-10 bg-agri-green rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-agri-green">Farassist SMS System</h1>
              <p className="text-sm text-muted-foreground">Weekly Reports & Real-time Updates</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Smartphone className="w-3 h-3" />
              Feature Phone Compatible
            </Badge>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        {/* SMS Content Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Kinyarwanda SMS */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                🇷🇼 SMS mu Kinyarwanda
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Weekly report sent to farmers in local language
              </p>
            </CardHeader>
            <CardContent>
              <div className="bg-agri-green-bg p-4 rounded-lg border-l-4 border-agri-green">
                <div className="text-sm space-y-3">
                  <p className="font-medium">Mwaramutse Bwana Ishimwe,</p>
                  
                  <div className="space-y-2">
                    <p><strong>🫘 Ikawa</strong></p>
                    <p>Ubu musaruro: 1.2 t/ha</p>
                    <p>Impuzandengo y'icyumweru: 1.8 t/ha</p>
                    <p>Musaruro ushobora kugerwaho neza: 2.3 t/ha (+91.7%)</p>
                  </div>

                  <div className="space-y-2">
                    <p><strong>🌽 Ibigori</strong></p>
                    <p>Ubu musaruro: 2.0 t/ha</p>
                    <p>Impuzandengo y'icyumweru: 3.0 t/ha</p>
                    <p>Musaruro ushobora kugerwaho neza: 4.0 t/ha (+100%)</p>
                  </div>

                  <div className="space-y-2">
                    <p><strong>🥔 Ibirayi</strong></p>
                    <p>Ubu musaruro: 7.5 t/ha</p>
                    <p>Impuzandengo y'icyumweru: 9.8 t/ha</p>
                    <p>Musaruro ushobora kugerwaho neza: 12.0 t/ha (+60%)</p>
                  </div>

                  <div className="pt-2 border-t">
                    <p><strong>Ubutaka bwawe ubu buriho ibi:</strong></p>
                    <p>Amazi: 65%</p>
                    <p>pH: 6.8</p>
                    <p>Ubushyuhe: 24°C</p>
                    <p>Azote: 45 ppm</p>
                    <p>Fosifore: 32 ppm</p>
                    <p>Potasiyumu: 28 ppm</p>
                  </div>

                  <div className="space-y-2 pt-2 border-t">
                    <p><strong>👉 Inama ku ikawa</strong></p>
                    <p className="text-xs">Kugira ngo ikawa igere ku musaruro mwiza, ejo n'ejobundi uzashyire ifumbire ya NPK (nka NPK 17-17-17) cyangwa ifumbire y'amatungo, mu gitondo saa kumi n'ebyiri (6:00) no nimugoroba saa kumi n'ebyiri (18:00). Komeza kuvomera nk'uko bisanzwe, ntukongerere amazi.</p>
                  </div>

                  <div className="space-y-2">
                    <p><strong>👉 Inama ku birayi</strong></p>
                    <p className="text-xs">Komeza ukoresha ifumbire nk'uko usanzwe ubikora (NPK 17-17-17 irahagije). Ariko ubutaka burakakaye, ongeraho amazi: litiro 20 kuri buri metero kare.</p>
                  </div>

                  <div className="pt-2 border-t">
                    <p className="text-xs">📲 Niba ushaka kubona ubuhanuzi bw'umusaruro igihe icyo ari cyo cyose, andika <strong>PREDICT</strong> wohereze kuri iyi nimero. Niba ushaka kureba uko ubutaka buhagaze, andika <strong>PROPERTIES</strong> wohereze kuri iyi nimero.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* English SMS */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                🇬🇧 SMS in English
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Alternative format for English-speaking farmers
              </p>
            </CardHeader>
            <CardContent>
              <div className="bg-agri-blue-bg p-4 rounded-lg border-l-4 border-agri-blue">
                <div className="text-sm space-y-3">
                  <p className="font-medium">Good day Mr Ishimwe,</p>
                  <p>Your crop yield prediction based on your current soil conditions are:</p>
                  
                  <div className="space-y-2">
                    <p><strong>☕ Coffee</strong></p>
                    <p>Current Yield (today's soil properties): 1.2 t/ha</p>
                    <p>Predicted Yield (weekly average readings): 1.8 t/ha</p>
                    <p>Optimal Yield for coffee: 2.3 t/ha (+91.7%)</p>
                  </div>

                  <div className="space-y-2">
                    <p><strong>🌽 Maize</strong></p>
                    <p>Current Yield (today's soil properties): 2.0 t/ha</p>
                    <p>Predicted Yield (weekly average readings): 3.0 t/ha</p>
                    <p>Optimal Yield: 4.0 t/ha (+100%)</p>
                  </div>

                  <div className="space-y-2">
                    <p><strong>🥔 Irish Potatoes</strong></p>
                    <p>Current Yield (today's soil properties): 7.5 t/ha</p>
                    <p>Predicted Yield (weekly average readings): 9.8 t/ha</p>
                    <p>Optimal Yield: 12.0 t/ha (+60%)</p>
                  </div>

                  <div className="pt-2 border-t">
                    <p><strong>Current soil Properties:</strong></p>
                    <p>Soil Moisture: 65%</p>
                    <p>Soil pH: 6.8</p>
                    <p>Temperature: 24°C</p>
                    <p>Nitrogen: 45 ppm</p>
                    <p>Phosphorus: 32 ppm</p>
                    <p>Potassium: 28 ppm</p>
                  </div>

                  <div className="space-y-2 pt-2 border-t">
                    <p className="text-xs">"To achieve optimal coffee yield, apply additional Nitrogen, Phosphorus, and Potassium fertilizers tomorrow and the following day at 6:00 AM and 6:00 PM. Additional sources of Nitrogen, Phosphorus, and Potassium can come from cow or animal dung, or from NPK fertilizers such as NPK 17-17-17 (which is commonly available in Rwanda). Maintain your regular watering schedule — do not increase water beyond your usual amount."</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs">"To achieve optimal Irish potato yield, continue applying your usual amount of Nitrogen, Phosphorus, and Potassium fertilizers. Your current use of NPK 17-17-17 is enough— do not add more than your regular application. However, your soil is currently too dry — please add 20 liters of water per square meter of farmland to restore optimal moisture."</p>
                  </div>

                  <div className="pt-2 border-t">
                    <p className="text-xs">If you want to see the predictions at any time for the current crop yield, send <strong>PREDICT</strong> to this number, and if you want to see the current soil properties send <strong>PROPERTIES</strong> to this number at any time.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SMS Commands Information */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              📱 SMS Commands & Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-agri-green-bg p-4 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  PREDICT Command
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Get instant crop yield predictions
                </p>
                <Button className="w-full" variant="outline" size="sm">
                  Send: PREDICT coffee
                </Button>
              </div>
              
              <div className="bg-agri-blue-bg p-4 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  PROPERTIES Command
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Check current soil conditions
                </p>
                <Button className="w-full" variant="outline" size="sm">
                  Send: PROPERTIES
                </Button>
              </div>
              
              <div className="bg-agri-orange-bg p-4 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  Weekly Reports
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Automatic reports every Monday
                </p>
                <Badge className="w-full justify-center">
                  Automatic Delivery
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default SMSPage;