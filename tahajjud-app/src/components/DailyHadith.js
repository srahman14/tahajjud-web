import React, { useState, useEffect } from "react";

const DailyHadith = () => {
  const [hadith, setHadith] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = 'https://api.sunnah.com/v1/collections/bukhari/hadiths';

  useEffect(() => {
    const fetchHadith = async () => {
      try {
        const response = await fetch(
          url
        );
        const data = await response.json();

        const todayIndex = new Date().getDate() % data.hadiths.length;
        const selectedHadith = data.hadiths[todayIndex];

        const hadithData = {
          narrator: selectedHadith.hadith[0].chapterTitle,
          textEng: selectedHadith.hadith[0].body,
          textAr: selectedHadith.hadith[1]?.body || "Arabic not available",
          source: `Sahih Bukhari, Book ${selectedHadith.bookNumber}, Hadith ${selectedHadith.hadithNumber}`,
          sourceLink: `https://sunnah.com/bukhari:${selectedHadith.hadithNumber}`,
        };

        setHadith(hadithData);
      } catch (error) {
        console.error("Error fetching hadith:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHadith();
  }, []);

  if (loading) return <p>Loading hadith...</p>;
  if (!hadith) return <p>Hadith data is unavailable at the moment.</p>;

  return (
    <div className="bg-gray-100 p-8 rounded-lg flex flex-1 flex-col mt-0 mb-40 w-full max-w-full mx-auto">
      <div className="justify-center items-center text-center">
        <h1 className="text-4xl font-semibold text-blue-700 mb-4 text-center tracking-tighter underline">
          Daily Hadith
        </h1>

        <div className="text-center max-w-md mx-auto text-xl">
          <p className="font-semibold text-blue-700 mt-2">
            <span className="font-bold">{hadith.narrator}</span>
          </p>

          <figure className="bg-gray-200 p-1 rounded-lg mt-2 mb-2">
            <p className="text-lg font-semibold text-gray-800">{hadith.textEng}</p>
            <p className="text-xl font-semibold text-right text-gray-600 mt-3">{hadith.textAr}</p>
          </figure>

          <p className="italic font-semibold text-blue-700 mt-2 text-center">{hadith.source}</p>
        </div>

        <p className="font-semibold bg-gray-300 rounded-lg p-3 text-blue-700 hover:text-blue-500 mt-4 overflow-x-hidden">
          <a href={hadith.sourceLink} target="_blank" rel="noopener noreferrer">
            Read on Sunnah.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default DailyHadith;
