
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Users, Trophy, Calendar } from 'lucide-react';
import TeamCreationSection from '@/components/TeamCreationSection';

const Teams = () => {
  const [showCreateTeam, setShowCreateTeam] = useState(false);

  const userTeams = [
    {
      id: 1,
      name: 'Lightning Bolts',
      logo: '⚡',
      role: 'Captain',
      members: 8,
      matches: 12,
      wins: 9,
      skill: 'Intermediate'
    }
  ];

  const availableTeams = [
    {
      id: 2,
      name: 'Fire Dragons',
      logo: '🔥',
      members: 6,
      maxMembers: 11,
      skill: 'Advanced',
      lookingFor: 'Defender, Midfielder'
    },
    {
      id: 3,
      name: 'Eagle Warriors',
      logo: '🦅',
      members: 9,
      maxMembers: 11,
      skill: 'Beginner',
      lookingFor: 'Goalkeeper, Forward'
    }
  ];

  if (showCreateTeam) {
    return <TeamCreationSection />;
  }

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">My Teams</h1>
            <p className="text-white/80">Manage your teams and join new ones</p>
          </div>
          <Button
            onClick={() => setShowCreateTeam(true)}
            className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white border-none"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Team
          </Button>
        </div>

        {/* User's Teams */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Your Teams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userTeams.map((team) => (
              <Card key={team.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{team.logo}</div>
                      <div>
                        <CardTitle className="text-white">{team.name}</CardTitle>
                        <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400">
                          {team.role}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-white/80">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{team.members} Members</span>
                      </div>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-400">
                        {team.skill}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-emerald-400">{team.matches}</div>
                        <div className="text-white/60 text-sm">Matches</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-400">{team.wins}</div>
                        <div className="text-white/60 text-sm">Wins</div>
                      </div>
                    </div>

                    <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30">
                      Manage Team
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Available Teams to Join */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Teams Looking for Players</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableTeams.map((team) => (
              <Card key={team.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{team.logo}</div>
                    <div>
                      <CardTitle className="text-white">{team.name}</CardTitle>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-400">
                        {team.skill}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-white/80">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{team.members}/{team.maxMembers} Members</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-white/80 text-sm mb-1">Looking for:</div>
                      <div className="text-emerald-400 text-sm font-medium">{team.lookingFor}</div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white border-none">
                      Join Team
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
