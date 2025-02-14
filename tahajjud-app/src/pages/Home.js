import React from 'react';
import PrayerTimes from '../components/prayertimes';

function Home() {
  return (
    <div className="bg-blue-500 text-white min-h-screen flex flex-col items-center justify-center">
      <PrayerTimes />
    </div>
  );
}

export default Home;
