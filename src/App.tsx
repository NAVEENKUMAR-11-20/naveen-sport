import React from 'react';
import HeroSection from './components/HeroSection';
import CompletedWorkSection from './components/CompletedWorkSection';
import StartupSection from './components/StartupSection';
import WorkWithMeSection from './components/WorkWithMeSection';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CompletedWorkSection />
      <StartupSection />
      <WorkWithMeSection />
    </div>
  );
}

export default App;