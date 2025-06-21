
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TeamCreationSection from '@/components/TeamCreationSection';
import MatchScheduleSection from '@/components/MatchScheduleSection';
import LeaderboardSection from '@/components/LeaderboardSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TeamCreationSection />
      <MatchScheduleSection />
      <LeaderboardSection />
    </div>
  );
};

export default Index;
