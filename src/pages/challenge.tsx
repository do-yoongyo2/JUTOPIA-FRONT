import type { NextPage } from "next";
import { LeftBar } from "~/components/LeftBar";
import { BottomBar } from "~/components/BottomBar";
import { useEffect, useState } from "react";

const Challenge: NextPage = () => {
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
      <LeftBar selectedTab="챌린지" />
      <BottomBar selectedTab="챌린지" />
    </div>
  );
};

export default Challenge;
