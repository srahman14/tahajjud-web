import React, { useState, useEffect } from "react";
import BlogSnippet from "../components/BlogSnippet";
import axios from "axios";

function Ramadan() {

  const [prayerTimes, setPrayerTimes] = useState({  today: null, tomorrow: null });
  const [loading, setLoading] = useState(false);

  const fetchPrayerTimes = async (daysAhead) => {
    try {
      const date = new Date();
      date.setDate(date.getDate() + daysAhead);
      const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

      const response = await axios.get(`https://api.aladhan.com/v1/timings/${formattedDate}`, {
        params: {
          latitude: 51.5074,
          longitude: -0.1278,
          method: 2,
        },
      });

      return response.data.data.timings;
    } catch (error) {
      console.error("Error fetching prayer times:", error);
      return null;
    }
  };

  const calculateSuhoorTime = (fajrTime) => {
    const fajrDate = new Date(`2025-02-27T${fajrTime}`);
    fajrDate.setMinutes(fajrDate.getMinutes() - 15); 
    return fajrDate.toTimeString().slice(0, 5); 
  };

  const fetchAllDays = async () => {
    setLoading(true);

    const todayTimes = await fetchPrayerTimes(0);
    const tomorrowTimes = await fetchPrayerTimes(1);

    if (todayTimes && tomorrowTimes) {
      const suhoorToday = calculateSuhoorTime(todayTimes.Fajr);
      const suhoorTomorrow = calculateSuhoorTime(tomorrowTimes.Fajr);

      setPrayerTimes({
        today: { maghrib: todayTimes.Maghrib, suhoor: suhoorToday },
        tomorrow: { maghrib: tomorrowTimes.Maghrib, suhoor: suhoorTomorrow },
      });
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchAllDays();
  }, []);

  return (
    <div className="bg-blue-500 p-4 sm:p-6 md:p-12 lg:p-18 w-full min-h-screen flex flex-col">
      <div className="bg-gray-100 p-8 rounded-lg flex-1 flex flex-col mt-20 mb-40 w-full max-w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center divide-x-0 md:divide-x-8 divide-blue-500 m-3">
            <div className="flex-1 flex-col">
                <h1 className="flex-1 text-4xl font-semibold text-blue-700 mb-4 text-center tracking-tighter ">
                    Suhoor Time Today
                </h1>
                <h1 className="text-center font-bold text-7xl mt-4 bg-gradient-to-r from-blue-700 to-purple-500 text-transparent bg-clip-text">{prayerTimes.today?.suhoor}</h1>
            </div>
            <div className="flex-1 flex-col">
                <h1 className="flex-1 text-4xl font-semibold text-blue-700 mb-4 text-center mt-12 md:mt-0 tracking-tighter ">
                    Iftar Time Today
                </h1>
                <h1 className="text-center font-bold text-7xl mt-4 bg-gradient-to-r from-blue-700 to-purple-500 text-transparent bg-clip-text">{prayerTimes.today?.maghrib}</h1>
            </div>
        </div>
        <hr className="my-2 border-t-4 border-blue-600 w-1/2 mx-auto md:hidden"></hr>
        <div className="flex flex-col md:flex-row justify-between items-center divide-x-0 md:divide-x-8 divide-blue-500 m-3">

            <div className="flex-1 flex-col">
                <h1 className="text-2xl font-semibold text-blue-700 mb-0 md:mb-2 text-center tracking-tighter">
                    Suhoor Time Tomorrow
                </h1>
                <h1 className="text-center font-bold text-4xl mt-4 bg-gradient-to-r from-blue-700 to-purple-500 text-transparent bg-clip-text">{prayerTimes.tomorrow?.suhoor}</h1>
            </div>
            <div className="flex-1 flex-col">
                <h1 className="text-2xl font-semibold text-blue-700 mb-2 text-center mt-12 md:mt-0 tracking-tighter">
                    Iftar Time Tomorrow
                </h1>
                <h1 className="text-center font-bold text-4xl mt-4 bg-gradient-to-r from-blue-700 to-purple-500 text-transparent bg-clip-text">{prayerTimes.tomorrow?.maghrib}</h1>
            </div>
          </div>

      </div>
    
    
    <div className="bg-gray-100 p-8 rounded-lg flex flex-1 flex-col mt-0 mb-40 w-full max-w-full mx-auto">
        <div className="justify-center items-center text-center">
            <h1 className="text-4xl font-semibold text-blue-700 mb-4 text-center tracking-tighter underline">
                Daily Hadith
            </h1>

            <p className='font-semibold text-blue-700 mt-2 text-center max-w-md mx-auto text-xl'>
            It was narrated from <span className='font-bold'>Abu Hurayrah (رضي الله عنه)</span> that <span className='font-bold'>the Messenger of Allah (ﷺ)</span> said:
            
            <figure className="bg-gray-200 p-1 rounded-lg mt-2 mb-2">
                <span className='block font-bold p-2 mt-2 mb-2 bg-gradient-to-r from-blue-700 to-purple-500 text-transparent bg-clip-text text-xl'>“Our Lord, may He be blessed and exalted, comes down to the lowest heaven every night when the last third of the night is left, and He says: ‘Who will call upon Me, that I may answer him? Who will ask of Me, that I may give him? Who will ask Me for forgiveness, that I may forgive him?’”</span>

            </figure>

            <span className='italic'>Narrated by <span className='font-bold'>al-Bukhaari (1145) and Muslim (758)</span></span>
            </p>

            <p className="font-semibold bg-gray-300 rounded-lg p-3 text-blue-700 hover:text-blue-500 mt-4 overflow-x-hidden">
            <a href='https://islamqa.info/en/answers/291824/the-virtue-of-offering-supplication-in-the-last-third-of-the-night'>Source: https://islamqa.info/en/answers/291824/the-virtue-of-offering-supplication-in-the-last-third-of-the-night</a>
            </p>
        </div>
    </div>

      <div className="bg-gray-100 p-8 rounded-lg flex flex-1 flex-col mt-0 mb-40 w-full max-w-full mx-auto">
        <BlogSnippet />
      </div>
    </div>
  );
}
export default Ramadan;