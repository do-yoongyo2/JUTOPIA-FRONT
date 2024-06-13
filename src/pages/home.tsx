import type { NextPage } from "next";
import { LeftBar } from "~/components/LeftBar";
import { BottomBar } from "~/components/BottomBar";
import TopBar from "~/components/TopBar";

const Home: NextPage = () => {
  return (
    <div>
      <TopBar menuName="Home" />
      <LeftBar selectedTab="홈" />
      <BottomBar selectedTab="홈" />
    </div>
  );
};

export default Home;
