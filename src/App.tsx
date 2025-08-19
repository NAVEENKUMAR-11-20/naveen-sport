import React from 'react';
import HeroSection from './components/HeroSection';
import CompletedWorkSection from './components/CompletedWorkSection';
import StartupSection from './components/StartupSection';
import ReviewsSection from './components/ReviewsSection';
import WorkWithMeSection from './components/WorkWithMeSection';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CompletedWorkSection />
      <StartupSection />
      <ReviewsSection />
      <WorkWithMeSection />
    </div>
  );
}

export default App;