
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Trophy, Users, Calendar, BarChart3, MessageSquare, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const navItems = [
    { id: 'teams', label: 'Teams', icon: Users, path: '/teams' },
    { id: 'matches', label: 'Matches', icon: Calendar, path: '/matches' },
    { id: 'leaderboard', label: 'Leaderboard', icon: BarChart3, path: '/leaderboard' },
    { id: 'chat', label: 'Chat', icon: MessageSquare, path: '/chat' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-2 rounded-lg">
              <Trophy className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">TeamUp Football</span>
          </Link>
          
          {user && (
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Button
                    key={item.id}
                    variant={isActive ? "default" : "ghost"}
                    className={`text-white hover:bg-white/20 ${
                      isActive ? 'bg-white/20' : ''
                    }`}
                    asChild
                  >
                    <Link to={item.path}>
                      <Icon className="h-4 w-4 mr-2" />
                      {item.label}
                    </Link>
                  </Button>
                );
              })}
            </div>
          )}

          <div className="flex items-center space-x-3">
            {user ? (
              <>
                <span className="text-white/80 hidden sm:block">Welcome, {user.name}</span>
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-white/20"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" className="text-white hover:bg-white/20" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white border-none" asChild>
                  <Link to="/register">Sign Up</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
