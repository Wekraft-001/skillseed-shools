import MainContent from '../components/MainContent';
import { PageMetadata } from '../components/PageMetadata';

const Index = () => {
  return (
    <>
      <PageMetadata 
        title="Dashboard | SkillSeed" 
        description="Your SkillSeed dashboard - Track your learning progress and access your courses" 
      />
      <MainContent />
    </>
  );
};

export default Index;
