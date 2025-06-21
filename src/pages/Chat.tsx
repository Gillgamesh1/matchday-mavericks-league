
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Send, Users, Hash } from 'lucide-react';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [selectedChannel, setSelectedChannel] = useState('general');

  const channels = [
    { id: 'general', name: 'General', team: 'Lightning Bolts', unread: 3 },
    { id: 'strategy', name: 'Strategy', team: 'Lightning Bolts', unread: 0 },
    { id: 'matches', name: 'Match Planning', team: 'Lightning Bolts', unread: 1 },
  ];

  const messages = [
    { id: 1, user: 'Alex', message: 'Ready for the match tomorrow?', time: '10:30 AM', avatar: '👤' },
    { id: 2, user: 'Sarah', message: 'Yes! I\'ve been practicing my shots all week', time: '10:32 AM', avatar: '👩' },
    { id: 3, user: 'Mike', message: 'Don\'t forget to bring the jerseys', time: '10:45 AM', avatar: '👨' },
    { id: 4, user: 'You', message: 'I\'ll be there 30 minutes early for warm-up', time: '11:00 AM', avatar: '🏃' },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Team Chat</h1>
          <p className="text-white/80">Communicate with your teammates</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Channels Sidebar */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Users className="h-5 w-5" />
                Channels
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {channels.map((channel) => (
                  <button
                    key={channel.id}
                    onClick={() => setSelectedChannel(channel.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                      selectedChannel === channel.id
                        ? 'bg-emerald-500/20 border border-emerald-400/30'
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Hash className="h-4 w-4 text-white/60" />
                        <span className="text-white font-medium">{channel.name}</span>
                      </div>
                      {channel.unread > 0 && (
                        <Badge className="bg-red-500 text-white">
                          {channel.unread}
                        </Badge>
                      )}
                    </div>
                    <div className="text-white/60 text-sm mt-1">{channel.team}</div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Area */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 lg:col-span-3 flex flex-col">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Hash className="h-5 w-5" />
                {channels.find(c => c.id === selectedChannel)?.name}
              </CardTitle>
            </CardHeader>
            
            {/* Messages */}
            <CardContent className="flex-1 flex flex-col">
              <div className="flex-1 space-y-4 mb-4 overflow-y-auto max-h-96">
                {messages.map((msg) => (
                  <div key={msg.id} className="flex gap-3">
                    <div className="text-2xl">{msg.avatar}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-medium">{msg.user}</span>
                        <span className="text-white/60 text-sm">{msg.time}</span>
                      </div>
                      <div className="text-white/90">{msg.message}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white border-none"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chat;
