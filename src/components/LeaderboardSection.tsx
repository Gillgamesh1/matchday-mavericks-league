
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, Award, TrendingUp } from 'lucide-react';

const LeaderboardSection = () => {
  const teams = [
    { rank: 1, name: 'Lightning Bolts', logo: '⚡', points: 2850, wins: 28, losses: 2, draws: 5, winRate: 93 },
    { rank: 2, name: 'Fire Dragons', logo: '🔥', points: 2720, wins: 25, losses: 4, draws: 6, winRate: 86 },
    { rank: 3, name: 'Eagle Warriors', logo: '🦅', points: 2680, wins: 24, losses: 5, draws: 6, winRate: 83 },
    { rank: 4, name: 'Diamond Kings', logo: '💎', points: 2540, wins: 22, losses: 7, draws: 6, winRate: 77 },
    { rank: 5, name: 'Rocket Stars', logo: '🚀', points: 2420, wins: 20, losses: 8, draws: 7, winRate: 71 },
    { rank: 6, name: 'Trophy Hunters', logo: '🏆', points: 2350, wins: 19, losses: 9, draws: 7, winRate: 69 },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="h-6 w-6 text-yellow-400" />;
      case 2: return <Medal className="h-6 w-6 text-gray-300" />;
      case 3: return <Award className="h-6 w-6 text-amber-600" />;
      default: return <span className="text-white font-bold text-lg">#{rank}</span>;
    }
  };

  const getRankBg = (rank: number) => {
    switch (rank) {
      case 1: return 'bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-yellow-400/30';
      case 2: return 'bg-gradient-to-r from-gray-400/20 to-slate-400/20 border-gray-400/30';
      case 3: return 'bg-gradient-to-r from-amber-600/20 to-orange-500/20 border-amber-500/30';
      default: return 'bg-white/10 border-white/20';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Leaderboard
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            See where your team ranks among the best. Climb the ladder and claim your spot at the top!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
            <CardContent className="p-6">
              <TrendingUp className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">156</div>
              <div className="text-white/80">Active Teams</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
            <CardContent className="p-6">
              <Trophy className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">342</div>
              <div className="text-white/80">Matches Played</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
            <CardContent className="p-6">
              <Award className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">23</div>
              <div className="text-white/80">Tournaments</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white text-center text-2xl">Top Teams</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teams.map((team) => (
                <div
                  key={team.rank}
                  className={`rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${getRankBg(team.rank)}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center justify-center w-12 h-12">
                        {getRankIcon(team.rank)}
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{team.logo}</div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{team.name}</h3>
                          <div className="text-white/80 text-sm">
                            {team.wins}W - {team.losses}L - {team.draws}D
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-400">{team.points}</div>
                        <div className="text-white/80 text-sm">Points</div>
                      </div>
                      
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-400">
                        {team.winRate}% Win Rate
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeaderboardSection;
