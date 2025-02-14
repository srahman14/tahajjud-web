import React, { useEffect, useState } from "react";
import axios from "axios";

function PrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState({ today: null, tomorrow: null, dayAfterTomorrow: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrayerTimes = async (daysAhead) => {
      try {
        const date = new Date();
        date.setDate(date.getDate() + daysAhead);
        const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`; // Correct format

        const response = await axios.get(`https://api.aladhan.com/v1/timings/${formattedDate}`, {
          params: {
            latitude: 51.5074, // London's latitude
            longitude: -0.1278, // London's longitude
            method: 2, // ISNA calculation method
          },
        });

        return { date: formattedDate, timings: response.data.data.timings };
      } catch (error) {
        console.error("Error fetching prayer times:", error);
        return null;
      }
    };

    const fetchAllDays = async () => {
      setLoading(true);
      const today = await fetchPrayerTimes(0);
      const tomorrow = await fetchPrayerTimes(1);
      const dayAfterTomorrow = await fetchPrayerTimes(2);

      setPrayerTimes({ today, tomorrow, dayAfterTomorrow });
      setLoading(false);
    };

    fetchAllDays();
  }, []);

  const getFormattedDate = (daysAhead) => {
    const date = new Date();
    date.setDate(date.getDate() + daysAhead);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <div className="p-20 w-full h-screen flex flex-col">
      {/* Left Side */}
      <div className="bg-gray-100 mb-6 p-8 rounded-t-lg flex-1 flex flex-col">
        <h1 className="text-5xl tracking-tighter underline font-semibold text-blue-700 mb-4">
          Tahajjud Times
        </h1>

        {loading ? (
          <p className="text-3xl text-blue-700">Loading prayer times...</p>
        ) : (
          <>
            <div className="bg-gray-200 text-3xl font-semibold text-blue-700 mt-5 p-4 rounded-lg shadow-xl flex flex-row flex-wrap justify-between">
              <div>
                <h2>
                  <span className="mr-1">Tahajjud</span>
                  <span className="text-xl font-bold italic">today: </span>
                  <span className="font-bold tracking-tighter">{prayerTimes.today?.timings.Fajr}</span>
                </h2>
              </div>
              <div>
                <h3 className="text-xl font-bold">{getFormattedDate(0)}</h3>
              </div>
            </div>

            <div className="bg-gray-200 text-3xl font-semibold text-blue-700 mt-5 p-4 rounded-lg shadow-xl flex flex-row flex-wrap justify-between">
              <div>
                <h2>
                  <span className="mr-1">Tahajjud</span>
                  <span className="text-xl font-bold italic">tomorrow: </span>
                  <span className="font-bold tracking-tighter">{prayerTimes.tomorrow?.timings.Fajr}</span>
                </h2>
              </div>
              <div>
                <h3 className="text-xl font-bold">{getFormattedDate(1)}</h3>
              </div>
            </div>

            <div className="bg-gray-200 text-3xl font-semibold text-blue-700 mt-5 p-4 rounded-lg shadow-xl flex flex-row flex-wrap justify-between">
              <div>
                <h2>
                  <span className="mr-1">Tahajjud</span>
                  <span className="text-xl font-bold italic">day-after-tomorrow: </span>
                  <span className="font-bold tracking-tighter">{prayerTimes.dayAfterTomorrow?.timings.Fajr}</span>
                </h2>
              </div>
              <div>
                <h3 className="text-xl font-bold">{getFormattedDate(2)}</h3>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="bg-gray-100 p-8 rounded-b-lg flex-1 flex flex-col">
        <h1 className="text-5xl font-semibold text-blue-700 mb-4">Tahajjud Calculator</h1>
        <h2 className="text-3xl font-semibold text-blue-700">
          <span>Tahajjud: </span>
        </h2>
      </div>
    </div>
  );
}

export default PrayerTimes;
