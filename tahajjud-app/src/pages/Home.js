import React from 'react';
import PrayerTimes from '../components/prayertimes';

function Home() {
  return (
    <div className="bg-blue-500 text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Home Page</h1>
      <PrayerTimes />
    </div>
  );
}

export default Home;
