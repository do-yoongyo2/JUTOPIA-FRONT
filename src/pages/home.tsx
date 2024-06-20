import type { NextPage } from "next";
import { LeftBar } from "~/components/LeftBar";
import { BottomBar } from "~/components/BottomBar";
import TopBar from "~/components/TopBar";
import { useEffect, useState } from "react";
import Profile from "~/components/HomeProfile";
import WeeklyCalendar from "~/components/WeeklyCalender";
import Card from "~/components/HomeCard";
import MarketIssues from "~/components/HomeMarketIssues";

const Home: NextPage = () => {
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
      <TopBar menuName="Home" />
      <LeftBar selectedTab="홈" />

      <div className="flex justify-center gap-3 pt-14 sm:p-6 sm:pt-10 md:ml-24 lg:ml-64 lg:gap-12">
        <div className="flex max-w-[65rem] grow flex-col">
          <Profile />

          <div className="pt-[40px]"></div>
          <WeeklyCalendar></WeeklyCalendar>
          <div className="pt-[40px]"></div>
          <div className="flex flex-row justify-evenly">
            <Card title="시장 지표" content="시장 지표 api 연결" />
            {/* <Card title="최신 금융 칼럼" content="금융 칼럼 api 연결" /> */}
            <MarketIssues />
          </div>
        </div>
      </div>

      <BottomBar selectedTab="홈" />
    </div>
  );
};

export default Home;
