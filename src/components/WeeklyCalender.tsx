import React, { useState } from "react";

const WeeklyCalendar: React.FC = () => {
  const [stickers, setStickers] = useState<{ [key: string]: boolean }>({
    Sun: false,
    Mon: false,
    Tue: false,
    Wed: false,
    Thu: false,
    Fri: false,
    Sat: false,
  });

  const toggleSticker = (day: string) => {
    setStickers((prevStickers) => ({
      ...prevStickers,
      [day]: !prevStickers[day],
    }));
  };

  return (
    <div className="flex flex-col items-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-500 p-5 text-white shadow-lg">
      <h2 className="mb-3 border-b-2 border-white pb-2 text-xl font-semibold">
        This Week
      </h2>
      <div className="flex w-full justify-evenly">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="flex transform cursor-pointer flex-col items-center transition-transform duration-200 ease-in-out hover:scale-105"
            onClick={() => toggleSticker(day)}
          >
            <span className="mb-1 text-sm">{day}</span>
            <span
              className={`relative flex h-20 w-20 items-center justify-center rounded-full bg-gray-200 text-2xl ${
                stickers[day] ? "animate-bounce bg-yellow-300" : ""
              }`}
            >
              👍
              {stickers[day] && (
                <span className="absolute right-0 top-0 h-4 w-4 animate-ping rounded-full bg-red-500" />
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCalendar;
