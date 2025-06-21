
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Trophy, Users } from 'lucide-react';

const MatchScheduleSection = () => {
  const upcomingMatches = [
    {
      id: 1,
      homeTeam: { name: 'Lightning Bolts', logo: '⚡', skill: 'Intermediate' },
      awayTeam: { name: 'Fire Dragons', logo: '🔥', skill: 'Intermediate' },
      date: '2024-06-25',
      time: '18:00',
      location: 'Central Park Field A',
      status: 'confirmed'
    },
    {
      id: 2,
      homeTeam: { name: 'Eagle Warriors', logo: '🦅', skill: 'Advanced' },
      awayTeam: { name: 'Diamond Kings', logo: '💎', skill: 'Advanced' },
      date: '2024-06-26',
      time: '19:30',
      location: 'Riverside Stadium',
      status: 'pending'
    },
    {
      id: 3,
      homeTeam: { name: 'Rocket Stars', logo: '🚀', skill: 'Beginner' },
      awayTeam: { name: 'Trophy Hunters', logo: '🏆', skill: 'Beginner' },
      date: '2024-06-28',
      time: '17:00',
      location: 'North Field Complex',
      status: 'confirmed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-emerald-500/20 text-emerald-300 border-emerald-400';
      case 'pending': return 'bg-yellow-500/20 text-yellow-300 border-yellow-400';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-400';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Match Schedule
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Challenge teams, schedule epic battles, and prove your team's worth on the field
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white border-none py-6">
            <Calendar className="h-5 w-5 mr-2" />
            Schedule New Match
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 py-6">
            <Users className="h-5 w-5 mr-2" />
            Find Teams
          </Button>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 py-6">
            <Trophy className="h-5 w-5 mr-2" />
            Join Tournament
          </Button>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-6">Upcoming Matches</h3>
          {upcomingMatches.map((match) => (
            <Card key={match.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                  {/* Teams */}
                  <div className="flex items-center gap-8 flex-1">
                    <div className="text-center">
                      <div className="text-4xl mb-2">{match.homeTeam.logo}</div>
                      <div className="text-white font-semibold">{match.homeTeam.name}</div>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-400 text-xs">
                        {match.homeTeam.skill}
                      </Badge>
                    </div>
                    
                    <div className="text-white text-2xl font-bold">VS</div>
                    
                    <div className="text-center">
                      <div className="text-4xl mb-2">{match.awayTeam.logo}</div>
                      <div className="text-white font-semibold">{match.awayTeam.name}</div>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-400 text-xs">
                        {match.awayTeam.skill}
                      </Badge>
                    </div>
                  </div>

                  {/* Match Details */}
                  <div className="flex flex-col lg:flex-row gap-6 items-center">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-white/90">
                        <Calendar className="h-4 w-4" />
                        <span>{match.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/90">
                        <Clock className="h-4 w-4" />
                        <span>{match.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/90">
                        <MapPin className="h-4 w-4" />
                        <span>{match.location}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                      <Badge className={getStatusColor(match.status)}>
                        {match.status.charAt(0).toUpperCase() + match.status.slice(1)}
                      </Badge>
                      <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white border-none">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchScheduleSection;
