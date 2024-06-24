import React, { useState, useEffect } from "react";
import { useBoundStore } from "~/hooks/useBoundStore";
import { readSinceJoinDate } from "~/apis/user";
import Image from "next/image";

const Profile: React.FC = () => {
  const username = useBoundStore((x) => x.name);
  const email = useBoundStore((x) => x.email);
  const [daysSinceJoined, setDaysSinceJoined] = useState<number | null>(null);

  useEffect(() => {
    async function fetchDaysSinceJoined() {
      try {
        const response = await readSinceJoinDate(email);
        setDaysSinceJoined(response.daysSinceJoined);
      } catch (error) {
        console.error("Error fetching days since joined:", error);
        // 에러 처리 로직을 추가할 수 있습니다.
      }
    }

    fetchDaysSinceJoined().catch((error) => {
      console.error("Unhandled error:", error);
    });
  }, [email]);

  return (
    <div className="m-5 flex flex-col items-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-400 p-5 text-white shadow-lg sm:flex-row sm:justify-evenly">
      <Image
        src="/UNIT2_3/축하원숭이.png"
        alt="Profile"
        width="500"
        height="500"
        className="h-24 w-24 rounded-full border-4 border-white shadow-md sm:h-40 sm:w-40"
      />
      <div className="mt-4 text-center sm:ml-5 sm:mt-0 sm:text-left">
        <h1 className="text-xl font-bold sm:text-2xl">{username} 님</h1>
        <h2 className="mt-2 text-sm font-semibold sm:text-lg">
          주토피아와 함께한 지 {daysSinceJoined}일
        </h2>
        <h2 className="mt-2 text-sm font-semibold sm:text-lg">
          이번 주 총 N일 학습 완🔥
        </h2>
      </div>
    </div>
  );
};

export default Profile;
