import React, { useState, useEffect } from "react";
import { useBoundStore } from "~/hooks/useBoundStore";
import { readSinceJoinDate } from "~/apis/user";

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
    <div className="flex flex-row items-center justify-evenly rounded-lg bg-gradient-to-r from-blue-500 to-blue-400 p-5 text-white shadow-lg">
      <img
        src="UNIT2_3/축하원숭이.png"
        alt="Profile"
        className="h-40 w-40 rounded-full border-4 border-white shadow-md"
      />
      <div className="ml-5">
        <h1 className="text-2xl font-bold">{username} 님</h1>
        <h2 className="mt-2 text-lg font-semibold">
          주토피아와 함께한 지 {daysSinceJoined}일
        </h2>
        <h2 className="mt-2 text-lg font-semibold">이번 주 총 N일 학습 완🔥</h2>
      </div>
    </div>
  );
};

export default Profile;
