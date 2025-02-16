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

      const now = new Date();
      const currentTime = now.getHours() * 60 + now.getMinutes();
      const fajrToday = today ? parseInt(today.timings.Fajr.split(";")[0]) * 60 + parseInt(today.timings.Fajr.split(";")[1]) : null;
      const nextFajr = fajrToday !== null && currentTime >= fajrToday ? tomorrow?.timings.Fajr : today?.timings.Fajr;


      setPrayerTimes({ today, tomorrow, dayAfterTomorrow, nextFajr });
      setLoading(false);
    };

    fetchAllDays();
  }, []);

  const getFormattedDate = (daysAhead) => {
    const date = new Date();
    date.setDate(date.getDate() + daysAhead);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const calculateTahajjudTime = (maghrib, nextFajr) => {
    if (!maghrib || !nextFajr) {
      console.warn("Missing prayer times:", { maghrib, nextFajr });
      return "N/A";
    }
  
    const timeToMinutes = (time) => {
      const [hours, minutes] = time.split(":").map(Number);
      return hours * 60 + minutes;
    };
  
    try {
      const maghribMinutes = timeToMinutes(maghrib);
      const fajrMinutes = timeToMinutes(nextFajr);
  
      let nightDuration = fajrMinutes - maghribMinutes;
      if (nightDuration < 0) nightDuration += 24 * 60;
  
      const lastThirdStart = fajrMinutes - Math.floor(nightDuration / 3);
      const hours = Math.floor(lastThirdStart / 60);
      const minutes = lastThirdStart % 60;
  
      console.log(`Tahajjud Time Calculation: Maghrib=${maghrib}, NextFajr=${nextFajr}, LastThird=${hours}:${minutes}`);
  
      return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    } catch (error) {
      console.error("Error calculating Tahajjud time:", error);
      return "Error";
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-12 lg:p-18 w-full min-h-screen flex flex-col">
      <div className="bg-gray-100 p-8 rounded-lg flex flex-1 flex-col mt-10 mb-10 max-w-full sm:max-w-md lg:max-w-lg mx-auto">
        <h1 className="text-4xl font-semibold text-blue-700 mb-4 text-center">اَلسَلامُ عَلَيْكُم وَرَحْمَةُ اَللهِ وَبَرَكاتُهُ</h1>
        <p className="font-semibold text-blue-700 mb-0">
          Below you will find the Tahajjud times for the last third of the night specifically calculated already for you. However if you wish to manually calculate the last third of the night, there is a Tahajjud calculator for that at the bottom of the screen.
        </p>
      </div>

      <div className="bg-gray-100 mb-6 p-8 rounded-t-lg flex-1 flex flex-col max-w-full sm:max-w-md lg:max-w-lg mx-auto">
        <h1 className="tracking-tighter font-semibold text-blue-700 mb-4">
          <span className="text-5xl underline mr-4">Tahajjud Times</span>
          <span className="text-2xl block md:inline mt-4 italic">The Last Third of the Night</span>
        </h1>

        {loading ? (
          <p className="text-3xl text-blue-700">Loading prayer times...</p>
        ) : (
          <>
          <div className="bg-gray-200 text-3xl font-semibold text-blue-700 mt-5 p-4 rounded-lg shadow-xl flex flex-row flex-wrap justify-between max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
              <div>
                <h2>
                  <span className="mr-1">Tahajjud</span>
                  <span className="text-xl font-bold italic">today: </span>
                  <span className="font-bold tracking-tighter block sm-inline lg:inline m-3">
                    {calculateTahajjudTime(prayerTimes.today?.timings.Maghrib, prayerTimes.today?.timings.Fajr)}
                  </span>
                </h2>
              </div>
              <div>
                <h3 className="text-xl font-bold">{getFormattedDate(0)}</h3>
              </div>
            </div>

          <div className="bg-gray-200 text-3xl font-semibold text-blue-700 mt-5 p-4 rounded-lg shadow-xl flex flex-row flex-wrap justify-between max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
            <div>
                <h2>
                  <span className="mr-1">Tahajjud</span>
                  <span className="text-xl font-bold italic">tomorrow: </span>
                  <span className="font-bold tracking-tighter block sm-inline lg:inline m-3">
                    {calculateTahajjudTime(prayerTimes.tomorrow?.timings.Maghrib, prayerTimes.tomorrow?.timings.Fajr)}
                  </span>                </h2>
              </div>
              <div>
                <h3 className="text-xl font-bold">{getFormattedDate(1)}</h3>
              </div>
            </div>

          <div className="bg-gray-200 text-3xl font-semibold text-blue-700 mt-5 p-4 rounded-lg shadow-xl flex flex-row flex-wrap justify-between max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
            <div>
                <h2>
                  <span className="mr-1">Tahajjud</span>
                  <span className="text-xl font-bold italic">overmorrow: </span>
                  <span className="lg:m-0 font-bold tracking-tighter block sm-inline lg:inline sm:m-3">
                    {calculateTahajjudTime(prayerTimes.dayAfterTomorrow?.timings.Maghrib, prayerTimes.dayAfterTomorrow?.timings.Fajr)}
                  </span>
                </h2>
              </div>
              <div>
                <h3 className="text-xl font-bold">{getFormattedDate(2)}</h3>
              </div>
            </div>

            <div className="mt-8">
              <h1 className="text-xl tracking-tighter font-semibold text-blue-700 mb-4 text-ellipsis">
                  Occasionally, there may be some <span className="text-red-700">descrepancy</span> by a minute or so.
              </h1>
              <h1 className="text-xl tracking-tighter font-semibold text-blue-700 mb-4 text-ellipsis">
                  <span className="text-red-700">Overmorrow:</span> the day after tomorrow.
              </h1>
              
                
            </div>
          </>
        )}
      </div>

      <div className="bg-gray-100 mb-6 p-8 rounded-t-lg flex-1 flex flex-col max-w-full sm:max-w-md lg:max-w-lg mx-auto">
        <h1 className="text-5xl font-semibold text-blue-700 mb-4">Tahajjud Calculator</h1>
        <h2 className="text-3xl font-semibold text-blue-700">
          <span>Tahajjud: </span>
        </h2>
      </div>

    </div>
  );
}

export default PrayerTimes;
