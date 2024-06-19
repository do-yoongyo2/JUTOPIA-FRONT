import type { NextPage } from "next";
import { LeftBar } from "~/components/LeftBar";
import { BottomBar } from "~/components/BottomBar";
import { useState, useEffect } from "react";
import ChallengeGrid from "~/components/ChallengeGrid";

const Reward: NextPage = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    // 초기 로딩 상태 표시 또는 빈 상태로 렌더링
    return null;
  }
  return (
    <div className="font-ttlaundrygothicb">
      <LeftBar selectedTab="리워드" />

      <div className="flex justify-center gap-3 pt-14 sm:p-6 sm:pt-10 md:ml-24 lg:ml-64 lg:gap-12">
        <div className="flex max-w-[65rem] grow flex-col">
          <h1 className="border-b-2 pb-4 text-center text-4xl font-bold">
            {" "}
            🔥도전과제🔥 <div className="pt-[40px]"></div>
          </h1>
          <div className="pt-[40px]"></div>
          <ChallengeGrid />
        </div>
      </div>

      <BottomBar selectedTab="리워드" />
    </div>
  );
};

export default Reward;
