
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Upload, Users, Star } from 'lucide-react';

const TeamCreationSection = () => {
  const [teamName, setTeamName] = useState('');
  const [selectedLogo, setSelectedLogo] = useState(0);

  const logoOptions = ['🦅', '🔥', '⚡', '🏆', '🚀', '💎'];
  
  const previewTeam = {
    name: teamName || 'Your Team Name',
    logo: logoOptions[selectedLogo],
    members: ['You', 'Invite Friends...'],
    skill: 'Beginner',
    matches: 0,
    wins: 0,
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Create Your Team
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Build your squad, customize your identity, and start your journey to football glory
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Team Creation Form */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Team Setup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="text-white text-sm font-medium mb-2 block">Team Name</label>
                <Input
                  placeholder="Enter your team name"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                />
              </div>

              <div>
                <label className="text-white text-sm font-medium mb-3 block">Choose Logo</label>
                <div className="grid grid-cols-6 gap-3">
                  {logoOptions.map((logo, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedLogo(index)}
                      className={`text-2xl p-3 rounded-lg border-2 transition-all duration-200 hover:scale-110 ${
                        selectedLogo === index
                          ? 'border-emerald-400 bg-emerald-500/20'
                          : 'border-white/30 bg-white/10 hover:border-white/50'
                      }`}
                    >
                      {logo}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-white text-sm font-medium mb-2 block">Custom Logo Upload</label>
                <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Image
                </Button>
              </div>

              <Button className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white border-none text-lg py-3">
                Create Team
              </Button>
            </CardContent>
          </Card>

          {/* Team Preview */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Star className="h-5 w-5" />
                Team Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className="text-6xl mb-3">{previewTeam.logo}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{previewTeam.name}</h3>
                <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400">
                  {previewTeam.skill} Level
                </Badge>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="h-4 w-4 text-white" />
                    <span className="text-white font-medium">Team Members</span>
                  </div>
                  <div className="space-y-2">
                    {previewTeam.members.map((member, index) => (
                      <div key={index} className="text-white/80 text-sm">
                        {member}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-emerald-400">{previewTeam.matches}</div>
                    <div className="text-white/80 text-sm">Matches</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400">{previewTeam.wins}</div>
                    <div className="text-white/80 text-sm">Wins</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeamCreationSection;
