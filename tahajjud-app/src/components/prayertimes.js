import React from "react";

const PrayerTimes = () => {
    const prayers = [
    {name: "Fajr", time: "05:15" },
    {name: "Fajr", time: "05:15" },
    {name: "Fajr", time: "05:15" },
    {name: "Fajr", time: "05:15" },
    {name: "Tahajjud", time: "05:15" },
    ];

    return (
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
        <h2 className="text-xl font-semibold text-center mb-4">Prayer times</h2>
        <h2 className="text xl font-semibold text-center mb-4">prayers["Tahajjud"]</h2>
        <ul>
            {prayers.map((prayer, index) => (
                <li key={index} className="flex justify-between p-2 bg-white shadow-md rounded-md mb-2">
                    <span className="font-medium text-blue-600">{prayer.name}</span>
                    <span className="text-blue-600 ml-40">{prayer.time}</span>
                </li>
            ))};
        </ul>
      </div>  
    );
};

export default PrayerTimes;