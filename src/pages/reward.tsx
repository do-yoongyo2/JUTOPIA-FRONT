import type { NextPage } from "next";
import React from "react";
import { LeftBar } from "~/components/LeftBar";
import { BottomBar } from "~/components/BottomBar";
import TopBar from "~/components/TopBar";

const Reward: NextPage = () => {
  return (
    <div>
      <TopBar menuName="Rewards" />
      <LeftBar selectedTab="리워드" />
      <BottomBar selectedTab="리워드" />
    </div>
  );
};

export default Reward;
