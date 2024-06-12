import type { NextPage } from "next";
import { LeftBar } from "~/components/LeftBar";
import { BottomBar } from "~/components/BottomBar";

const Challenge: NextPage = () => {
  return (
    <div>
      <LeftBar selectedTab="챌린지" />
      <BottomBar selectedTab="챌린지" />
    </div>
  );
};

export default Challenge;
