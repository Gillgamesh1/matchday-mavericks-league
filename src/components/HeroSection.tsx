
import { Button } from '@/components/ui/button';
import { Users, Trophy, Calendar, Target } from 'lucide-react';

const HeroSection = () => {
  const features = [
    { icon: Users, title: 'Create Teams', description: 'Form squads with friends' },
    { icon: Trophy, title: 'Compete', description: 'Challenge other teams' },
    { icon: Calendar, title: 'Schedule', description: 'Organize matches' },
    { icon: Target, title: 'Climb Ranks', description: 'Rise in leaderboards' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 float-animation">
          <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-4 rounded-full inline-block pulse-glow">
            <Trophy className="h-16 w-16 text-white" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
          Build Your Dream Football Team
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Create custom teams with friends, schedule epic matches, and climb the leaderboards. 
          The ultimate platform for organized football competition.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white text-lg px-8 py-4 rounded-xl border-none shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            Create Your Team
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4 rounded-xl backdrop-blur-sm"
          >
            Explore Teams
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-3 rounded-lg inline-block mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
