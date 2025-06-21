
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Trophy, Users, Calendar, BarChart3, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('teams');

  const navItems = [
    { id: 'teams', label: 'Teams', icon: Users },
    { id: 'matches', label: 'Matches', icon: Calendar },
    { id: 'leaderboard', label: 'Leaderboard', icon: BarChart3 },
    { id: 'chat', label: 'Chat', icon: MessageSquare },
  ];

  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-2 rounded-lg">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">TeamUp Football</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "default" : "ghost"}
                  className={`text-white hover:bg-white/20 ${
                    activeTab === item.id ? 'bg-white/20' : ''
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              );
            })}
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="text-white hover:bg-white/20">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white border-none">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
