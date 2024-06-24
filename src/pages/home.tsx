import type { NextPage } from "next";
import { LeftBar } from "~/components/LeftBar";
import { BottomBar } from "~/components/BottomBar";
import TopBar from "~/components/TopBar";
import { useEffect, useState } from "react";
import Profile from "~/components/HomeProfile";
import WeeklyCalendar from "~/components/WeeklyCalender";
import Card from "~/components/HomeCard";
import MarketIssues from "~/components/HomeMarketIssues";
import DomesticStock from "~/components/DomesticStock";

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
      <div className="lg:flex">
        <LeftBar selectedTab="홈" className="hidden lg:block" />
        <div className="flex flex-col sm:p-6 sm:pt-10 lg:ml-64 lg:flex-row lg:justify-center lg:gap-12">
          <div className="flex max-w-[65rem] grow flex-col">
            <Profile />
            <WeeklyCalendar />
            <div className="m-5 flex flex-col gap-6 md:flex-row md:justify-between">
              <Card title="시장 지표" content={<DomesticStock />} />
              <Card
                title="최신 금융 칼럼(with 신한투자증권)"
                content={<MarketIssues />}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[90px]"></div>
      <BottomBar selectedTab="홈" className="lg:hidden" />
    </div>
  );
};

export default Home;
