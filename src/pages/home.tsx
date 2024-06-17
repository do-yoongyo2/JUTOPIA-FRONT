import type { NextPage } from "next";
import { LeftBar } from "~/components/LeftBar";
import { BottomBar } from "~/components/BottomBar";
import TopBar from "~/components/TopBar";
import { useEffect, useState } from "react";

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
    <div>
      <TopBar menuName="Home" />
      <LeftBar selectedTab="홈" />
      <BottomBar selectedTab="홈" />
    </div>
  );
};

export default Home;
