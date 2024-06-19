import type { NextPage } from "next";
import React from "react";
import { LeftBar } from "~/components/LeftBar";
import { BottomBar } from "~/components/BottomBar";
import ChallengeGrid from "~/components/ChallengeGrid";

const Reward: NextPage = () => {
  // Sample data for challenge cards

  return (
    <div className="font-ttlaundrygothicb">
      <LeftBar selectedTab="리워드" />

      <div className="flex justify-center gap-3 pt-14 sm:p-6 sm:pt-10 md:ml-24 lg:ml-64 lg:gap-12">
        <div className="flex max-w-[65rem] grow flex-col">
          <h1 className="border-b-2 pb-4 text-center text-4xl font-bold">
            {" "}
            도전과제 <div className="pt-[40px]"></div>
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
